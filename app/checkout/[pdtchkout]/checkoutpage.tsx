"use client";
import React, { useEffect, useState } from 'react';
import { privateApi } from '@/lib/app';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

interface inputprops {
  idval: number;
}

interface DeliveryInfo {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address1: string;
    address2: string;
    stateName: string;
    pinCode: string;
  };
  product: {
    finalPrice: number;
    price: number;
    discountPercentage: number;
    discountAmount: number;
    deliveryCharge: number;
    productPageImageUrl: string;
    productName: string;
  };
}
declare global {
  interface Window {
    Razorpay: new (options: unknown) => { open: () => void };
  }
}

function CheckoutPage({ idval }: inputprops) {
  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

  const [deliveryinfo, setdeliveryinfo] = useState<DeliveryInfo | null>(null);
  const { accessToken, isRestoring } = useAuth();
  const router = useRouter();
  const [loadingProfile, setLoadingProfile] = useState(true);
  const startPayment = async () => {
  try {
    const shippingAddress = {
  line1: (document.getElementById("ship-line1") as HTMLInputElement).value,
  line2: (document.getElementById("ship-line2") as HTMLInputElement).value,
  state: (document.getElementById("ship-state") as HTMLInputElement).value,
  pin: (document.getElementById("ship-pin") as HTMLInputElement).value,
};

const billingAddress = {
  line1: (document.getElementById("bill-line1") as HTMLInputElement).value,
  line2: (document.getElementById("bill-line2") as HTMLInputElement).value,
  state: (document.getElementById("bill-state") as HTMLInputElement).value,
  pin: (document.getElementById("bill-pin") as HTMLInputElement).value,
};
    const res = await privateApi.post("/User/createRazorpayOrder", {
      amount: product.finalPrice,
      productId: idval,
      shippingAddress,
      billingAddress

    });

    const { orderId, key, amount } = res.data;

    const options = {
      key,
      amount,
      currency: "INR",
      name: "Wrii Studio",
      description: "Purchase Payment",
      order_id: orderId,
      handler: async function (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) {
        // Send to backend for verification
        await verifyPayment(response);
      },
      prefill: {
        name: user.firstName + " " + user.lastName,
        email: user.email,
        contact: user.phoneNumber
      },
      theme: {
        color: "#000000"
      }
    };

    const razor = new (window.Razorpay as unknown as { new(options: unknown): { open(): void } })(options);
    razor.open(); // 🚀 Opens Razorpay POPUP UI
  } catch (err) {
    console.error(err);
  }
};
const verifyPayment = async (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
  const verifyResponse = await privateApi.post("/User/verifyPayment", response);
  console.log(verifyResponse.data);
  if (verifyResponse.data) {
    router.push('/account/profile#orders');
  } else {
    alert("Payment verification failed. Please contact support.");
  }
};
  useEffect(() => {
    if (!isRestoring && accessToken) {
      const fetchdata = async () => {
        try {
          const response = await privateApi.get("/User/checkOutPage", {
            params: { pid: idval },
          });
          setdeliveryinfo(response.data);
        } catch (error) {
          console.error("Failed to fetch checkout data", error);
        } finally {
          setLoadingProfile(false);
        }
      };
      fetchdata();
    }
  }, [isRestoring, accessToken, idval]);

  useEffect(() => {
    if (!isRestoring && !accessToken) {
      router.push('/auth/login');
    }
  }, [accessToken, isRestoring, router]);

  if (isRestoring || loadingProfile || !deliveryinfo) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <p className="text-[10px] uppercase tracking-[0.5em] animate-pulse">
          Loading Checkout .....
        </p>
      </div>
    );
  }

  const { user, product } = deliveryinfo;

  const handleSameAsShipping = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const fields = ['line1', 'line2', 'state', 'pin'];
    
    fields.forEach(field => {
      const shipInput = document.getElementById(`ship-${field}`) as HTMLInputElement;
      const billInput = document.getElementById(`bill-${field}`) as HTMLInputElement;
      if (shipInput && billInput) {
        billInput.value = checked ? shipInput.value : "";
      }
    });
  };

  return (
    <main className="min-h-screen bg-white font-['Instrument_Sans'] text-gray-900">
      {/* MOBILE HEADER */}
      <div className="md:hidden sticky top-0 z-[60] bg-white border-b border-gray-100">
        <div className="px-6 py-4 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold">
          <span>Checkout</span> <span>₹{product.finalPrice}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* LEFT: SHIPPING FORM */}
        <section className="w-full md:w-[60%] px-6 md:px-12 lg:px-24 py-12 md:py-20 md:border-r md:border-gray-100">
          <div className="max-w-xl ml-auto">
            <header className="mb-16">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4">Step 01 / Shipping</p>
              <h1 className="text-3xl md:text-5xl font-serif italic text-gray-800">Delivery Information</h1>
            </header>

            <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
              {/* Email & Contact (Read Only) */}
              <div className="space-y-12">
                <div className="relative">
                  <input type="email" value={user.email} disabled className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none text-sm text-gray-400" />
                  <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> Email Address </label>
                </div>

                <div className="grid grid-cols-2 gap-12">
                  <div className="relative">
                    <input type="text" value={user.firstName} disabled className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none text-sm text-gray-400" />
                    <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> First Name </label>
                  </div>
                  <div className="relative">
                    <input type="text" value={user.lastName} disabled className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none text-sm text-gray-400" />
                    <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> Last Name </label>
                  </div>
                </div>

                <div className="relative">
                  <input type="tel" value={user.phoneNumber} disabled className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none text-sm text-gray-400" />
                  <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> Phone Number </label>
                </div>
              </div>

              {/* SHIPPING ADDRESS - Populated with defaults */}
              <div className="space-y-12">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-500"> Shipping Address </h3>
                
                <div className="relative">
                  <input type="text" defaultValue={user.address1} id="ship-line1" className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black text-sm" />
                  <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> Address Line 1 </label>
                </div>

                <div className="relative">
                  <input type="text" defaultValue={user.address2} id="ship-line2" className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black text-sm" />
                  <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> Address Line 2 </label>
                </div>

                <div className="grid grid-cols-2 gap-12">
                  <div className="relative">
                    <input type="text" defaultValue={user.stateName} id="ship-state" className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black text-sm" />
                    <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> State </label>
                  </div>
                  <div className="relative">
                    <input type="text" defaultValue={user.pinCode} id="ship-pin" className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black text-sm" />
                    <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> Pincode </label>
                  </div>
                </div>
              </div>

              {/* Same as Shipping Toggle */}
              <label className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500 cursor-pointer">
                <input type="checkbox" onChange={handleSameAsShipping} className="accent-black w-4 h-4" />
                Billing address same as shipping
              </label>

              {/* BILLING ADDRESS */}
              <div className="space-y-12">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-500"> Billing Address </h3>
                <div className="relative">
                  <input type="text" id="bill-line1" className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black text-sm" />
                  <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> Address Line 1 </label>
                </div>
                <div className="relative">
                  <input type="text" id="bill-line2" className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black text-sm" />
                  <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> Address Line 2 </label>
                </div>
                <div className="grid grid-cols-2 gap-12">
                  <div className="relative">
                    <input type="text" id="bill-state" className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black text-sm" />
                    <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> State </label>
                  </div>
                  <div className="relative">
                    <input type="text" id="bill-pin" className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black text-sm" />
                    <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400"> Pincode </label>
                  </div>
                </div>
              </div>

              <button
              type="button"
              onClick={startPayment}
              className="w-full md:w-auto px-20 py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-xl"
            >
              Proceed to Payment
            </button>
            </form>
          </div>
        </section>

        {/* RIGHT: ORDER SUMMARY */}
        <aside className="hidden md:block w-full md:w-[40%] px-12 lg:px-20 py-20 bg-gray-50 h-screen sticky top-0 overflow-y-auto">
          <div className="max-w-md">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold mb-12">Review Your Order</h3>
            
            <div className="space-y-10 mb-16">
              <div className="flex gap-8 group">
                <div className="w-24 h-32 bg-white border border-gray-100 overflow-hidden shrink-0">
                  <img 
                    src={product.productPageImageUrl} 
                    className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0" 
                    alt={product.productName} 
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-gray-800 mb-1">
                    {product.productName}
                  </h4>
                  <p className="text-xs font-bold tracking-widest"> ₹{product.price} </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 space-y-5">
              <div className="flex justify-between text-[11px] uppercase tracking-widest text-gray-400">
                <span>Subtotal</span>
                <span className="text-gray-900">₹{product.price}</span>
              </div>
              <div className="flex justify-between text-[11px] uppercase tracking-widest text-gray-400">
                <span>Discount ({product.discountPercentage}%)</span>
                <span className="text-green-600">-₹{product.discountAmount}</span>
              </div>
              <div className="flex justify-between text-[11px] uppercase tracking-widest text-gray-400">
                <span>Delivery</span>
                <span className="text-gray-900">₹{product.deliveryCharge}</span>
              </div>
              <div className="flex justify-between items-end pt-6 border-t border-gray-100">
                <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400"> Total Due </span>
                <span className="text-2xl font-bold tracking-tighter"> ₹{product.finalPrice} </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default CheckoutPage;
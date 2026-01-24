"use client";
import { useAuth } from '@/context/AuthContext';
import { updateMemoryToken } from '@/lib/app';
import React, { useState } from 'react'
import api from '@/lib/app' // Access your Axios file
import { useRouter } from 'next/navigation';


function LoginSignupPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', dateOfBirth: '',
    email: '', phoneNumber: '', state: 1, 
    address1: '', address2: '', pinCode: '', password: ''
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { setAccessToken, setIsRestoring } = useAuth(); // Add setIsRestoring here

const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await api.post('/Auth/register', formData);
        
        // 1. Get the token from response
        const token = response.data.token;

        // 2. STORE IN MEMORY (Wiped on refresh, safe from XSS)
        setAccessToken(token);      // For React UI/Context
        updateMemoryToken(token);   // For Axios Interceptor logic

        // Note: Refresh Token is handled automatically by the browser cookie!
        
        router.push('/account/profile');
    } catch (error) {
        console.error("Registration Error:", error);
    }
};
  
  // 1. LOGIN HANDLER: Only sends Email and Password
  // app/auth/login/page.js


const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const loginData = { email: formData.email, password: formData.password };
        
        // IMPORTANT: withCredentials: true must be here to save the HttpOnly cookie
        const response = await api.post('/Auth/login', loginData, { withCredentials: true });

        const token = response.data.token;

        // 1. Fill the Memory
        setAccessToken(token);
        updateMemoryToken(token);

        // 2. CRITICAL: Tell the app we are NO LONGER "restoring"
        // This stops the ProfilePage from showing the loading screen
        setIsRestoring(false);

        router.push('/account/profile');
    } catch (error) {
        console.error("Login Error:", error);
    }
};
  return (
    <main className="relative flex min-h-screen w-full overflow-hidden font-['Instrument_Sans']">
      
      {/* 1. BACKGROUND IMAGE (Unchanged for design consistency) */}
      <section className="absolute inset-0 md:relative md:block md:w-[65%] h-full overflow-hidden bg-slate-100">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070" 
          alt="Editorial" 
          className="w-full h-full object-cover grayscale-[20%] brightness-90"
        />
        <div className="absolute inset-0 bg-black/10 hidden md:flex items-end p-20">
          <div className="text-white">
            <p className="text-[10px] uppercase tracking-[0.6em] mb-4 opacity-80">The Art of Living</p>
            <h2 className="text-5xl font-serif italic leading-tight">Curated collections <br/> for the modern soul.</h2>
          </div>
        </div>
      </section>

      {/* 2. FORM SECTION (Optimized for MContact Fields) */}
      <section className="relative w-full md:w-[35%] min-h-screen bg-white flex flex-col justify-between p-8 lg:p-12 z-10">
        
        <div className="md:text-left text-center">
           <h3 className="text-xs uppercase tracking-[0.5em] font-bold text-black">
              Wrii Studio<span className="text-blue-500">.</span>
           </h3>
        </div>

        <div className="space-y-8">
          <header className="md:text-left text-center">
            <h1 className="text-3xl font-serif italic mb-2 text-slate-900">
              {isLogin ? "Welcome Back" : "Join the Studio"}
            </h1>
            <p className="text-[9px] uppercase tracking-widest text-slate-400">
              {isLogin ? "Please enter details to continue" : "Fill in your profile details"}
            </p>
          </header>

          <form onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit} className="space-y-6">
            {!isLogin && (
              <>
                {/* 2-Column Grid for Names: Saves vertical space */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative"><input name="firstName" placeholder="First Name" onChange={handleChange} className="w-full border-b border-slate-200 py-2 outline-none text-xs uppercase tracking-tighter" required /></div>
                  <div className="relative"><input name="lastName" placeholder="Last Name" onChange={handleChange} className="w-full border-b border-slate-200 py-2 outline-none text-xs uppercase tracking-tighter" required /></div>
                </div>

                {/* 2-Column Grid for DOB and Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative"><input name="dateOfBirth" type="date" onChange={handleChange} className="w-full border-b border-slate-200 py-2 outline-none text-xs text-slate-400" required /></div>
                  <div className="relative"><input name="phoneNumber" placeholder="Phone (10 Digits)" onChange={handleChange} className="w-full border-b border-slate-200 py-2 outline-none text-xs" required /></div>
                </div>
                <div className="relative"><input name="state" placeholder="State" onChange={handleChange} className="w-full border-b border-slate-200 py-2 outline-none text-xs" required /></div>
                <div className="relative"><input name="address1" placeholder="Address Line 1" onChange={handleChange} className="w-full border-b border-slate-200 py-2 outline-none text-xs" required /></div>
                <div className="relative"><input name="address2" placeholder="Address Line 2" onChange={handleChange} className="w-full border-b border-slate-200 py-2 outline-none text-xs" required /></div>
                
                <div className="relative"><input name="pinCode" placeholder="Pin Code" onChange={handleChange} className="w-full border-b border-slate-200 py-2 outline-none text-xs" required /></div>
              </>
            )}

            <div className="relative"><input name="email" type="email" placeholder="Email Address" onChange={handleChange} className="w-full border-b border-slate-200 py-2 outline-none text-xs" required /></div>
            <div className="relative"><input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full border-b border-slate-200 py-2 outline-none text-xs" required /></div>

            <button type="submit" className="w-full py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-slate-800 transition-all">
              {isLogin ? "Sign In" : "Register"}
            </button>
          </form>

          <footer className="text-center pt-2">
            <p className="text-[9px] uppercase tracking-widest text-slate-400">
              {isLogin ? "New to the studio?" : "Already a member?"} 
              <button onClick={() => setIsLogin(!isLogin)} className="text-black font-bold border-b border-black ml-2">
                {isLogin ? "Create Account" : "Sign In"}
              </button>
            </p>
          </footer>
        </div>

        <footer className="text-[9px] uppercase tracking-[0.3em] text-slate-300 text-center md:text-left">
          &copy; 2026 Wrii Studio.
        </footer>
      </section>
    </main>
  );
}

export default LoginSignupPage;
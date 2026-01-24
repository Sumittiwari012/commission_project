// lib/axios.js (or lib/app.js - use your actual filename)
import axios from 'axios';
import { isTokenExpired } from '../utils/authUtils';

// 1. PUBLIC INSTANCE: For fetching products/landing page. No interceptors.
const publicApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true // Enable credentials globally for this instance
});

// 2. PRIVATE INSTANCE: For Profile, Checkout, Orders.
export const privateApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true 
});

// This is the variable held in memory (AuthContext will update this)
let _memoryToken = null;
export const updateMemoryToken = (token) => { _memoryToken = token; };

// 3. ATTACH INTERCEPTOR ONLY TO PRIVATE INSTANCE
privateApi.interceptors.request.use(async (config) => {
    if (_memoryToken && isTokenExpired(_memoryToken)) {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/Auth/refresh-token`, 
                {}, 
                { withCredentials: true }
            );
            const newToken = response.data.token;
            updateMemoryToken(newToken);
            config.headers.Authorization = `Bearer ${newToken}`;
        } catch (error) {
            updateMemoryToken(null);
            window.location.href = '/auth/login';
            return Promise.reject(error);
        }
    } else if (_memoryToken) {
        config.headers.Authorization = `Bearer ${_memoryToken}`;
    }
    return config;
});

// 4. RESTORE SESSION FUNCTION (called on app mount)
export const restoreSession = async () => {
    try {
        // CRITICAL: withCredentials must be true to send HttpOnly cookies
        const response = await publicApi.post(
            '/Auth/refresh-token',
            {},
            { withCredentials: true }
        );
        return response.data.token;
    } catch (error) {
        // Don't log error - user simply isn't logged in
        return null;
    }
};

// Export publicApi as default (this is what your login/register pages import as 'api')
export default publicApi;
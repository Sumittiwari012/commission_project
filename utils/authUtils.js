// utils/authUtils.js

/**
 * Decodes a JWT and returns a specific claim value
 */
export const getClaimFromToken = (token, claimName) => {
    if (!token) return null;
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            window.atob(base64)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );

        const claims = JSON.parse(jsonPayload);
        return claims[claimName];
    } catch (error) {
        console.error("Token decoding failed", error);
        return null;
    }
};

/**
 * Checks if the JWT is expired or about to expire
 */
export const isTokenExpired = (token) => {
    if (!token) return true;
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(window.atob(base64));
        
        const currentTime = Math.floor(Date.now() / 1000); // Current time in Unix seconds
        
        // We consider it expired if it's within 30 seconds of the actual expiration
        // This 'buffer' prevents requests from failing mid-flight.
        return payload.exp < (currentTime + 30); 
    } catch (error) {
        return true; // If we can't parse it, treat it as expired
    }
};
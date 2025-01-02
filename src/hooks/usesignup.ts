import { useState, useCallback } from 'react';
import axios from 'axios';

export interface SignupResult {
  success: boolean;
  error: string | null;
}

export const usesignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = useCallback(async (email: string, password: string, fullName: string) => {
    setIsLoading(true);
    setError(null);

    try {
       await axios.post("http://localhost:8000/user/signup", { email, password, fullName });
      setIsLoading(false);
      return { success: true, error: null };
    } catch (err) {
      setIsLoading(false);
      const errorMessage = axios.isAxiosError(err) 
        ? err.response?.data?.message || err.message 
        : 'An unknown error occurred';
      setError(errorMessage);
      
    }
  },[] );

  return { signup  };
};


import {  useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usesignup } from '../hooks/usesignup';
import { usesignin } from '../hooks/usesignin';
import Backgroundcircle from '../components/Backgroundcircle';
import AuthForm from '../components/AuthForm';

const AuthPages = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  
  const isSignIn = location.pathname !== '/signup';

  const toggleForm = () => {
    setIsVisible(false);
    setTimeout(() => {
      navigate(isSignIn ? '/signup' : '/signin');
      setIsVisible(true);
    }, 300);
    
  };
  const {signup}=usesignup()
  const {signin}=usesignin()
  const handleSubmit = async(email: string, password: string, fullName?: string) => {
    if (isSignIn) {
      signin(email, password);
      navigate("/conversation");
    } else {
      const doneornot = await signup(email, password, fullName!);
      if( doneornot){
        navigate("/signin");
      }
      else{
        return;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <Backgroundcircle/>
      {/* Auth Container */}
      <div className={`w-full max-w-md transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {isSignIn ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-white/80">
              {isSignIn ? 'Sign in to continue' : 'Sign up to get started'}
            </p>
          </div>
          {/* Auth Form */}
          <AuthForm isSignIn={isSignIn} onSubmit={handleSubmit}/>

          {/* Form Toggle */}
          <div className="mt-8 text-center">
            <p className="text-white/80">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleForm}
                className="ml-2 text-pink-400 hover:text-pink-300 font-semibold"
              >
                {isSignIn ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPages;
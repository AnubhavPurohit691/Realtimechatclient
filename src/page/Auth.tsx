import { ReactHTMLElement, useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usesignup } from '../hooks/usesignup';

const AuthPages = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [fullName,setfullName]=useState("")
  
  const isSignIn = location.pathname !== '/signup';
  

  const toggleForm = () => {
    setIsVisible(false);
    setTimeout(() => {
      navigate(isSignIn ? '/signup' : '/signin');
      setIsVisible(true);
    }, 300);
    
  };
  const {signup}=usesignup()
  const submitform = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    signup(email,password,fullName)
    navigate("/signin")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-indigo-400 rounded-full opacity-10" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full opacity-10" />

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
          <form className="space-y-6" onSubmit={submitform}>
            {!isSignIn && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Full Name"
                  onChange={(e)=>setfullName(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e)=>setemail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                onChange={(e)=>setpassword(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-12 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            {isSignIn && (
              <div className="text-right">
                <button type="button" className="text-white/80 hover:text-white text-sm">
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-pink-400 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
            >
              {isSignIn ? 'Sign In' : 'Sign Up'}
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

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
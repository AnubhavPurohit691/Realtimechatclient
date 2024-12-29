import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-indigo-400 rounded-full opacity-10" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full opacity-10" />

      {/* Floating Chat Bubbles */}
      <div className={`absolute top-40 left-24 transform -rotate-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white p-4 rounded-3xl shadow-lg">
          <p className="text-indigo-800 text-lg">Hey there! 👋</p>
        </div>
      </div>

      <div className={`absolute bottom-40 right-24 transform rotate-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-4 rounded-3xl shadow-lg">
          <p className="text-white text-lg">What's happening?</p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className={`relative max-w-3xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
          {/* Branding */}
          <h1 className="text-5xl font-bold text-white text-center mb-12">ChatApp</h1>

          {/* Feature Icons */}
          <div className="flex justify-center gap-12 mb-12">
            {['💬', '🎯', '🚀'].map((emoji, index) => (
              <div
                key={index}
                className={`bg-white/90 w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 hover:scale-110 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {emoji}
              </div>
            ))}
          </div>

          {/* Feature Text */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Connect Instantly</h2>
            <p className="text-lg text-white/80">Chat with anyone, anywhere</p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <button 
              className="bg-gradient-to-r from-pink-500 to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95" onClick={()=>navigate("/signup")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/3">
        <div className="w-4 h-4 bg-white/60 rounded-full animate-bounce" />
      </div>
      <div className="absolute bottom-1/4 left-1/3">
        <div className="w-3 h-3 bg-pink-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};

export default Landing;
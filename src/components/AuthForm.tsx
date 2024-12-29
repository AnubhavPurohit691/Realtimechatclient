import React, { useState } from 'react';
import { ArrowRight, User, Mail, Lock } from 'lucide-react';
import AuthInput from './AuthInput';

interface AuthFormProps {
  isSignIn: boolean;
  onSubmit: (email: string, password: string, fullName?: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isSignIn, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password, isSignIn ? undefined : fullName);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {!isSignIn && (
        <AuthInput
          icon={User}
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      )}

      <AuthInput
        icon={Mail}
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <AuthInput
        icon={Lock}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showPassword={showPassword}
        toggleShowPassword={() => setShowPassword(!showPassword)}
      />

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
  );
};

export default AuthForm;
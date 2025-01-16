import React, { useState } from 'react';
import Imagesignin from '../Component/Signin.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login functionality here (e.g., API call or validation)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex gap-16 min-h-screen  items-center justify-center">
      {/* Left side with image */}
      <div className="w-1/2">
        <img
          src={Imagesignin}
          alt="Login Image"
          className="h-full w-full object-cover rounded-l-lg "
        />
      </div>

      {/* Right side with form */}
      <div className="bg-white text-black p-8 rounded-lg shadow-xl border border-black/40 w-1/3">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 text-xl bg-primaryColor text-white font-semibold rounded-md hover:bg-primaryColor/80 focus:outline-none"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="/signup" className="text-black font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

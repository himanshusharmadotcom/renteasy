import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/userSlice';

const Login = () => {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post(
        'http://localhost:3000/api/auth/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response)
      if (response.status < 200 || response.status >= 300) {
        setLoading(false);
        setError("An error occurred");
        return;
      }
      setLoading(false);
      setError(null);
      dispatch(loginUser({ name: response.data.name, email: response.data.email, _id: response.data._id }));
      navigate('/properties');
    } catch (error) {
      setLoading(false);
      // console.error('Axios Error:', error);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md lg:w-full w-[90%] max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Password"
          />
        </div>
        <input type="submit" className="w-full p-2 bg-blue-500 text-white rounded" value={loading ? 'Loading...' : 'Login'} />
        <span className='mb-2'>Don't have an account <NavLink to='/register' className='border-b border-gray-500'>register</NavLink> here.</span>
        <div className="error-status">
          {error ? (<p className='text-sm text-red-700'>{error}</p>) : ''}
        </div>
      </form>
    </div>
  );
};

export default Login;

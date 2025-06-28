import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      const endpoint = state === 'Sign Up' ? '/api/user/register' : '/api/user/login'
      const payload = state === 'Sign Up' ? { name, email, password } : { email, password }

      const { data } = await axios.post(backendUrl + endpoint, payload)

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
        toast.success(`Welcome ${state === 'Sign Up' ? 'onboard!' : 'back!'}`)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Something went wrong!')
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-1">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          {state === 'Sign Up'
            ? 'Please fill in the form to create your account.'
            : 'Welcome back! Please enter your credentials.'}
        </p>

        {state === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="John Doe"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-medium py-2.5 rounded-lg hover:opacity-90 transition"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          {state === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setState('Login')}
                className="text-primary underline cursor-pointer"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              New here?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className="text-primary underline cursor-pointer"
              >
                Create an account
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  )
}

export default Login

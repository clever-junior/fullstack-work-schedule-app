import { LoginSchema, loginSchema } from '@/server/schemas/authSchema'
import { LockClosedIcon } from '@heroicons/react/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  LoginValidationSchema,
  loginValidationSchema
} from './schemas/loginFormValidationSchema'

export function Login() {
  const {
    register,
    handleSubmit,
  } = useForm<LoginValidationSchema>({
    resolver: zodResolver(loginValidationSchema),
  })

  const onSubmit: SubmitHandler<LoginValidationSchema> = async (data) => {
    const credentials: LoginSchema = loginSchema.parse(data)

    await signIn('credentials', { ...credentials, callbackUrl: '/home' })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Login</title>
      </Head>

      {/* <div className={ errors.password || errors.username ? 'bg-red-100 border mb-2 border-red-400 text-red-700 px-4 py-3 rounded relative' : 'hidden' } role="alert">
        <strong className="font-bold">Error! </strong>
        <span className="block sm:inline">{ errors.username?.message || errors.password?.message }</span>
      </div> */}

      <div className="max-w-sm w-full px-12 pb-10 space-y-8 border border-2 rounded-lg bg-white">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-800">
            Sign In
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                {...register('email')}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>

            <div className="mt-5 text-sm flex justify-center">
              <Link
                href="/sign-up"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Create an Account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

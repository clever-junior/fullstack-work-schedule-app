import { SignUpSchema, signUpSchema } from '@/server/schemas/authSchema';
import { trpc } from '@/utils/trpc';
import { LockClosedIcon } from '@heroicons/react/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpFormValidationSchema, signUpFormValidationSchema } from './schemas/signUpFormValidationSchema';

export const SignUp = () => {
  /* hooks declarations */
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValidationSchema>({ resolver: zodResolver(signUpFormValidationSchema) });

  const { mutateAsync: createUser } = trpc.user.signUp.useMutation();

  /* Submit form function */

  const onSubmit: SubmitHandler<SignUpFormValidationSchema> = async (data) => {
    const userData: SignUpSchema = signUpSchema.parse({
      password: data.password,
      email: data.email,
      name: data.name,
    });

    const res = await createUser(userData);

    if (res.status === 201) { router.push('/'); }
  };

  /* Component Return */

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Sign Up</title>
      </Head>

      <div className={Object.keys(errors).length > 0 ? 'bg-red-100 border mb-2 border-red-400 text-red-700 px-4 py-3 rounded relative' : 'hidden'} role="alert">
        <strong className="font-bold">Error! </strong>
        <span className="block sm:inline">{Object.values(errors)[0]?.message}</span>
      </div>

      <div className="max-w-sm w-full px-12 pb-10 space-y-8 border border-2 rounded-lg bg-white">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-800">Sign Up</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                {...register('name')}
                id="name"
                name="firstName"
                type="text"
                autoComplete="name"
                required
                className="rounded-t-md appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>

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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
              </span>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
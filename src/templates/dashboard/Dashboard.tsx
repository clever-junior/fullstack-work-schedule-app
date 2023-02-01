import { Nav } from '@/components/Nav';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

export const Dashboard = () => {
  useSession();


  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex max-sm:flex-col">
          <h1 className="text-3xl font-bold text-gray-900 flex-none max-sm:text-center">Dashboard</h1>
          <div className='grow mx-10 max-sm:mb-5 max-sm:mt-3'>
            {/* <SearchInput /> */}
          </div>

        </div>
      </header>

      <main className='flex justify-evenly sm:px-6 lg:px-8 sm:flex-wrap max-sm:flex-col'>

      </main>
    </div>
  )
}
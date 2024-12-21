import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';

const Header = async ({ username }) => {
  const { userId } = auth();

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-blue-700'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='text-lg font-bold text-white uppercase'>
            Clerk App
          </div>
        </Link>
      </div>
      <div className='flex items-center text-white'>
        {!userId && (
          <>
            <Link
              href='sign-in'
              className='mr-4 text-gray-300 hover:text-white'
            >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='mr-4 text-gray-300 hover:text-white'
            >
              Sign Up
            </Link>
          </>
        )}
        {userId && (
          <Link href='profile' className='mr-4 text-gray-300 hover:text-white'>
            Profile
          </Link>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
};

export default Header;

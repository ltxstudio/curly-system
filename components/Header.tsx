import Link from 'next/link';
import { AiFillCode, AiOutlineHome } from 'react-icons/ai';

const Header = () => (
  <header className="bg-white shadow-sm py-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="flex items-center text-lg font-semibold text-green-600">
        <AiOutlineHome className="mr-2" />
        JS & CSS Minifier
      </Link>
      <nav className="flex space-x-6">
        <Link href="/js-minifier" className="text-gray-700 hover:text-green-600">
          <AiFillCode className="inline mr-2" />
          JS Minifier
        </Link>
        <Link href="/css-minifier" className="text-gray-700 hover:text-green-600">
          <AiFillCode className="inline mr-2" />
          CSS Minifier
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;

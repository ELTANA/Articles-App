import ArticlesLogo from '$svgs/logo';
import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header className="py-10 flex justify-between items-center">
      <Link className="inline-flex gap-2 font-medium items-center text-gray-900" href="/">
        <ArticlesLogo className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" />
        <span className="text-lg">Articles</span>
      </Link>
      <nav className="gap-4 flex flex-wrap items-center text-base justify-center">
        <Link className="text-base truncate text-gray-600 font-medium" href="/">
          Results
        </Link>
        <Link
          className="inline-flex gap-1 items-center bg-blue-100 border-0 py-2 px-4 focus:outline-none hover:bg-blue-200 rounded text-base text-gray-600 font-medium"
          href="/create"
        >
          Create
        </Link>
      </nav>
    </header>
  );
};

export default Header;

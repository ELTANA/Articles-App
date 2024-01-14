import ArticlesLogo from '$svgs/logo';
import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header className="py-10 flex justify-between items-center">
      <Link className="inline-flex gap-2 font-medium items-center text-gray-900" to="/">
        <ArticlesLogo
          data-test-id="articles-logo"
          className="w-7 md:w-10 h-7 md:h-10 text-white p-2 bg-blue-500 rounded-full"
        />
        <span className="text-base md:text-lg">Articles</span>
      </Link>
      <nav className="gap-4 flex flex-wrap items-center text-base justify-center">
        <Link className="text-base truncate font-medium" to="/">
          {({ isActive }) => {
            return (
              <>
                <span className={`${isActive ? 'text-blue-600 ' : 'text-gray-600 '}`}>Results</span>
              </>
            );
          }}
        </Link>
        <Link
          className="inline-flex gap-1 items-center bg-blue-100 border-0 py-2 px-4 focus:outline-none hover:bg-blue-200 rounded text-base text-gray-800 font-medium"
          to="/create"
        >
          {({ isActive }) => {
            return (
              <>
                <span className={`${isActive ? 'text-blue-600 ' : 'text-gray-600 '}`}>Create</span>
              </>
            );
          }}
        </Link>
      </nav>
    </header>
  );
};

export default Header;

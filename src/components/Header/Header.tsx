import ArticlesLogo from '$svgs/logo';
import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header className="w-full shadow-nav sticky top-0">
      <div className="container py-10 flex justify-between items-center px-4">
        <Link className="inline-flex gap-2 font-medium items-center text-gray-900" to="/">
          <ArticlesLogo
            data-test-id="articles-logo"
            className="w-7 md:w-10 h-7 md:h-10 text-white p-2 bg-blue-500 rounded-full"
          />
          <span className="text-base md:text-lg">Articles</span>
        </Link>
        <nav className="group/results-btn flex flex-wrap items-center gap-4 text-base justify-center">
          <Link className="text-base truncate font-medium" to="/">
            {({ isActive }) => {
              return (
                <span
                  className={`${isActive ? 'text-blue-600' : 'text-black group-hover/results-btn:text-blue-500 transition-all duration-300 ease-in'}`}
                >
                  Results
                </span>
              );
            }}
          </Link>
          <Link
            className="group/create-btn inline-flex gap-1 items-center bg-blue-400 hover:bg-blue-400 border-0 py-2 px-4 focus:outline-none rounded text-base font-medium"
            to="/create"
          >
            {({ isActive }) => (
              <span
                className={`${isActive ? 'text-white ' : 'text-blue-900 group-hover/create-btn:text-white transition-all duration-300 ease-in'}`}
              >
                Create
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

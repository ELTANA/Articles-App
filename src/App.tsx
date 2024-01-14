import ArticleCard from '$components/ArticleCard';
import Button from '$components/Button/Button';
import Input from '$components/InputField/Input';
import ArticlesLogo from '$svgs/logo';
import { Outlet, Router, Route, RootRoute, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const rootRoute = new RootRoute({
  component: () => (
    <>
      <div className="min-h-screen w-full flex flex-col items-stretch justify-stretch container mx-auto px-4">
        <header className="py-5 flex justify-between items-center">
          <a href="#s">
            <ArticlesLogo />
          </a>
          <nav className="gap-4 flex flex-wrap items-center text-base justify-center">
            <Link href="/">Results</Link>
            <Link href="/sell">Create</Link>
          </nav>
        </header>
        <main className="grow">
          <Outlet />
        </main>
        <footer className="py-2">
          <p className="text-center">© 2024 Articles App — Lotana</p>
        </footer>
      </div>
      <hr />
      <TanStackRouterDevtools />
    </>
  )
});

//home route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
        <ArticleCard />
        <Button text="Processing..." loading />
        <Input name="search" type="search" />
      </div>
    );
  }
});

//create route
const createRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/create',
  component: function About() {
    return <div className="p-2">Create an Article!</div>;
  }
});

const routeTree = rootRoute.addChildren([indexRoute, createRoute]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  // This infers the type of our router and registers it across your entire project
  interface Register {
    router: typeof router;
  }
}

export default router;

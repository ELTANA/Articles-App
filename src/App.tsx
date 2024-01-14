import { Outlet, Router, Route, RootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Button from '$components/Button/Button';
import Footer from '$components/Footer/Footer';
import Header from '$components/Header/Header';
import Input from '$components/Input/Input';
import ArcticleCreation from '$screens/ArcticleCreation/ArcticleCreation';

const rootRoute = new RootRoute({
  component: () => (
    <>
      <div className="min-h-screen w-full flex flex-col items-stretch justify-stretch container mx-auto px-4">
        <Header />
        <main className="grow flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
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
  component: function Create() {
    return <ArcticleCreation />;
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

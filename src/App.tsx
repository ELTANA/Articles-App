import { Outlet, Router, Route, RootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Footer from '$components/Footer/Footer';
import Header from '$components/Header/Header';
import ArcticleCreation from '$screens/ArcticleCreation/ArcticleCreation';
import Results from '$screens/Results/Results';

const rootRoute = new RootRoute({
  component: () => (
    <>
      <div className="min-h-screen w-full flex flex-col items-stretch justify-stretch container mx-auto px-3 md:px-4">
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
    return <Results />;
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

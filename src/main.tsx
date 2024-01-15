import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from '@tanstack/react-router';
import router from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

//Create a client
const queryClient = new QueryClient();

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}

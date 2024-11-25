import React from 'react';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LandingPage from './pages/LandingPage';

const queryClient = new QueryClient();
const App: React.FC = () => {
  React.useEffect(() => {}, []);
  return (
    <QueryClientProvider client={queryClient}>
      <LandingPage />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;

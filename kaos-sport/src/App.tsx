import React from 'react';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Base } from './components/templates/Base';

const queryClient = new QueryClient();
const App: React.FC = () => {
  React.useEffect(() => {}, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Base>abcd</Base>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;

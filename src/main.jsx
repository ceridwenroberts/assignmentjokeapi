import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ErrorBoundary from './ErrorBoundary'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
  </ErrorBoundary>
)




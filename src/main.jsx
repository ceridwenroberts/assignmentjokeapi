import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ErrorBoundary from './ErrorBoundary'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
  </ErrorBoundary>
)

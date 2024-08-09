import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import '../shared/i18n/index';
import './index.css'
import Layout from './layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)

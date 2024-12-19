import React, { createRoot } from 'react-dom/client'
import './index.css'
import RouterProvider from './RouterProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <RouterProvider />
)

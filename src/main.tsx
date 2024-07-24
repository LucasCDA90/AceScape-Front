import React from 'react'
import ReactDOM from 'react-dom/client'
import './Infrastructure/Style/index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
)

import { createBrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import { PageBlackJack } from './Application/Pages/PageBlackJack.tsx';
import { PageProfile } from './Application/Pages/PageProfile.tsx';
import { PageRules } from './Application/Pages/PageRules.tsx';
import { RegisterForm } from './Application/Components/RegisterForm.tsx';
import { AuthLoginForm } from './Application/Components/AuthLoginForm.tsx';
import { PageAcceuil } from './Application/Pages/PageAcceuil.tsx';
import { ApplicationLayout } from './Application/Components/Layout.tsx';
import { PageProfileEdit } from './Application/Pages/PageProfileEdit.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/',
    element: <ApplicationLayout />,
    children: [
      {
        path: '/home',
        element: <PageAcceuil />,
      },
      {
        path: '/blackjack',
        element: <PageBlackJack />,
      },
      {
        path: '/profile',
        element: <PageProfile />,
      },
      {
        path: '/profile/edit',
        element: <PageProfileEdit />,
      },
      {
        path: '/rules',
        element: <PageRules />,
      },
    ],
  },
  {
    path: '/register',
    element: <RegisterForm />,
  },
  {
    path: '/login',
    element: <AuthLoginForm />,
  }
]);

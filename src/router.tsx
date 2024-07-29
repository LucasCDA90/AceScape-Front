import { createBrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import { PageBlackJack } from './Application/Pages/PageBlackJack.tsx';
import { PageProfile } from './Application/Pages/PageProfile.tsx';
import { PageRules } from './Application/Pages/PageRules.tsx';
import { RegisterForm } from './Application/Components/RegisterForm.tsx';
import { AuthLoginForm } from './Application/Components/AuthLoginForm.tsx';
import { PageAcceuil } from './Application/Pages/PageAcceuil.tsx';
import { ApplicationLayout } from './Application/Components/Layout.tsx'; // Importation du layout

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Page d'accueil publique
  },
  {
    path: '/',
    element: <ApplicationLayout />, // Layout pour les pages protégées
    children: [
      {
        path: '/home',
        element: <PageAcceuil />, // Page d'accueil après connexion avec layout
      },
      {
        path: '/blackjack',
        element: <PageBlackJack />, // Page protégée
      },
      {
        path: '/profile',
        element: <PageProfile />, // Page protégée
      },
      {
        path: '/rules',
        element: <PageRules />, // Page protégée
      },
    ],
  },
  {
    path: '/register',
    element: <RegisterForm />, // Page d'inscription publique
  },
  {
    path: '/login',
    element: <AuthLoginForm />, // Page de connexion publique
  }
]);

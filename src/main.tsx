import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecipeInfo, RecipeList } from './pages';
import { GlobalStyle } from './styles';
import { Body } from './components/layouts';

const router = createBrowserRouter([
   {
      path: '/',
      element: <RecipeList />
   },
   {
      path: '/id',
      element: <RecipeInfo />
   }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <GlobalStyle />
      <Body>
         <RouterProvider router={router} />
      </Body>
   </React.StrictMode>
);

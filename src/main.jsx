import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import AboutUs from './components/AboutUs/AboutUs';
import Faq from './components/Faq/Faq';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('/books.json'),
        element: <Home></Home>
      },
      {
        path: "/book/:bookId",
        loader: async ({ params }) => {
          const response = await fetch(`books.json`);
          const books = await response.json();
          return books.find(book => book.bookId === params.bookId);
        },
        element: <BookDetails />
      },
      {
        path: "/listedBook",
        loader: () => fetch('/books.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/faq",
        element: <Faq></Faq>
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

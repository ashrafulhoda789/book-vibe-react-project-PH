import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
import PageToRead from "../pages/pageToRead/PageToRead";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: '/books',
        element: <Books></Books>
      },
      {
        path: '/bookDetails/:bookId',
        loader: () => fetch('/booksData.json'),
        Component: BookDetails
      },
      {
        path: '/pageToRead',
        Component: PageToRead
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
  
])
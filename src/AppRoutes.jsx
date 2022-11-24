import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Books = lazy(() => import('pages/Books'));
const Book = lazy(() => import('pages/Book'));
const Consumers = lazy(() => import('pages/Consumers'));
const Consumer = lazy(() => import('pages/Consumer'));
const NotFound = lazy(() => import('pages/NotFound'));

function RouteConfig() {
  const routeConfig = useRoutes([
    { path: '*', element: <NotFound /> },
    { path: '/', element: <Home /> },
    {
      path: '/books',
      element: <Books />,
      children: [
        {
          index: true,
          element: <h2>도서 이름을 선택하세요.</h2>,
        },
        {
          path: ':isbn',
          element: <Book />,
        },
      ],
    },
    {
      path: '/consumers',
      element: <Consumers />,
      children: [
        {
          index: true,
          element: <h2>고객 이름을 선택하세요.</h2>,
        },
        {
          path: ':id',
          element: <Consumer />,
        },
      ],
    },
  ]);

  return routeConfig;
}

export default function AppRoutes() {
  return (
    <Suspense>
      <RouteConfig />
    </Suspense>
  );
}

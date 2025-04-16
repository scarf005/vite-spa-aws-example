import { router } from '@/main'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <header className='App-header'>
        <nav>
          <ul>
            {Object.keys(router.routesByPath).map(route => (
              <Link key={route} to={route}>
                <li>{route}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

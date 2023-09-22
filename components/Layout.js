import Nav from './Nav';
import Footer from './Footer';

import { useRouter } from 'next/router';

const noLayout = ['/login', '/signup'];

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <div className={noLayout.includes(router.route) ? 'hidden' : ''}>
        <Nav />
      </div>{' '}
      <div>
        <main className={noLayout.includes(router.route) ? '' : `bg-red-300`}>
          {children}
        </main>
      </div>
      <div className={noLayout.includes(router.route) ? 'hidden' : ''}>
        <Footer />
      </div>{' '}
    </>
  );
}

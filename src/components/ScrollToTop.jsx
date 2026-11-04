import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Each route change starts at the top, the way a page navigation should. */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

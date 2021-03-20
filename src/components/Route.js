import { useEffect } from 'react';

const Route = ({ path, children }) => {
  useEffect(() => {
    const onLocationChange = () => {
      console.log('location changed');
    };

    window.addEventListener('popstate', onLocationChange);

    // reset event listener
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;

import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import FadeLoader from 'react-spinners/FadeLoader';
import { useEffect, useState } from 'react';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {

    const [preloader, setPreloader] = useState(false);

    useEffect(() => {
      Router.events.on('routeChangeStart', () => setPreloader(true));
      Router.events.on('routeChangeComplete', () => setPreloader(false));
      Router.events.on('routeChangeError', () => setPreloader(false));
      return () => {
        Router.events.off('routeChangeStart', () => setPreloader(true));
        Router.events.off('routeChangeComplete', () => setPreloader(false));
        Router.events.off('routeChangeError', () => setPreloader(false));
      };
    }, [Router.events]);

    return (
      <>
        {!preloader?
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        :
        <div className="fixed inset-0 bg-black w-[100%] h-[100vh] flex items-center justify-center">
          <FadeLoader color="#fff" className="mx-auto" />
        </div>
        }
      </>
    )
}

export default MyApp;

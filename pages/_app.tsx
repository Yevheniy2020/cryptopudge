import '../global/global.css'
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp

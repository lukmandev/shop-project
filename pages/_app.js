import '../styles/app.color2.css';
import '../styles/app.color3.css';
import '../styles/app.color4.css';
import '../styles/app.color5.css';
import '../styles/app.color6.css';
import '../styles/app.color7.css';
import '../styles/app.color8.css';
import '../styles/app.color9.css';
import '../styles/app.color10.css';
import '../styles/Home.module.css';
import '../styles/utility.css';
import '../styles/vendor.css';
import '../styles/app.css';

import Router from 'next/router';
import Head from 'next/head'
import { useEffect, useState } from 'react';

import { wrapper } from '../redux/reducer';




const MyApp = ({ Component, pageProps }) => {
	const [hasError, setHasError] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		Router.onRouteChangeStart = () => {
			setHasError(false);
			setLoading(true);
		};

		Router.onRouteChangeComplete = () => {
			setHasError(false);
		  	setLoading(false);
		};

		Router.onRouteChangeError = () => {
			setHasError(true);
		}
	}, []);

  	return (
  		<>
	  		<Head>
		        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
		        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet" />
		    </Head>
	  		<Component {...pageProps} />
	  	</>
  	);
}

export default wrapper.withRedux(MyApp);

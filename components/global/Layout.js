import { useCallback, useEffect } from 'react';

import Header from './header/header';
import Footer from './footer';

import ScrollToTop from './scrollToTop';
import TopScroll from './topScroll';

import { setAuthInfo, setUserProfile, setAuthLoaded } from '../../redux/reducers/auth';





const Layout = ({ children }) => {

	return (
		<>
			<ScrollToTop />
			<Header />
				{/*====== App Content ======*/}
				<div className="app-content">
					{children}
				</div>
				{/*====== End - App Content ======*/}
			<Footer />
			<TopScroll />
		</>
	)
}


export default Layout;
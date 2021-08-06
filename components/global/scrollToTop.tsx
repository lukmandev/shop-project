import React from 'react';
import { useRouter } from 'next/router';



const ScrollToTop: REACT.RC = () => {
	const router = useRouter();

	React.useEffect(() => {

		window.scrollTo(0, 0);
		
	}, [router.pathname]);

	return null;
}


export default ScrollToTop;
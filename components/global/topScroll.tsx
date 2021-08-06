import { useEffect, memo, useState, useMemo, FC } from 'react';



const TopScroll: FC = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(() => {
		const checkScroll = (): boolean => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			const windowHeight = window.innerHeight
				|| document.documentElement.clientHeight
				|| document.body.clientHeight;
			return scrollTop >= windowHeight;
		}
		window.addEventListener('scroll', () => {
			const result: boolean = checkScroll();
			setIsActive(result);
		});

	}, []);

	const scroll = (): void => {
		window.scrollTo(0, 0);
	}

	const scrollClassNames: string = useMemo(() => {
		if(isActive){
			return "scrollBlock is-active";
		}else {
			return "scrollBlock";
		}
	}, [isActive]);

	return (
		<span id="topScroll" className={scrollClassNames} onClick={scroll} style={{position: 'fixed', zIndex: 100}}>
			<i className="fas fa-long-arrow-alt-up" />
		</span>
	)
}


export default memo(TopScroll);
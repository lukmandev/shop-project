import { memo, useMemo, FC } from 'react';
import Link from 'next/link';

import MainDropdown from './dropdowns/main';

import { mainNav } from '../../../constants/header';


const HeaderList: FC = () => {

	const outListItems = useMemo(() => {
		return mainNav.map((elem, i) => {
			let link;
			if(elem.to){
				link = <Link href={elem.to}>
					<a>{elem.text}{elem.dropdownId ?  (<i className="fas fa-angle-down u-s-m-l-6" />) : null}</a>
				</Link>
			}else {
				link = <a>{elem.text}{elem.dropdownId ?  (<i className="fas fa-angle-down u-s-m-l-6" />) : null}</a>
			}
			return <li key={i} className={elem.dropdownId ? "has-dropdown" : ""}>
				{link}
				{elem.dropdownId ?  <MainDropdown activeDropdown={elem.dropdownId} /> : null}
			</li>
		});
	}, []);

	return (
		<ul className="ah-list ah-list--design2 ah-list--link-color-secondary">
			{outListItems}
		</ul>
	)
}


export default memo(HeaderList);
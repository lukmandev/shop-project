import { useMemo } from 'react';
import Link from 'next/link';

const LinkItemWrap = ({ item, children }) => {
	if(item.to){
		return (
			<Link href={item.to}>
				{children}
			</Link>
		)
	}else {
		return (<>{children}</>);
	}
}

const ListItem = ({ item, children }) => {
	const classes = useMemo(() => {
		if(item.dropdownId){
			return "has-dropdown has-dropdown--ul-left-100";
		}
		return "";
	}, []);
	return (
		<li className={classes}>
			<LinkItemWrap item={item}>
				<a>
					{item.text}
					{item.dropdownId ? (
						<i className="fas fa-angle-down i-state-right u-s-m-l-6" />
					): null}
				</a>
			</LinkItemWrap>
			{item.dropdownId ? (
				children
			) : null}
		</li>
	)
}


export default ListItem;
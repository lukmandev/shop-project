import { FC, useMemo } from 'react';
import Link from 'next/link';

import { dropdownNav } from '../../../../constants/header';
import ChildDropdown from './child';
import ListItem from '../listItem';



interface IMainDropdown{
	activeDropdown: string
}


const MainDropdown: FC<IMainDropdown> = ({ activeDropdown }) => {
	const item = useMemo(() => dropdownNav[activeDropdown], []);

	return (
		<ul style={{width: '170px'}}>
			{item.map((elem, i) => {
				return <ListItem item={elem} key={i}><ChildDropdown active={elem.dropdownId} /></ListItem>
			})}	         
		</ul>
	)
}


export default MainDropdown;
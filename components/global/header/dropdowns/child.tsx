import { FC, memo, useMemo } from 'react';


import { dropdownChildNav } from '../../../../constants/header';
import ListItem from '../listItem';
import LastDropdown from './childDropdown';

interface IdropdownChild{
	active: string
}

const dropdownChild: FC<IdropdownChild> = ( { active } ) => {
	const item = useMemo(() => dropdownChildNav[active], []);


	const outListItems = useMemo(() => {
		return item.map((elem, i) => {
			return <ListItem item={elem} key={i}>
				{elem.dropdownId ? <LastDropdown active={elem.dropdownId} /> : null}
			</ListItem>
		});
	}, []);
	return (
		<ul style={{width: '200px'}}>
			{outListItems}
		</ul>
	)
}

export default memo(dropdownChild);
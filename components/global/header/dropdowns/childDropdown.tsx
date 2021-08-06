import { FC, memo, useMemo } from "react";

import { childDropdownNav } from '../../../../constants/header';
import ListItem from '../listItem';


interface IchildDropdown{
    active: string
}

const childDropdown: FC<IchildDropdown> = ({ active }) => {
    const item = useMemo(() => childDropdownNav[active], []);
    const outListItems = useMemo(() => 
        item.map((elem, i) => {
            return <ListItem item={elem} key={i}>{null}</ListItem>
        })
    , [])

    return (
        <ul style={{width: '180px'}}>
			{outListItems}
		</ul>
    )
}

export default memo(childDropdown);
import { FC, memo } from "react";
import Link from 'next/link';

import { headerAuthTypes } from '../../../constants/header';

const AuthActionTypes: FC = () => {
    return (
        <>
            {headerAuthTypes.map((elem, i) => {
                return (
                    <li key={i}>
                        <Link href={elem.to}>
                            <a>
                                <i className={elem.icon} />
                                <span>{elem.text}</span>
                            </a>
                        </Link>
                    </li>
                )
            })}
        </>
    )
}

export default memo(AuthActionTypes);
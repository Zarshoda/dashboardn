import React from 'react'
import HeaderWrapper from './HeaderWrapper'
import Link from 'next/link'

const Header = () => {
    return (
        <HeaderWrapper>
            <ul className="d-flex">
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/users"><a>Users</a></Link>
                </li>
                <li>
                    <Link href="/todos"><a>Todos</a></Link>
                </li>
                <li>
                    <Link href="/posts"><a>Posts</a></Link>
                </li>
            </ul>
        </HeaderWrapper>
    )
}

export default Header;

import React from 'react'
import NavWrapper from './HeaderWrapper'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setDark } from '../../redux/actions'

const Header = () => {
    const isDark = useSelector(state => state.isDark)
    const isSidebarShow = useSelector(state => state.isSidebarShow)
    const dispatch = useDispatch()
    return (
        <NavWrapper className={`${isDark ? "dark" : ""} ${isSidebarShow ? "open" : ""}`}>
            <div className="d-flex">
                <h1 className="fw-bold mt-5 ms-4">MENU</h1>
                <button className="ms-2 btun mt-5 ms-5 p-2" onClick={() => setDark(dispatch)}><FontAwesomeIcon icon={faSun} className="fs-4 icon" /></button>
            </div>
            <hr />
            <ul>
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
        </NavWrapper>
    )
}

export default Header;

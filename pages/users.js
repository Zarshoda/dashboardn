import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Header from '../containers/Header'
import { setToggle, setUsers } from '../redux/actions';

const Users = () => {
    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        setUsers(dispatch);
    }, [])

    return (
        <div className="d-flex">
            <Header />
            <div className="container">
                <button className="butn m-3 mb-0" onClick={() => setToggle(dispatch)}><FontAwesomeIcon icon={faAlignJustify} /></button>
                <Table className="text-center userstab mt-5">
                    <thead className="fs-4">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((v, i) =>
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.username}</td>
                                <td>{v.email}</td>
                                <td>{v.phone}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Users

import { Table } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Header from '../containers/Header'
import { setUsers } from '../redux/actions';

const Users = () => {
    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        setUsers(dispatch);
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <Table className="text-center userstab">
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
                        {users.map(v =>
                            <tr>
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
        </>
    )
}

export default Users

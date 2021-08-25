import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../containers/Header'
import { setTodos } from '../redux/actions';

const Todos = () => {
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();

    useEffect(() => {
        setTodos(dispatch);
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    {todos.map(v =>
                        <div className="col-lg-3 col-md-6">
                            <div className="carddd">
                                <p>{v.title}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Todos

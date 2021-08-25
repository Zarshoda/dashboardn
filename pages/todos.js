import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../containers/Header'
import { setTodos, setToggle } from '../redux/actions';

const Todos = () => {
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();

    useEffect(() => {
        setTodos(dispatch);
    }, [])

    return (
        <div className="d-flex">
            <Header />
            <div className="container">
                <button className="butn m-3 mb-0" onClick={() => setToggle(dispatch)}><FontAwesomeIcon icon={faAlignJustify} /></button>
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
        </div>
    )
}

export default Todos

import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../containers/Header'
import { setPosts, setToggle } from '../redux/actions';

const Posts = () => {
    const posts = useSelector(state => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        setPosts(dispatch);
    }, [])

    return (
        <div className="d-flex">
            <Header />
            <div className="container">
                <button className="butn m-3 mb-0" onClick={() => setToggle(dispatch)}><FontAwesomeIcon icon={faAlignJustify} /></button>
                <div className="row">
                    {posts.map(v =>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="cardddd d-flex justify-content-center align-items-center">
                                <div>
                                    <p>{v.title}</p>
                                    <p className="body d-lg-block d-none">{v.body}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Posts

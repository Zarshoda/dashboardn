import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../containers/Header'
import { setPosts } from '../redux/actions';

const Posts = () => {
    const posts = useSelector(state => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        setPosts(dispatch);
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    {posts.map(v =>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="cardddd">
                                <p>{v.title}</p>
                                <p className="body">{v.body}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Posts

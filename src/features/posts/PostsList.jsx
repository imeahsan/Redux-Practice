import {useDispatch, useSelector} from "react-redux";

import React, {useEffect} from 'react'
import {selectAllPosts, getPostsError, getPostsStatus, fetchPosts} from "./postSlice";

import PostExerpt from "./PostExerpt";

const PostsList = () => {
    const dispatch = useDispatch()

    // getting values from central state
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(()=>{
        if (postStatus==='idle'){
            dispatch(fetchPosts())
        }
    },[postStatus,dispatch])
let content ;
    if (postStatus==='loading'){
        content = <p>Loading...</p>
    }else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostExerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }


    return (

        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostsList

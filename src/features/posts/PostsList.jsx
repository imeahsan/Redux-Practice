import {useSelector} from "react-redux";

import React from 'react'
import {getPostsError, getPostsStatus, selectAllPosts} from "./postSlice";

import PostExerpt from "./PostExerpt";

const PostsList = () => {

    // getting values from central state
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)


    let content;
    if (postStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostExerpt key={post.id} post={post}/>)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }


    return (

        <section>
            {content}
        </section>
    )
}

export default PostsList

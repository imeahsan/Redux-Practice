import {useSelector} from "react-redux";

import React from 'react'
import {getPostsError, getPostsStatus, selectPostIds} from "./postSlice";

import PostExerpt from "./PostExerpt";

const PostsList = () => {

    // getting values from central state
    const orderedPostIds = useSelector(selectPostIds)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)


    let content;
    if (postStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (postStatus === 'succeeded') {
        content = orderedPostIds.map(postId => <PostExerpt key={postId} postId={postId}/>)
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

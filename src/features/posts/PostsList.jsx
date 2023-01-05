import {useSelector} from "react-redux";

import React from 'react'
import {selectAlPosts} from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    const posts = useSelector(selectAlPosts)
    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    console.log(posts)
    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>

         <p className={'postCreditS'}>
             <PostAuthor userId={post.userId}/>
             <TimeAgo timestamp={post.date}/>
         </p>
            <p>{post.content.substring(0, 100)}</p>
            <ReactionButtons post={post}/>
        </article>
    ))


    return (

        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList

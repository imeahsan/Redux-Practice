import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import React from "react";


const PostExerpt = ({post}) => {
  return(
      <article>
          <h3>{post.title}</h3>

          <p className={'postCreditS'}>
              <PostAuthor userId={post.userId}/>
              <TimeAgo timestamp={post.date}/>
          </p>
          <p>{post.body.substring(0, 100)}</p>
          <ReactionButtons post={post}/>
      </article>
  )
}

export default PostExerpt

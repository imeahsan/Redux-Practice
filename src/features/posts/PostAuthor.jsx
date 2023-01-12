import {selectAllUsers} from "../users/userSlice";
import {useSelector} from "react-redux";


const PostAuthor = ({userId}) => {

    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userId)
    return (
        <span> &nbsp;by {author ? author.name : 'Unknown Author'}</span>
    )
}

export default PostAuthor

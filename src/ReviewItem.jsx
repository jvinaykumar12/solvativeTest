import './MainPage.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom"


function ReviewItem(props) {
    
    const {index,title,content,updatedAt,reviewId} = props.content
    const dateString = new Date(updatedAt).toLocaleString()
    const navigate = useNavigate()

    const editPost = ()=>{
        navigate(`/${reviewId}`)
    }

    const deletePost = ()=>{
     axios.post('http://localhost:3001/delete',{reviewId:reviewId})
        .then(res=>{
            console.log(res)
        })
    }


    return (
        <div className="ReviewItem">
            <div className='ReviewItemInternal'>{index}</div>
            <div className='ReviewItemInternal'>{title}</div>
            <div className='ReviewContent'>{content}</div>
            <div className='ReviewItemInternal'>{dateString}</div>
            <button onClick={editPost}>edit</button>
            <button onClick={deletePost}>delete</button>
        </div>
    )
}

export default ReviewItem
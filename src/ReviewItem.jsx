import './MainPage.css'
import axios from 'axios';

function ReviewItem(props) {
    
    const {index,title,content,createdAt,reviewId} = props.content
    const dateString = new Date(createdAt).toDateString()

    const editPost = ()=>{
        
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
            <div className='ReviewItemInternal'>{content}</div>
            <div className='ReviewItemInternal'>{dateString}</div>
            <button onClick={editPost}>edit</button>
            <button onClick={deletePost}>delete</button>
        </div>
    )
}

export default ReviewItem
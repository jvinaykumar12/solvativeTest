import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import './MainPage.css'


function NewReview() {
    const [title,setTitle] = useState()
    const [content,setContent] = useState()
    const navigate = useNavigate()

    const submitReview = ()=>{
        axios.post('http://localhost:3001/create',{
            title,
            content
        })
        .then(()=>{
            navigate('/')
        })
    }

    return(
        <div className="New-Review">
            <input value={title} type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)}></input>
            <textarea cols="30" rows="10" value = {content} type="text" onChange={(e)=>setContent(e.target.value)}></textarea>
            <button onClick={submitReview}>submit</button>
        </div>
    )
}

export default NewReview
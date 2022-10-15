import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import './MainPage.css'
import { useEffect } from "react";


function NewReview(props) {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
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

    console.log(myVar)
    
    const editReview = ()=>{
        axios.post('http://localhost:3001/update',{
            title,
            content,
            reviewId:props.props.reviewId
        })
        .then((res)=>{
            console.log(res)
            navigate('/')
        })
    }

    useEffect(()=>{
        if(props.props) {
            setTitle(props.props.title)
            setContent(props.props.content)
        }
    },[props.props])

    return(
        <div className="New-Review">
            <input value={title} type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)}></input>
            <textarea cols="30" rows="10" value = {content} type="text" onChange={(e)=>setContent(e.target.value)}></textarea>
            <button onClick={props.props?editReview:submitReview}>{props.props?"save edit":"submit"}</button>
            <button onClick={()=>navigate('/')}>cancel</button>
        </div>
    )
}

export default NewReview
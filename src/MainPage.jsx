import logo from './logo.svg';
import './App.css';
import NewReview from './NewReview';
import { useEffect,useState,useRef} from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import './MainPage.css'
import ReviewItem from './ReviewItem';
import {io} from 'socket.io-client'


function MainPage() {

const [allreviews,setAllReviews] = useState([])
const [refresh,setRefresh] = useState(1)
const [holdText,setHoldText] = useState()
const socket = useRef()
const navigate = useNavigate()


useEffect(()=>{
  axios.get('http://localhost:3001/getreviews')
  .then(res=>{
    res.data.sort((a,b)=>new Date(b.createdAt)- new Date(a.createdAt))
    console.log(res)
    setAllReviews(res.data)
  })
  },[refresh])

  useEffect(()=>{
    if(!socket.current) {
        socket.current = io('http://localhost:3001')
        socket.current.on('delete',arg=>{
          console.log("ok")
          setRefresh(prev=>prev+1)
        })
        socket.current.on('update',arg=>{
          setRefresh(prev=>prev+1)
          console.log("ok")

        })
        socket.current.on('newReview',arg=>{
          setRefresh(prev=>prev+1)
          console.log("ok")
        })    
    }
  },[])



  return (
    <div className="Main-page">
      <button onClick={()=>navigate('/new')}>new Review</button>
      <div className='Sub-page'>
        {
          allreviews.map((e,index)=> <ReviewItem key = {e.reviewId} content = {{...e,index:index+1,setHoldText,holdText}}></ReviewItem>)
        }
      </div>
    </div>
  );
}

export default MainPage;

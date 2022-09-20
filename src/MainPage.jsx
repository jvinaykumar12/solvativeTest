import logo from './logo.svg';
import './App.css';
import NewReview from './NewReview';
import { useEffect,useState,useNavigate,useRef} from 'react';
import axios from 'axios';
import './MainPage.css'
import ReviewItem from './ReviewItem';
import {io} from 'socket.io-client'


function MainPage() {

const [allreviews,setAllReviews] = useState([])
const [refresh,setRefresh] = useState(1)
const [socketChange,setSocketChange] = useState(null)
const socket = useRef()


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
      <a href="http://localhost:3000/new"> new post </a>

      <div className='Sub-page'>
        {
          allreviews.map((e,index)=> <ReviewItem key = {e.reviewId} content = {{...e,indexNumber:index+1}}></ReviewItem>)
        }
      </div>
    </div>
  );
}

export default MainPage;



// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
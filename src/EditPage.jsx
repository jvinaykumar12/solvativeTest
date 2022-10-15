import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import NewReview from "./NewReview"

export default function EditPage() {

    const {id} = useParams()
    const [review,setReview] = useState("")

    useEffect(()=>{
        axios.get(process.env.REACT_LINK_BACKEND + `/singlereview/${id}`)
        .then(res=>{
            console.log(res.data)
            setReview(res.data)
        })
    },[])

    return (
        <NewReview props={review}></NewReview>
    )
}
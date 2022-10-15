import './App.css';
import NewReview from './NewReview';
import {Route,Routes} from "react-router-dom"
import MainPage from './MainPage';
import EditPage from './EditPage';




function App() {

    return(
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/new" element={<NewReview />} />
        <Route path="/:id" element = {<EditPage/>}/>
      </Routes>
    
    )

}

export default App;



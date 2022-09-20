import logo from './logo.svg';
import './App.css';
import NewReview from './NewReview';
import {Route,Routes} from "react-router-dom"
import MainPage from './MainPage';




function App() {

    return(

    <div>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/new" element={<NewReview />} />
        <Route path="/id" element = {<NewReview/>}/>
      </Routes>
    </div>
    )

}

export default App;



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
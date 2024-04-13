import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App =()=> {

  const [progress,setprogress]=useState(0)

  const newsApi=process.env.REACT_APP_newsApi


    return (

      <div>
        <LoadingBar color='#f11946' progress={progress}/>
        <Router>

          <NavBar/>

          <Routes>
            <Route exact path="/" element={<News newsApi={newsApi} setprogress={setprogress}  key=""  category=""/> }></Route>
            <Route exact path="/business" element={<News newsApi={newsApi} setprogress={setprogress}  key="business" category="business"/> }></Route>
            <Route exact path="/entertainment" element={<News newsApi={newsApi} setprogress={setprogress}  key="entertainment" category="entertainment"/> }></Route>
            <Route exact path="/general" element={<News newsApi={newsApi} setprogress={setprogress}  key="general" category="general"/> }></Route>
            <Route exact path="/health" element={<News newsApi={newsApi} setprogress={setprogress}  key="health" category="health"/> }></Route>
            <Route exact path="/science" element={<News newsApi={newsApi} setprogress={setprogress}  key="science" category="science"/> }></Route>
            <Route exact path="/sports" element={<News newsApi={newsApi} setprogress={setprogress}  key="sports" category="sports"/> }></Route>
            <Route exact path="/technology" element={<News newsApi={newsApi} setprogress={setprogress}  key="technology" category="technology"/> }></Route>
          </Routes>
        </Router>

      </div>
      
    )
  }

  export default App;
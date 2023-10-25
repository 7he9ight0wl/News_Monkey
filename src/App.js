import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  apiKey = "78e704a2b5a14fa6a2c2146d192a13a1";
  
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }


  render() {
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
                height={3}
                color='#f11946'
                progress={this.state.progress} 
              />
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} country="in" category="general"/>} /> 
          <Route exact path="/business" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}key="business" pageSize={5} country="in" category="business"/>} /> 
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={5} country="in" category="entertainment"/>} /> 
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={5} country="in" category="health"/>} /> 
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={5} country="in" category="science"/>} /> 
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={5} country="in" category="sports"/>} /> 
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={5} country="in" category="technology"/>} /> 
          </Routes>
      
      
        </Router>
      
      </div>
    )
  }
}
// import './App.css';

// import React, { Component } from 'react'
// import NavBar from './Components/NavBar';
// import News from './Components/News';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// export default class App extends Component {

//   render() {
//     return (
//       <div>
//         <Router>
//         <NavBar/> 
//         <Routes>
//           <Route exact path="/"><News key="general" pageSize={5} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News key="business" pageSize={5} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News key="general" pageSize={5} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News key="science" pageSize={5} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology"/></Route> 
//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }
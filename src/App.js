import './App.css';
import React, { Component } from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default class App extends Component {
  apiKey=process.env.REACT_NEWS_API_KEY
  render() {
 

    return (

      <div>
        <Router>
          <Navbar />
      
          <Routes>
        <Route exact path="/" element={<News key="general" apiKey={this.apiKey} country="in" category="general"/>} />
        <Route exact path="/sports" element={<News key="sports" apiKey={this.apiKey} country="in" category="sports"/>} />
        <Route exact path="/science" element={<News key="science" apiKey={this.apiKey} country="in" category="science"/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" apiKey={this.apiKey} country="in" category="entertainment"/>} />
        <Route exact path="/business" element={<News key="business" apiKey={this.apiKey} country="in" category="business"/>}/>
        <Route exact path="/technology" element={<News key="technology" apiKey={this.apiKey} country="in" category="technology"/>} />
        <Route exact path="/health" element={<News key="health" apiKey={this.apiKey} country="in" category="health"/>} />
       </Routes>

        </Router>
      </div>

    )
  }
}

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import LandingPage from './pages/landingpage/landingpage.component.jsx';
import Header from './components/header/header.component.jsx';
import './App.css'
import FormGroup from './components/form-group/form-group.components.jsx';
import CustomButton from './components/custom-button/custom-button.component.jsx';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// import { ContainerStyles } from './App.styled-component.js';
import MenuBar from './components/menu-bar/menu-bar.components.jsx';
import SignUp from './components/sign-up/sign-up.component.jsx';
import Footer from './components/footer/footer.component.jsx';



class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
  }

  render(){
    return (
      <div className='app'>
        <Router>
          <div id='wrapper' className='wrapper'>
            <Header/>
            <div className='main-wrap-content'>
              <main>
                <div id='container' className='container'>
                {/* <MenuBar /> */}
                <SignUp />
                <Routes>
                    <Route path='/*' element={<LandingPage />} /> 
                </Routes>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      </div>
    );
  };
};

export default App;


//  ~ === TILDAE











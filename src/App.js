import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import LandingPage from './pages/landingpage/landingpage.component.jsx';
import Header from './components/header/header.component.jsx';
import './App.css'
import SignIn from './components/sign-in/sign-in.component.jsx';
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
                <SignIn />
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











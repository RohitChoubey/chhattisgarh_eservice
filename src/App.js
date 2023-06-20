
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/pages/Home';
// import SelfLogin from './components/pages/SelfLogin';
// import DeptLogin from './components/pages/DeptLogin';
// import Gisindex from './components/pages/Gisindex';
// import ForgetPassword from './components/pages/ForgetPassword';
// import Reportro from './components/pages/Reportro';
// import Dashboard from './components/pages/Dashboard';
// import Registration from './components/pages/Registration';
// import Header from './components/admin/Header';
import Userside from './Userside';
import Adminside from './Adminside';
// import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
      { localStorage.getItem('authenticated') ? <Adminside /> :  <Userside /> }
        {/* <Footer/> */}
        {/* <Header /> */}
          {/* <Routes>
          <Route exact path="/admin/adminhome" component={AdminHome} />
          </Routes> */}
      </Router>
    </>

  );
}

export default App;

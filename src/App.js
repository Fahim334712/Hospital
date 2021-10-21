
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Departments from './components/Departments/Departments';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './components/Home/Home';
import LoadDoctors from './components/LoadDoctors/LoadDoctors';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Register from './components/Register/Register';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/departments">
              <Departments></Departments>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/doctors">
              <LoadDoctors></LoadDoctors>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

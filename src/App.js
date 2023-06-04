
import { Route, Routes } from 'react-router-dom';
import './App.css';
// Day 1
// import HeaderComponent from './Components/HeaderComponent/header';
// import AboutComponent from './Components/AboutComponent/about';
// import Skills from './Components/SkillsComponent/skills';
// import Protfolio from './Components/ProtfolioComponent/Protfolio';
// import FooterComponent from './Components/FooterComponent/FooterComonent';
//Day 2
import AddUser from './Components/Users/User';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
// import ToDoList from'./Components/ToDoList/ToDoList'
// import { Form } from 'react-bootstrap/Form';
//Day 3
import NavBar from './Components/Navbar/Navbar';
import Movies from './Components/Movies/Movies';
import MovieDetails from './Components/movieDetails/movieDetails';
import {LanguageProvider} from './context/language';
import { useState } from 'react';
import Favorite from './Components/FavoirteComponent/Favoirte'
function App() {
  var [language,setLanguage]= useState('en');
  return (
 <>
 {/* Day 1 */}
   {/* <HeaderComponent/>
     <AboutComponent/>
     <Skills/>
     <Protfolio/>
     <FooterComponent/> */}

{/* Day 2 */}
      {/* <div className='w-50 mx-5'>
    <AddUser/>
    </div>
    <div className='w-50 mx-5'>
    <hr></hr>
    </div>
    <div className='w-50 mx-5'>
    <RegistrationForm/>
  <hr></hr> */}
    {/* <ToDoList/> */}
    {/* </div>   */}
 {/* Day 3 */}
<div   dir={`${language==='en'?'ltr':'rtl'}`}> 
<LanguageProvider value={{language,setLanguage}}>
<NavBar/>
<Routes>

  {/* <Route path='./' element={<Home/>}/> */}
  <Route path='/Movies' element={<Movies/>}/>
  <Route path='/details/:id' element={<MovieDetails/>}/>
  <Route path='/Favorite' element={<Favorite/>}/>
  <Route path='/AddUser' element={<AddUser/>}/>
  <Route path='/RegistrationForm' element={<RegistrationForm/>}/>
</Routes>
</LanguageProvider>
{/* <FooterComponent/>  */}
</div>
 </>
   
    
  );
}

export default App;

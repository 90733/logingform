import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Blogs from "./Pages/Blogs"
import Loging from './Pages/Loging';

function App() {
return (
  <BrowserRouter>
<Navbar/>

	<Routes>
		<Route  path='/'  element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/loging' element={<Loging/>} />
		<Route path='/blogs' element={<Blogs/>} />
		
	</Routes>
	
  </BrowserRouter>
);
}

export default App;

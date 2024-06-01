import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert'
import { useState } from 'react';



function App() {

 
  return (
    <>
<Navbar title="TextUtils" color="Dark"  about="About"/>
<div className="container">
<Textform heading="Enter the Text on Textbox "/>
</div>


    </>
     );
}

export default App;

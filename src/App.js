import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() 
{

  const date = new Date()
  const hours = date.getHours()
   let timeOfDay=null
   if (hours > 12)
   {
     timeOfDay="Morning"
   }
   else if (hours>12 && hours < 17)
   {
     timeOfDay="Gof Fternoon"
   }
   else
   {
     timeOfDay="GOod Morning"
   }
  return (<h1>{timeOfDay} + {hours}</h1>);
}

export default App;

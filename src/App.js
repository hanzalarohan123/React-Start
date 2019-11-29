import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() 
{

  const date = new Date()
  const hours = date.getHours()
   let timeOfDay=null
   const styles=
   {
     fontSize:25
   }
   if (hours > 12)
   {
     timeOfDay="Morning"
     styles.color="yellow"
   }
   else if (hours>12 && hours < 17)
   {
     timeOfDay="Gof Fternoon"
     styles.color = "green"
   }
   else
   {
     timeOfDay="GOod Morning"
     styles.color = "blue"
   }

  return (<h1 className="xd">{timeOfDay} + {hours}</h1>);
}

export default App;

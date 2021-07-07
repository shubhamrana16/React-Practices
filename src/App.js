//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Hello from './components/Hello';
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from './components/FunctionClick';

import  ClassClick from     "./components/ClassClick";
import EventBind from './components/EventBind';
import NameList from './components/NameList';

function App() {
  return (

    <div className="App">

      <NameList />
      
      {/**
       *  <EventBind />
       */}

   { /* <FunctionClick></FunctionClick>

   <ClassClick></ClassClick> */}



{/*==============================================================================*/}

    { /*<Message />
    
    <Counter />

    <Hello  address= "patna" age = "24" ></Hello>

    <Greet fname = "Shubham" lname ="rana" /> */}

                { /*
             <p>Please Answer The Question.</p>
            <Greet name = "How Are You" />
                <Hello name = "shubham rana" />  

                 <Hello name = "How Are you"  />*/}


    </div>
  );
}

export default App;

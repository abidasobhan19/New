import React, { useState } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './homepage/home'
import Video from './video'

const Main = () => {

  // const [visiblity, setVisiblity] = useState(true);



  
 
  return (
    //  <div>
    //    <Nav/>
    //   { visiblity && 
    //    <div>
         
    //      <Slider/>
    //      <Movie setVisiblity={setVisiblity}/>
    //      </div>
       
       
    //    }
      
    //    {! visiblity && <Video/>}
     
    //  </div>
 <div>
{/* <BrowserRouter>
<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/video" component={Video}/>
</Switch>


</BrowserRouter> */}
<Video/>
 </div>


  );
};

export default Main;

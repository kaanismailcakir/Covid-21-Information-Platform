import React from 'react'
import { Menu,Dropdown,Button} from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import İnformation from './İnformation';
import Homed from './Homed';
import Homer from './Homer';
import Covid19 from './Covid19';
export default function Denenem() {
    return (
        <Router>
        <div>
        
          <nav>
          
            <ul className="anaa" >
            <Menu color="grey" inverted>
              
                <Link to="/"><Menu.Item className="Anasayfa"  position="left" 
            name='Anasayfa'
          />
          </Link>
         
         <Covid19/>
          
          <Link to="/tablo" > <Menu.Item
             name='Gelnel Covid 19 Tablosu'
           
          /></Link>
          
        
          <Homed/>
          </Menu>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
              <Route path="/tablo" >
                  <Tablo/>
              </Route>
            <Route path="/covid">
              <Covid />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          
        </div>
      </Router>
    );
  }
  
  function Home() {
    return <Homer/>;
  }
  
  function Covid() {
    return <Covid19/>;
  }
  function Tablo() {
      return <İnformation/>;
  }


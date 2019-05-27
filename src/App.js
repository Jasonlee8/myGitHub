import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home.js';
import Inbox from './Inbox.js';
import Drafts from './Drafts.js';


class App extends React.Component{

  render() {

    return (
        
       <div>

          <Router>

              <div>
                <nav>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/inbox/"  component={Inbox} />
                  <Route exact path="/drafts/" component={Drafts} />
                </nav>
              </div>

          </Router>

        </div>    
    )
  }
}

export default App;



            

            


//<route path="/Drafts" Component={Drafts} />


    /*map(function(listValue) {
          return <p>{listValue.name}</p>  
          })
        }
       </span>*/
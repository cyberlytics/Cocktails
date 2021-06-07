import React from 'react'
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Cocktails from './components/List_Of_Cocktails'


function App() {
  return(
<div className="container mt-3">
        <Switch>
          <Route exact path={["/"]} component={Cocktails} />
        </Switch>
      </div>
    )
}

export default App;
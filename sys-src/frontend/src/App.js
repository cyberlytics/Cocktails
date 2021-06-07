//Import modules
import React, { Component } from 'react';

//Import own UI-Elements
import TopContainer from './TopContainer/topcontainer';
import MainContainer from './MainContainer/maincontainer';
import BottomContainer from './BottomContainer/bottomcontainer';

//Import local ressources
import { apiurl } from './api';

class App extends Component {
    state = {
        userIsLoggedIn : false,
    }

    //Function to pass to childs, which enables them to set a state property
    setValue(property, val) {
        this.setState({
            [property] : val
        })
    }

    handleLogout(val) {
        console.log("Logging out...")
        localStorage.setItem('isLoggedInId', '');
        this.setValue('userIsLoggedIn', false);
        window.location.href='/';
    }

    async componentDidMount() {
        try {
            const isLoggedInId = localStorage.getItem('isLoggedInId');

            let res = await fetch(apiurl + '/isLoggedIn/' + isLoggedInId, {
            method: 'get',
            headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
            }
          });
    
          let result = await res.json();
          let isLoggedIn = result.success;
    
          if (isLoggedIn) {
            this.setState({userIsLoggedIn : true});
          }
          else {
            this.setState({userIsLoggedIn : false});
          }
        }
        catch(e) {
            console.log(e.message);
        }
    }
    
    render() {
        return (
            <div>
                <TopContainer userIsLoggedIn={this.state.userIsLoggedIn} onLogout={(val) => this.handleLogout(val)}/>
                <MainContainer userIsLoggedIn={this.state.userIsLoggedIn}/>
                <BottomContainer/>
            </div>
        );
    }
}

export default App;
//Import modules
import React, { Component } from 'react';
import CocktailsDataService from "./Service/cocktails"

//Import own UI-Elements
import TopContainer from './TopContainer/topcontainer';
import MainContainer from './MainContainer/maincontainer';
import BottomContainer from './BottomContainer/bottomcontainer';

//Import local ressources
import { apiurl } from './api';

class App extends Component {

    state = {
        userIsLoggedIn : false,
        cocktails : [],
        allcocktails : [],
    }
    static allcocktails

    setValue(property, val) {
        this.setState({
            [property] : val
        })
    }

    retrieveCocktails() {
        CocktailsDataService.getAll()
          .then(response => {
            this.setState({cocktails: response.data || []})
            this.setState({allcocktails: response.data})
          })
    }

    getSearch(val){
        this.setState({cocktails: this.state.allcocktails})
        //Get array of favourited cocktail names
        var favouritedCocktails = this.state.cocktails.filter(cocktail => cocktail.favourite).map(cocktail => cocktail.name);
        //Add the favourite tag accordingly to all search result
        var filteredCocktails = val.map(cocktail => ({...cocktail, favourite: favouritedCocktails.includes(cocktail.name)}));
        this.setState({cocktails: filteredCocktails});
    }

    getUserIsLoggedIn() {
        async function fetchData(self) {
            const isLoggedInId = localStorage.getItem('isLoggedInId');
            if (!isLoggedInId) {
                self.setState({userIsLoggedIn : false});
                return;
            }

            try {
                let res = await fetch(apiurl + '/login/' + isLoggedInId, {
                method: 'get',
                headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
                }
            });
        
            let result = await res.json();
            let isLoggedIn = result.success;
        
            if (isLoggedIn) {
                self.setState({userIsLoggedIn : true});
            }
            else {
                self.setState({userIsLoggedIn : false});
            }
            }
            catch(e) {
                self.setState({userIsLoggedIn : false});
                console.log(e.message);
            }
        }
        fetchData(this);
    }

    async handleLogout() {
        console.log("Logging out...")
        let userid = localStorage.getItem('isLoggedInId');

        localStorage.setItem('isLoggedInId', '');
        this.setValue('userIsLoggedIn', false);

        try {
            let res = await fetch(apiurl + '/logout', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: userid,
                })
            });

            let result = await res.json();
            if (result.success) {
                console.log("Logout successful");
            }
            else {
                console.log("Fehler beim Logout");
            }
        }
        catch(e) {
            console.log(e.message);
        }

        window.location.href='/';
    }

    getCocktailId(cocktailname) {
        return this.state.cocktails.find(cocktail => cocktail.name === cocktailname)._id;
    }

    async componentDidMount() {
        //Get Cocktails
        this.retrieveCocktails();

        //Check if user is already logged in
        this.getUserIsLoggedIn();
    }


    render() {
        return (
            <div>
                <TopContainer userIsLoggedIn={this.state.userIsLoggedIn} allcocktails={(this.state.allcocktails)} onSearchFiltered={(val) => this.getSearch(val)} onLogout={(val) => this.handleLogout(val)}/>
                <MainContainer userIsLoggedIn={this.state.userIsLoggedIn} cocktails={(this.state.cocktails)}/>
                <BottomContainer/>
            </div>
        );
    }
}

export default App;
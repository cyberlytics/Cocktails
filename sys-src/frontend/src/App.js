//Import modules
import React, { Component } from 'react';
import CocktailsDataService from "./Service/cocktails"

//Import own UI-Elements
import TopContainer from './TopContainer/topcontainer';
import MainContainer from './MainContainer/maincontainer';
import BottomContainer from './BottomContainer/bottomcontainer';

//Import local ressources
import { apiurl } from './api';
import cocktails from './Service/cocktails';

class App extends Component {

    state = {
        userIsLoggedIn : false,
        cocktails : [],
        tempcocktails : [],
    }
    static tempcocktails

    retrieveCocktails() {
        CocktailsDataService.getAll()
          .then(response => {
            this.setState({cocktails: response.data})
            this.setState({tempcocktails: response.data})
          })
    }

    getSearch(val){
        this.setState({cocktails: this.state.tempcocktails})
        //Get array of favourited cocktail names
        var favouritedCocktails = this.state.cocktails.filter(cocktail => cocktail.favourite).map(cocktail => cocktail.name);
        //Add the favourite tag accordingly to all search result
        var filteredCocktails = val.map(cocktail => ({...cocktail, favourite: favouritedCocktails.includes(cocktail.name)}));
        this.setState({cocktails: filteredCocktails});
    }

    getFavourites() {
        async function fetchData(self) {
            let userid = localStorage.getItem('isLoggedInId');
            try {
                let res = await fetch(apiurl + '/user/' + userid + '/favourites', {
                    method: "get",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                
                //process result
                let result = await res.json();

                //Request successfull
                if (result && result.success) {
                    self.setState({
                        //Add favourite field to every existing cocktail and set its value according to the fetch result
                        cocktails: self.state.cocktails.map(cocktail => ({...cocktail, favourite: result.cocktails.map(favcocktail => favcocktail.name).includes(cocktail.name)})),
                    });
                }
                //Request failed
                else if (result && result.success === false) {
                  self.setState({
                    favouritedCocktails : null,
                  })
                }
              } catch (error) {
                  console.log(error.message);
              }
            }
        fetchData(this);
    }

    getUserIsLoggedIn() {
        async function fetchData(self) {
            try {
                const isLoggedInId = localStorage.getItem('isLoggedInId');
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

    toggleFavourite(favname) {
        async function toggle(self) {
            await self.setState({
                cocktails: self.state.cocktails.map(cocktail => ({...cocktail, favourite: cocktail.name === favname ? !cocktail.favourite : cocktail.favourite})),
            });
            self.getCocktailId(favname);
            let userid = localStorage.getItem('isLoggedInId');
            if(userid !== null) {
                let cocktailid = self.getCocktailId(favname);
                try {
                    let res = await fetch(apiurl + '/user/setFavourite', {
                        method: "post",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userid: userid, 
                            cocktail: cocktailid,
                        })
                    });
                    
                    //process result
                    let result = await res.json();
        
                    //Successful authenticated
                    if (result && result.success) {

                    }
                    else if (result && result.success === false) {

                    }
                } catch (error) {

                }
            }
        }
        toggle(this);
    }

    async componentDidMount() {
        //Get Cocktails
        this.retrieveCocktails();

        //Get favourited cocktails
        this.getFavourites();

        //Check if user is already logged in
        this.getUserIsLoggedIn();
    }


    render() {
        return (
            <div>
                <TopContainer userIsLoggedIn={this.state.userIsLoggedIn} cocktails={(this.state.cocktails)} onSearchFiltered={(val) => this.getSearch(val)} onLogout={(val) => this.handleLogout(val)}/>
                <MainContainer userIsLoggedIn={this.state.userIsLoggedIn} cocktails={(this.state.cocktails)} toggleFavourite={(val) =>this.toggleFavourite(val)}/>
                <BottomContainer/>
            </div>
        );
    }
}

export default App;
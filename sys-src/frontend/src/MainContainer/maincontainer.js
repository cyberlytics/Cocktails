//Import modules
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Import own UI-Elements
import LoginForm from '../LoginForm/loginform';
import CocktailsList from './Cocktailoverview/List_Of_Cocktails';
import FavouritesList from './favouriteslist/favouriteslist';
import CreateRoutes from '../components/CreateRoutes';
import RegisterForm from './RegisterForm/registerform';

// All elements of the main container converge here
// and the all the frontend routing happens here
const MainContainer = props => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
            <BrowserRouter>
                <Switch>
                    <Route path="/Favourites">
                        <FavouritesList cocktails={props.cocktails} userIsLoggedIn={props.userIsLoggedIn}/>
                    </Route>
                    <Route path="/LastCocktails">
                    </Route>
                    <Route path="/MyCocktails">
                    </Route>
                    <Route path="/CreateCocktail">
                    </Route>
                    <Route path="/Login">
                        <LoginForm/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/Cocktailoverview" />
                    </Route>
                    <Route path="/Cocktailoverview">
                        <CocktailsList cocktails={props.cocktails} userIsLoggedIn={props.userIsLoggedIn}/>
                    </Route>
                    <Route path="/register">
                        <RegisterForm/>
                    </Route>                    
                    <CreateRoutes cocktails={props.cocktails}/>
                </Switch>
            </BrowserRouter>
            </div>
        </div>
    );
}
 
export default MainContainer;
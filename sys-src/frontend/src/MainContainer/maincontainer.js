//Import modules
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Import own UI-Elements
import LoginForm from '../LoginForm/loginform';
import CocktailsList from './Cocktailoverview/List_Of_Cocktails';
import FavouritesList from './favouriteslist/favouriteslist';
import CreateRoutes from '../components/CreateRoutes';
import RegisterForm from './RegisterForm/registerform';
import Impressum from './Impressum/impressum';
import Datenschutz from './Datenschutz/datenschutz';

// All elements of the main container converge here
// and the all the frontend routing happens here
const MainContainer = props => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
            <BrowserRouter>
                <Switch>
                    <Route path="/Favourites">
                        {props.userIsLoggedIn ?
                        <FavouritesList cocktails={props.cocktails} userIsLoggedIn={props.userIsLoggedIn}/>
                        :
                        <h1>NICHT EINGELOGGT</h1>
                        }
                    </Route>
                    <Route path="/LastCocktails">
                        <h1>{props.userIsLoggedIn ? "LETZTE COCKTAILS" : "NICHT EINGELOGGT"}</h1>
                    </Route>
                    <Route path="/MyCocktails">
                        <h1>{props.userIsLoggedIn ? "EIGENE COCKTAILS" : "NICHT EINGELOGGT"}</h1>
                    </Route>
                    <Route path="/CreateCocktail">
                        <h1>{props.userIsLoggedIn ? "EIGENEN COCKTAIL ERSTELLEN" : "NICHT EINGELOGGT"}</h1>
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
                    <Route path="/Impressum">
                        <Impressum/>
                    </Route>
                    <Route path="/Datenschutz">
                        <Datenschutz/>
                    </Route>         
                    <CreateRoutes cocktails={props.cocktails}/>
                </Switch>
            </BrowserRouter>
            </div>
        </div>
    );
}
 
export default MainContainer;
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen'
import AddScreen from './screens/AddScreen'
import EditScreen from './screens/EditScreen'
import RecipeScreen from "./screens/RecipeScreen";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        <Route path="/add" component={AddScreen} />
                        <Route path="/edit/:id" component={EditScreen} />
                        <Route path="/recipes/:id" component={RecipeScreen} />
                        <Route path="/" component={HomeScreen} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;

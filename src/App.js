import React, { Component } from 'react';
import {Router, Route, Switch, Redirect} from  'react-router-dom';
import history from './history';
import {connect} from "react-redux";
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import verification from './components/verification';


class App extends Component {
    constructor(props){
        super(props)
    }

    render(){

        return (
            <div className="mainScreen">
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' render={()=>(
                            this.props.registration.email!==undefined ? (<Redirect to='HomePage' />) : (<Redirect to='Signup' />)
                        )} />
                        <Route path="/homepage" component={HomePage} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/emailverification" component={verification} />
                    </Switch>
                </Router>
            </div>
        )
    }
}



export default connect((state)=>{
    return {
        registration: state.registration
    }
})(App);


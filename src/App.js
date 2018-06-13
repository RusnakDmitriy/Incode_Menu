import React, { Component } from 'react';
import {Route, Switch, Redirect} from  'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import history from './history';
import {connect} from "react-redux";
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import EmailVerification from './components/EmailVerification';
import NotFound from './components/NotFound';
import verification from './components/verification';


class App extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(`/auth/${localStorage.getItem('incodeMenu')}`);
        return (
            <div className="mainScreen">
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/signup" component={Signup} />
                        <Route path="/signin" component={Signin}/>
                        <Route path="/verificationMessage" component={verification}/>
                        <Route path={`/auth/${localStorage.getItem('incodeMenu')}`} component={EmailVerification}/>
                        {(localStorage.getItem('incodeMenu')===this.props.registration.authToken) && (<Redirect to={`/auth/${this.props.registration.authToken}`} />)}
                        {!this.props.enter.email && (<Redirect to='/signup' />)}
                        <Route path="/" component={HomePage} exact/>
                        {/*<Redirect from ="*" to='/404.html' />*/}
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </ConnectedRouter>
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        registration: state.registration,
        enter: state.enter
    }
})(App);


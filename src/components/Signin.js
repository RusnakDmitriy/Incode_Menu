import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from  'react-router-dom';
//import {signup} from '../AC';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSignIn=()=>{
        this.props.signup(this.state);
        this.setState({
            email:'',
            password:''
        });
    }

    handleChangeUsername=(ev)=>{
        let target=ev.target;
        this.setState({email:target.value});
    }

    handleChangePassword=(ev)=>{
        let target=ev.target;
        this.setState({password:target.value});
    }

    render(){
        const {email, password}=this.state;

        return (
            <div className="registrationForm">
                <h3>Sign into "Lunch Menu" app</h3>
                <div className="fieldsForm">
                    <div><span className='authLable'>Email: </span><input type='text' value={email} onChange={this.handleChangeUsername} /></div>
                    <div><span className='authLable'>Password: </span><input type='password' value={password} onChange={this.handleChangePassword} /></div>
                </div>
                <div className="btnForm">
                    <button onClick={this.handleSignIn}>Sign In</button>
                    <div>You alreade have account? Please, <NavLink to="/signup">sign up</NavLink></div>
                </div>
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        registration: state.registration
    }
}, (dispatch)=>({
    //signup: (user)=>dispatch(signup(user))
}))(Signin)
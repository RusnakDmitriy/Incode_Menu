import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from  'react-router-dom';
import {signup} from '../AC';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            reppassword: '',
            alert: false
        }
    }

    handleSignUp=()=>{
        const {signup}=this.props;

        if(this.state.password===this.state.reppassword && this.state.password!==''){
            signup(this.state);
            this.setState({alert:true});
            this.props.history.push('/verificationMessage');
            this.setState({
                email:'',
                password:'',
                reppassword: '',
                alert: false
            });
        } else {
            this.setState({alert: true})
        }
    }

    handleChangeUsername=(ev)=>{
        let target=ev.target;
        this.setState({email:target.value});
    }

    handleChangePassword=(ev)=>{
        let target=ev.target;
        this.setState({password:target.value});
    }

    handleChangeRepPassword=(ev)=>{
        let target=ev.target;
        this.setState({reppassword:target.value});
    }

    render(){
        const {email, password, reppassword, alert}=this.state;
        console.log('Please, enter email: someone@somewhare.gm.com');
        return (
            <div className="registrationForm">
                <h3>Register with "Lunch Menu" app</h3>
                <div className="fieldsForm">
                    <div><span className='authLable'>Email: </span><input type='text' value={email} onChange={this.handleChangeUsername} /></div>
                    <div><span className='authLable'>Password: </span><input type='password' value={password} onChange={this.handleChangePassword} /></div>
                    <div><span className='authLable'>Repeat password: </span><input type='password' value={reppassword} onChange={this.handleChangeRepPassword} /></div>
                </div>
                <div className="btnForm">
                    <button onClick={this.handleSignUp}>Sign Up</button>
                    <div>You alreade have account? Please, <NavLink to="/signin">sign in</NavLink></div>
                    {!alert ? (<div></div>) : (<div>Please enter password end repeat it exactly again</div>)}
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
    signup: (user)=>dispatch(signup(user))
}))(Signup)
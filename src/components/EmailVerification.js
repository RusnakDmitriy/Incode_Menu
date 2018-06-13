import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from  'react-router-dom';
import {verify} from '../AC';

class Signin extends Component{
    constructor(props){
        super(props);

    }

    handleVerifyEmail=()=>{
        const {registration}=this.props;
        this.props.verify(registration);
    }


    render(){
        const {registration}=this.props;

        return (
            <div className="registrationForm">
                <h3>Emailverification for "Lunch Menu" app</h3>
                <div className="fieldsForm">
                    <div><span className='authLable'>Email: </span><input type='text' /*value={registration.email}*/ defaultValue={localStorage.getItem('incodeMenuEmail')} /></div>
                </div>
                <div className="btnForm">
                    <button onClick={this.handleVerifyEmail}>Verify email</button>
                    <div>You alreade have account? Please, <NavLink to="/signin">sign in</NavLink></div>
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
    verify: (data)=>dispatch(verify(data))
}))(Signin)
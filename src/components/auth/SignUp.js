import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authAction';


export class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="/" />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="text" onChange={this.handleChange} className="validate" />
                        <label htmlFor="icon_prefix">Email</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">create</i>
                        <input id="password" type="password" onChange={this.handleChange} className="validate" />
                        <label htmlFor="icon_prefix">Password</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">person</i>
                        <input id="firstName" type="text" onChange={this.handleChange} className="validate" />
                        <label htmlFor="icon_prefix">First Name</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">person</i>
                        <input id="lastName" type="text" onChange={this.handleChange} className="validate" />
                        <label htmlFor="icon_prefix">Last Name</label>
                    </div>
                    <div className="input-field">
                        <button className="btn grey darken-3 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

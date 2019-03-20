import React, { Component } from 'react'

export class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {


        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
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
                        <button className="btn grey darken-3 z-depth-0">Login</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;

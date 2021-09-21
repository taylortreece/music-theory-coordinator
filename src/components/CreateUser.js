import React from 'react'

class CreateUser extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleCreateAccount = (event) => {
        fetch('http://localhost:3001/')
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>or</p>
                <h1>Create an Account</h1>
                <form onSubmit={this.handleCreateAccount}>
                    <input onChange={this.handleOnChange} name="username" type='text' placeholder='username...'/><br />     
                    <input onChange={this.handleOnChange} name="password" type='text' placeholder='password...'/><br /> 
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default CreateUser;
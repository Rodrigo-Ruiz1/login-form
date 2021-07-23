import React, {Component} from 'react';
import LoginMessage from './LoginMessage';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            serverResponse: null,
        }
    }

    _updateField = (field, val) => {
        this.setState({
            [field]: val,
            serverResponse: null
        }, () => {
            console.log(`${field} is now ${val}`);
        });
    }

    _submitForm = (event) => {
        event.preventDefault();
        const serverResponse = this.props.handleSubmit(this.state.username, this.state.password);
        this.setState({
            serverResponse
        }, () => {
            console.log(serverResponse);
        });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this._submitForm}>
                    <label>
                        username:
                        <input type="text"
                        value={this.state.username}
                        onChange={(event) => {
                            this._updateField('username', event.target.value)
                        }}></input>
                    </label>
                    <br/>
                    <label>
                        password:
                        <input type="password"
                        value={this.state.password}
                        onChange={(event) => {
                            this._updateField('password', event.target.value)
                            }}></input>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <LoginMessage {...this.state.serverResponse} />
            </div>
        )
    }
}

export default LoginForm;
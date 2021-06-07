import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import IconText from '../inputs/icontextfield';
import { styles } from './styles';
import { apiurl } from '../api.js';

class LoginForm extends Component {
    
    //Initialize username and password field with empty string and enable button
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false
        }
    }

    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }

    setInputValue(property, val) {
        this.setState({
            [property] : val
        })
    }

    async handleSubmit() {
        if (!this.state.username) {
            return;
        }
        if (!this.state.password) {
            return;
        }

        this.setState({
            buttonDisabled : true
        })

        try {
            let res = await fetch(apiurl + '/login', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username, 
                    password: this.state.password
                })
            });
            
            //process result
            let result = await res.json();

            //Successful authenticated
            if (result && result.success) {
                localStorage.setItem('isLoggedInId', result.id);
                window.location.href='/'
            }
            else if (result && result.success === false) {
                //TODO: USER BENACHRICHTIGEN
                this.resetForm();
            }
        } catch (error) {
            console.log(error.message);
            this.resetForm();
        }
    }

    render() { 
        return (
            <div style={styles.styleDiv} className="login-form">
                <h1 style={styles.styleHeadline}>Login</h1>
                <IconText style={styles.styleTextField} type="username" placeholder="Username" 
                value={this.state.username ? this.state.username : ''} onChange={ (val) => this.setInputValue('username', val)}/>
                <IconText style={styles.styleTextField} type="password" placeholder="Password"
                value={this.state.password ? this.state.password : ''} onChange={ (val) => this.setInputValue('password', val)}/>
                <Button style={styles.styleButton} variant="contained" type="submit" onClick={() => this.handleSubmit() }
                disabled={this.state.buttonDisabled}>Login</Button>
            </div>
        );
    }
}
 
export default LoginForm;
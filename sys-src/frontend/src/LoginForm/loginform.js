//Import modules
import React, { Component } from 'react';

//Import own UI-Elements
import IconTextField from '../inputs/icontextfield';

//Import local ressources
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
        };
        this.onKeyUp = this.handleKeypress.bind(this);
    }

    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }

    componentDidMount() {
        this.resetForm();
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
                window.location.href='/';
                return true;
            }
            else if (result && result.success === false) {
                alert(result.msg);
                this.resetForm();
                window.location.href='/login';
                return false;
            }
        } catch (error) {
            alert("Fehler:" + error.message);
            this.resetForm();
            return false;
        }
    }

    handleKeypress = e => {
        if (e.key === "Enter") {
          this.handleSubmit();  
        }
    };

    render() { 
        return (
            <div style={styles.styleDiv} className="login-form" onKeyPress={this.handleKeypress}>
                <h1 style={styles.styleHeadline}>Login</h1>
                <div style={styles.styleInputField}><IconTextField type="username" placeholder="Username" iconclass="fas fa-user"
                value={this.state.username ? this.state.username : ''} onChange={ (val) => this.setInputValue('username', val)} /></div>
                <div style={styles.styleInputField}><IconTextField type="password" placeholder="Password" iconclass="fas fa-lock"
                value={this.state.password ? this.state.password : ''} onChange={ (val) => this.setInputValue('password', val)} /></div>
                <div style={styles.styleInputField}><button style={styles.styleButton} variant="contained" type="submit" className="btn btn-primary"
                onClick={() => this.handleSubmit() } disabled={this.state.buttonDisabled}>Login</button></div>
                <div style={styles.styleLinkText}><span>Not registered yet? Click <a href="/register">Here</a></span></div>
            </div>
        );
    }
}
 
export default LoginForm;
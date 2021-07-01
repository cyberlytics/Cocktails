//Import modules
import React, { Component } from 'react';

//Import own UI-Elements
import IconTextField from '../../inputs/icontextfield';

//Import local ressources
import { styles } from './styles';
import { apiurl } from '../../api';

class RegisterForm extends Component {
    
    //Initialize username and password field with empty string and enable button
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordValidation: '',
            buttonDisabled: false
        };
        this.onKeyUp = this.handleKeypress.bind(this);
    }

    //Make sure everything is accessible on the beginning
    componentDidMount() {
        this.resetForm();
    }

    //Reset form
    resetForm() {
        this.setState({
            username: '',
            password: '',
            passwordValidation: '',
            buttonDisabled: false
        })
    }

    //method to pass to childs, which enables them to set state for username, password or password validation
    setInputValue(property, val) {
        this.setState({
            [property] : val
        })
    }

    async handleSubmit() {
        if (!this.state.username) {
            return;
        }
        if (!this.state.passwordValidation) {
            return;
        }
        if (!this.state.password) {
            return;
        }

        //When username, password and password validation were provided, then disable button and proceed
        this.setState({
            buttonDisabled : true
        })

        try {
            let res = await fetch(apiurl + '/user/register', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username, 
                    password: this.state.password,
                    passwordValidation: this.state.passwordValidation,
                })
            });
            
            //process result to json
            let result = await res.json();

            //Request successful
            if (result && result.success) {
                alert("Registrierung erfolgreich");
                window.location.href='/login';
            }
            //if not successful then make alert with error text sent from api
            else if (result && result.success === false) {
                this.setState({buttonDisabled: false});
                alert(result.msg);
            }
        //error handling
        } catch (error) {
            this.resetForm();
            console.log(error.message);
        }
    }

    //Submit, when Enter Button was pressed
    handleKeypress = e => {
        if (e.key === "Enter") {
          this.handleSubmit();  
        }
    };

    render() { 
        return (
            <div style={styles.styleDiv} className="login-form" onKeyPress={this.handleKeypress}>
                <h1 style={styles.styleHeadline}>Register</h1>

                <div style={styles.styleInputField}>
                    <IconTextField type="username" name="usr" placeholder="Username" iconclass="fas fa-user" value={this.state.username ? this.state.username : ''} onChange={ (val) => this.setInputValue('username', val)} />
                </div>
                
                <div style={styles.styleInputField}>
                    <IconTextField type="password" placeholder="Password" className="password-input" iconclass="fas fa-lock" value={this.state.password ? this.state.password : ''} onChange={ (val) => this.setInputValue('password', val)} />
                </div>
                
                <div style={styles.styleInputField}>
                    <IconTextField type="password" placeholder="Password Validation" iconclass="fas fa-lock" value={this.state.passwordValidation ? this.state.passwordValidation : ''} onChange={ (val) => this.setInputValue('passwordValidation', val)} />
                </div>
                
                <div style={styles.styleInputField}>
                    <button style={styles.styleButton} variant="contained" type="submit" className="btn btn-primary" onClick={() => this.handleSubmit() } disabled={this.state.buttonDisabled}>Submit</button>
                </div>
            </div>
        );
    }
}
 
export default RegisterForm;
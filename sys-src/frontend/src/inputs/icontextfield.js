import React, { Component } from 'react';

import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock'

class IconTextField extends Component {
    getIcon(type) {
        switch(type) {
            case 'username': return <AccountCircle size="large"/>;
            case 'password': return <Lock/>;
            default : return;
        }
    }

    render() { 
        return (
            <TextField id="input-with-icon-textfield" style={this.props.style} variant="filled" value={this.props.value}
            placeholder={this.props.placeholder} type={this.props.type} onChange={ (e) => this.props.onChange(e.target.value)} InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {this.getIcon(this.props.type)}
                  </InputAdornment>
                ),
            }}/>
        );
    }
}
 
export default IconTextField;
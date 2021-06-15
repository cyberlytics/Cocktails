//Import modules
import React, { Component } from 'react';

//Import local ressources
import { styles } from './styles';

class IconTextField extends Component {

    render() { 
        return (
            <div style={styles.styleDiv} class="">
                <div style={styles.styleIconDiv}>
                    <span style={styles.styleSpan}><i class={this.props.iconclass}/></span>
                </div>
                <input style={styles.styleInput} type={this.props.type} class="" placeholder={this.props.placeholder} aria-label="Username" aria-describedby="basic-addon1" onChange={ (e) => this.props.onChange(e.target.value)}/>
            </div>
        );
    }
}
  
export default IconTextField;
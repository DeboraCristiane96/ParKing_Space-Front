import React from 'react';

export default class Card extends React.Component {
    render(){
        return(
            <div className ="form-group">
                <label htmlFor ="inputName">{this.props.label}</label>
                <div>
                    {this.props.children}
                </div>
            </div>

        )
    }
}
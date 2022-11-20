import React from 'react';

export default class Card extends React.Component {
    render(){
        return(
            <div className ="card">
                <h3>{this.props.label}</h3>
                <div>
                    {this.props.children}
                </div>
            </div>

        )
    }
}
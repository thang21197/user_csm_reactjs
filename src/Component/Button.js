import React, { Component } from 'react';

class Button extends Component {
    showButton  = () =>{
        if(this.props.isButton===true){
            return  <a href="/" className="btn btn-outline-primary btn-block mb-3" onClick={(event)=>{this.props.isClick(event)}}>Close</a>
        }else{
            return  <a href="/"  className="btn btn-primary btn-block" onClick={(event)=>{this.props.isClick(event)}}>Open</a>
        }
    }
    render() {
        return (
        <div>
            {this.showButton()}
        </div>
        );
    }
}

export default Button;
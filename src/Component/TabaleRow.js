import React, { Component } from 'react';

class TabaleRow extends Component {
    render() {
        return (
               <tr>
                  <td >{this.props.stt}</td>
                  <td>{this.props.UName}</td>
                  <td>{this.props.UPhone}</td>
                  <td>{this.props.ULvl}</td>
                  <td>
                    <a href="/" className="btn btn-success">Edit</a>
                    <a href="/" className="btn btn-danger">Delete</a>
                  </td>
                </tr> 
        );
    }
}

export default TabaleRow;
import React, { Component } from 'react';
import TabaleRow from './TabaleRow';
class Table extends Component {
  isDeleteUser   = (idUser) =>{
      this.props.isDeleteUser(idUser)
  }
  showData  = () => {
    return this.props.DataUser.map((value,key) =>(<TabaleRow isDeleteUser={(idUser)=>this.isDeleteUser(idUser)} isEditUser={this.props.isEditUser} key={key} Uid={value.id} stt={key} UName={value.Name} UPhone={value.Phone} ULvl={value.Level}/>))}


    render() {  
        return (
        <div className="col ">
            <table className="table table-striped ">
              <thead className="thead-inverse">
                <tr>
                  <th>/</th>
                  <th>Name</th>
                  <th>Tel</th>
                  <th>Level</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { this.showData()}        
              </tbody>
            </table>
          </div>
        );
    }
}

export default Table;
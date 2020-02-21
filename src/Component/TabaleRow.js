import React, { Component } from 'react';

class TabaleRow extends Component {
    constructor(props) {
      super(props);
      this.state={
        isShowEditUser: false,
        Name:this.props.UName,
        Phone:this.props.UPhone,
        Level:this.props.ULvl,
        id:this.props.Uid
      }
    }
    isSave = () => {
      var EditUser=[];
      EditUser.Name=this.state.Name;
      EditUser.Phone=this.state.Phone;
      EditUser.Level=this.state.Level;
      EditUser.id=this.state.id;
      this.props.isEditUser(EditUser);
      this.setState({
        isShowEditUser: !this.state.isShowEditUser
      });
    } 
    isDelete = (idUser) =>{
      this.props.isDeleteUser(idUser);
    }
    isChangeValue  = (event) => {
      const name= event.target.name;
      const value= event.target.value;
      this.setState({
         [name]:value
      });
    } 
    isShowEdit  = () => {
      if (this.state.isShowEditUser===true){
        
        return (
        <tr>
          <td>{this.props.stt}</td>
          <td><input defaultValue={this.state.Name} name="Name" onChange={(event)=>{this.isChangeValue(event)}} type="text" className="form-control"/></td>
          <td><input defaultValue={this.state.Phone} name="Phone" onChange={(event)=>{this.isChangeValue(event)}} type="text" className="form-control"/></td>
          <td><select defaultValue={this.state.Level}  name="Level" onChange={(event)=>{this.isChangeValue(event)}} className="form-control">
            <option value="Admin">Admin</option>
            <option value="Member">Member</option>
          </select>
            </td>
          <td>
            <div className="btn btn-success mr-2" onClick={() =>{this.isSave()}}>Save</div>
            <div className="btn btn-danger"  onClick={(event) => {this.isClickEdit(event)} } >Cancel</div>
          </td>
        </tr> 
        )
      }else{
        console.log(this.state);
        
        return(
          <tr>
                  <td>{this.props.stt+1}</td>
                  <td>{this.props.UName}</td>
                  <td>{this.props.UPhone}</td>
                  <td>{this.props.ULvl}</td>
                  <td>
                    <div  onClick={(event) => {this.isClickEdit(event)} } className="btn btn-success mr-2">Edit</div >
                    <div  onClick={(idUser) => {this.isDelete(this.props.Uid)} } className="btn btn-danger">Delete</div >
                  </td>
          </tr> 
        )
      }
    } 
    isClickEdit = (event) => {
      event.preventDefault();
      this.setState({
        isShowEditUser: !this.state.isShowEditUser
      });
    } 
    render() {
        return(    
              this.isShowEdit()
        )
       
    }
}

export default TabaleRow;
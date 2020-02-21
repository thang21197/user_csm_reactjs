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
          <td><input defaultValue={this.props.UName} name="Name" onChange={(event)=>{this.isChangeValue(event)}} type="text" className="form-control"/></td>
          <td><input defaultValue={this.props.UPhone} name="Phone" onChange={(event)=>{this.isChangeValue(event)}} type="text" className="form-control"/></td>
          <td><select defaultValue={this.props.ULvl}  name="Level" onChange={(event)=>{this.isChangeValue(event)}} className="form-control">
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
        return(
          <tr>
                  <td>{this.props.stt}</td>
                  <td>{this.state.Name}</td>
                  <td>{this.state.Phone}</td>
                  <td>{this.state.Level}</td>
                  <td>
                    <a href="/" onClick={(event) => {this.isClickEdit(event)} } className="btn btn-success mr-2">Edit</a>
                    <a href="/" className="btn btn-danger">Delete</a>
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
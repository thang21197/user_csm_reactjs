import React, { Component } from 'react';
const uuidv1 = require('uuid/v1');
class Adduser extends Component {
     constructor(props) {
       super(props);
       this.state={
         id:'',
         fLevel:"0",
       }
     }
     
    GetNewUser  = (event) =>{
      const name = event.target.name;
      const value= event.target.value;
      this.setState({
        [name]:value
      });
    }
    render() {
        var newUser=[];
        newUser.id=uuidv1();
        newUser.Name=this.state.fName;
        newUser.Phone=this.state.fPhone;
        newUser.Level=this.state.fLevel;     
        if(this.props.isForm===true){
            return (
                <div className="card text-left">
                    <img className="card-img-top" src="holder.js/100px180/" alt="" />
                    <div className="card-body text-center">
                      <h4 className="card-title">Add User</h4>
                      <div className="form-group">
                        <input type="text" className="form-control" name="fName" onChange={(event) =>{this.GetNewUser(event)}} placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" name="fPhone" onChange={(event) =>{this.GetNewUser(event)}} placeholder="Telephone Number" />
                      </div>
                      <div className="form-group">
                        <select defaultValue={0} className="form-control" name="fLevel" onChange={(event) =>{this.GetNewUser(event)}} >
                          <option value={0} >Admin</option>
                          <option value={1}  >Member</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary mx-auto" onClick={(user)=>this.props.AddUserSubmit(newUser)}>Add user</button>
                    </div>
                  </div>
                );
        }else return true  
    }
}

export default Adduser;
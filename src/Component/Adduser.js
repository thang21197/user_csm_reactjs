import React, { Component } from 'react';
class Adduser extends Component {
    render() {
        if(this.props.isForm===true){
            return (
                <div className="card text-left">
                    <img className="card-img-top" src="holder.js/100px180/" alt="" />
                    <div className="card-body text-center">
                      <h4 className="card-title">Add User</h4>
                      <div className="form-group">
                        <input type="text" className="form-control"  placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Telephone Number" />
                      </div>
                      <div className="form-group">
                        <select className="form-control" >
                          <option>Admin</option>
                          <option>Member</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary mx-auto">Add user</button>
                    </div>
                  </div>
                );
        }else return true  
    }
}

export default Adduser;
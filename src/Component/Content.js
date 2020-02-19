import React, { Component } from 'react';
import Search from './Search';
import Table from './Table';
import Adduser from './Adduser';
import Button from './Button';
import DataUser from '../Data/DataUser.json';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
            isButton: true,
            isForm:true,
            DataUser:DataUser
        }
    }

    isClick  = (event) =>{
        event.preventDefault();
       this.setState({
           isButton: !this.state.isButton,
           isForm: !this.state.isForm
       });
    }
    SearchUser  = (user) =>{
        alert(user);
    }
    render() {
        return (
    <div className="container">
        <Search isSearch={(user)=>this.SearchUser(user)}/>
        <div className="row">
          <Table DataUser={this.state.DataUser}/>
      <div className="col col-md-3">
            <Button isClick={(event) =>{this.isClick(event)}} isButton={this.state.isButton}/>
            <Adduser isForm={this.state.isForm} />
          </div>
        </div>
      </div>
        );
    }
}

export default Content;
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
            DataUser:DataUser,
            SearchDataName:''
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
       this.setState({
           SearchDataName:user
        });
    }
    render() {
        var SearchUserArray=[];
        this.state.DataUser.forEach((item) =>{
           if(item.Name.indexOf(this.state.SearchDataName)!== -1){
               SearchUserArray.push(item);
           }
        })
        
        return (
    <div className="container">
        <Search isSearch={(user)=>this.SearchUser(user)}/>
        <div className="row">
          <Table DataUser={SearchUserArray}/>
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
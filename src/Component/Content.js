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
            SearchDataName:'',
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
    AddUserSubmit = (newUser) =>{
        var newdata=this.state.DataUser;
        newdata.push(newUser);
        // console.log(newdata);
        
        this.setState({
            DataUser:newdata
        });     
    }
    isEditUser  = (UserEdit) => {
        console.log(UserEdit);
        this.state.DataUser.forEach((value,key)=>{
            if(value.id === UserEdit.id){
                value.Name=UserEdit.Name;
                value.Phone=UserEdit.Phone;
                value.Level=UserEdit.Level;
            }
        })     
    } 
    isDeleteUser = (idUser) =>{   
        var temData= this.state.DataUser.filter(item => item.id !== idUser);       
        this.setState({
            DataUser:temData
        });
    }
    render() {
        var SearchUserArray=[];
        this.state.DataUser.forEach((item) =>{
           if(item.Name.indexOf(this.state.SearchDataName)!== -1){
               SearchUserArray.push(item);
           }
        });
        // console.log(this.state.DataUser);
        return (
    <div className="container">
        <Search isSearch={(user)=>this.SearchUser(user)}/>
        <div className="row">
          <Table isDeleteUser={(idUser) =>{this.isDeleteUser(idUser)}} isEditUser={(UserEdit)=>this.isEditUser(UserEdit)} DataUser={SearchUserArray}/>
      <div className="col col-md-3">
            <Button isClick={(event) =>{this.isClick(event)}} isButton={this.state.isButton}/>
            <Adduser isForm={this.state.isForm} AddUserSubmit={(newUser) =>{this.AddUserSubmit(newUser)}}/>
          </div>
        </div>
      </div>
        );
    }
}

export default Content;
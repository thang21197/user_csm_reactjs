import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
      super(props);
      this.state={
        SearchText:''
      }
    }
    isChange  = (event) =>{
      this.setState({
        SearchText:event.target.value
      });
      this.props.isSearch(this.state.SearchText);  
    }
    render() {
        return (
        <div className="row">
          <div className="form-group btn-group">
            <input type="text" className="form-control" placeholder="Search....." onChange={(event) =>{this.isChange(event)}} />
            <button type="submit" className="btn btn-primary" onClick={()=>this.props.isSearch(this.state.SearchText)}>Search</button>
          </div>
        </div>
        );
    }
}

export default Search;
import React, { Component } from 'react';
import '../App.css';
import {FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap'


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
        userInfo: this.props.profile,
        editing: false,
        error: false
    }
}

componentWillReceiveProps(nextProps){
  this.setState({userInfo:nextProps.profile})

}
updateValue(type, e){ 
  let userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
  userInfoCopy[type] = e.target.value;
  this.setState({userInfo:userInfoCopy});
}

saveProfile(){
  var error = false;
  var propertiesToCheck = ['name','bio','login','type'];
  propertiesToCheck.forEach(function(term){
    if(this.state.userInfo[term]===''){
      error = true;
    }
  }.bind(this));
    if(!error){
      this.props.saveProfile(this.state.userInfo);
    }
  this.setState({error:error})
}

  render(){
    return(
      <div className="container">
       <Button bsStyle="primary" onClick ={() => this.setState({editing: !this.state.editing})}>{this.state.editing?'Cancel Edit':"Edit"}</Button>
       <hr/>
      
      {this.state.editing ?
       <form>
       <FormGroup>
         <ControlLabel>Name</ControlLabel>
         <FormControl
           type="text"
           className={this.state.error && this.state.userInfo.name==='' ? 'red-border' : ''}
           value={this.state.userInfo.name}
           placeholder="Enter text"
           onChange={this.updateValue.bind(this, 'name')}
         />
          <ControlLabel>Bio</ControlLabel>
         <FormControl
           type="text"
           className={this.state.error && this.state.userInfo.bio===''?'red-border':''}
           value={this.state.userInfo.bio}
           placeholder="Enter text"
           onChange={this.updateValue.bind(this, 'bio')}
         />
          <ControlLabel>Login</ControlLabel>
         <FormControl
           type="text"
           className={this.state.error && this.state.userInfo.login===''?'red-border':''}
           value={this.state.userInfo.login}
           placeholder="Enter text"
           onChange={this.updateValue.bind(this, 'login')}
         />
          <ControlLabel>Type</ControlLabel>
         <FormControl
           type="text"
           className={this.state.error && this.state.userInfo.type===''?'red-border':''}
           value={this.state.userInfo.type}
           placeholder="Enter text"
           onChange={this.updateValue.bind(this, 'type')}
         />
         <Button bsStyle="info" onClick={this.saveProfile.bind(this)}>Save</Button>
        
       </FormGroup>
     </form>
        :
        <div>
          <p><strong>Name:</strong> {this.state.userInfo.name}</p>
          <p><strong>Bio:</strong> {this.state.userInfo.bio}</p>
          <p><strong>Login:</strong> {this.state.userInfo.login}</p>
          <p><strong>Type:</strong> {this.state.userInfo.type}</p>
        </div>
      }
      </div>
    );
  }
}

export default Profile;

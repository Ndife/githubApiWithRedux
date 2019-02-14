import React, { Component } from 'react';
import '../App.css';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import SliderComponent from '../containers/slider';
import Profile from '../containers/profile';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      currentTab: 'profile'
    }
  }

  componentDidMount(){
    this.props.fetchProfile();
  }
  
  render() {
    return (
      <div className="">
        <Navbar style={{backgroundColor:'#3C4146'}} staticTop collapseOnSelect>
          <Navbar.Header>
          <Navbar.Brand>
            <a href ='#e' onClick={() => this.setState({currentTab:'slider'})}>My Github Profile</a>
          </Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav pullRight>
          <Nav>
              <NavItem eventKey={1} href="#"  onClick = {() => this.setState({currentTab:'profile'})}>
                Profile <span className="glyphicon glyphicon-align-center" aria-hidden="true"></span>
              </NavItem>
              <NavItem eventKey={2} href="#" onClick ={( () => this.setState({currentTab:'slider'}))}>
                Slider <span className="glyphicon glyphicon-blackboard" ></span>
              </NavItem>
              <NavDropdown eventKey={3} title="Department" id="nav-dropdown" >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
              </NavDropdown>
          </Nav>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        {this.state.currentTab === 'profile'?<Profile /> :false}
        {this.state.currentTab === 'slider'? <SliderComponent />: false}

      </div>
    );
  }
}

export default App;

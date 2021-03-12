import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      bviewInventory:false,
      bviewForm: false
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  ViewInventory = () =>{
    this.setState({
      bviewInventory: true,
      bviewForm: false
    })

    console.log("hello");
    console.log(this.state.bviewInventory);
  }

  ViewForm = () => {
    this.setState({
      bviewInventory: false,
      bviewForm: true
    })

    console.log("hello");
    console.log(this.state.bviewInventory);
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Car-Dealership</NavbarBrand>
            {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" /> */}
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark"  onClick={this.ViewInventory} to="/Inventory">View Inventory</NavLink>
                </NavItem>
                 <NavItem>
                  <NavLink tag={Link} className="text-dark"  onClick={this.ViewForm} to = "/Inventory">Sell Vehicle</NavLink>
                </NavItem> 
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/ViewUsers">View/Edit Users</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

import React from "react";
import { Navbar, Nav, NavItem, Input, Button, NavbarBrand } from "reactstrap";
import SearchIcon from "@mui/icons-material/Search";

function NavigationBar(props) {
  return (
    <Navbar color="dark text-primary all-center " id="nav-bar">
      <Nav nav>
        <NavItem
          className="all-center"
          onClick={() => {
            props.toggleProfileInsight(!props.profileInsight);
          }}
        >
          <div id="nav-profile-pic" className="bg-primary" />
          <div id="nav-public-address" className="bg-primary p-2 text-white">
            {props.userDetails.username}
          </div>
        </NavItem>
      </Nav>
      <NavbarBrand className="text-tertiary all-center ">
        <h1>GeNFT</h1>
      </NavbarBrand>
      <Nav nav>
        <NavItem
          className="bg-dark border border-tertiary rounded-pill all-center"
          id="nav-search-box"
        >
          <div className="col-10">
            <Input
              outline="false"
              className="bg-dark text-tertiary rounded-pill col-10"
              id="nav-input-search-box"
            />
          </div>

          <Button color="tertiary" className="col-2 rounded-pill all-center">
            <SearchIcon />
          </Button>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;

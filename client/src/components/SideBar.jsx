import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import { SlNotebook } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { PiExam } from "react-icons/pi";
import { CiVideoOn } from "react-icons/ci";
import { IoLibraryOutline } from "react-icons/io5";


function SideBar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = (expanded) => {
    setIsExpanded(expanded);
  };

  return (
    <>
      <SideNav
        className="sidebar"
        expanded={isExpanded}
        onToggle={handleToggle}
      >
        {/* <SideNav.Toggle className="collapse-btn" /> */}

        <SideNav.Toggle className="collapse-btn" />
        <SideNav.Nav defaultSelected="teach">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
              <GrHomeRounded
                style={{ fontSize: 22, marginBottom: 11, color: "black" }}
              />
            </NavIcon>
            <NavText>
              <NavLink className="sidebar-text" to="/teach">
                Dashboard
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="teach">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
              <GiTeacher
                style={{ fontSize: 22, marginBottom: 11, color: "black" }}
              />
            </NavIcon>
            <NavText>
              <NavLink className="sidebar-text" to="/teach">
                Teach
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="test">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
              <PiExam
                style={{ fontSize: 22, marginBottom: 11, color: "black" }}
              />
            </NavIcon>
            <NavText>
              <NavLink className="sidebar-text" to="/teach">
                Test
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="videomeet">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
              <CiVideoOn
                style={{ fontSize: 22, marginBottom: 11, color: "black" }}
              />
            </NavIcon>
            <NavText>
              <NavLink className="sidebar-text" to="/teach">
                VideoMeet
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="library">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
              <IoLibraryOutline
                style={{ fontSize: 22, marginBottom: 11, color: "black" }}
              />
            </NavIcon>
            <NavText>
              <NavLink className="sidebar-text" to="/teach">
                Library
              </NavLink>
            </NavText>
          </NavItem>
        </SideNav.Nav>

        <SideNav.Nav style={{ position: "absolute", bottom: 0 }}>
          <NavItem className="checking" eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
              <CgProfile
                style={{ fontSize: 25, marginBottom: 11, color: "black" }}
              />
            </NavIcon>
            <NavText>
              <NavLink className="sidebar-text" to="/teach">
                Madhvesh Chokshi
              </NavLink>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>

      <Nav
        className="mobile-nav"
        justify
        variant="tabs"
        defaultActiveKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/teach">
      
            <GrHomeRounded
              style={{ fontSize: 20, marginBottom: 11, color: "black" }}
            />
        
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/teach">
            <GiTeacher
              style={{ fontSize: 20, marginBottom: 11, color: "black" }}
            />
        
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/teach">
            <PiExam
              style={{ fontSize: 20, marginBottom: 11, color: "black" }}
            />
         
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/teach" disabled>
            <CiVideoOn
              style={{ fontSize: 20, marginBottom: 11, color: "black" }}
            />
          
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/teach" disabled>
          <IoLibraryOutline
                style={{ fontSize: 20, marginBottom: 11, color: "black" }}
              />
           
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default SideBar;

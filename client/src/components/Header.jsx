import React, { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
function Header({ head }) {
  const [activeLink, setActiveLink] = useState("Teach");
  const navigate = useNavigate();

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <>
      <div className="header">
        <ul className="header-ul">
          <div className="header-chapter">
            <SlArrowLeft
              onClick={() => navigate("/teach")}
              style={{
                fontSize: 20,
                fontWeight: "bolder",
                cursor: "pointer",
                marginRight: 15,
              }}
            />
            <h4>{head}</h4>
          </div>
          <div className="middle-nav">
            <li
              onClick={() => handleLinkClick("Teach")}
              className={"Teach" === activeLink ? "active" : "inactive"}
            >
              Teach
            </li>
            <li
              onClick={() => handleLinkClick("Workshop")}
              className={"Workshop" === activeLink ? "active" : "inactive"}
            >
              Works
            </li>
            <li
              onClick={() => handleLinkClick("Mind Map")}
              className={"Mind Map" === activeLink ? "active" : "inactive"}
            >
              MindMap
            </li>
          </div>
          <div className="right-icons">
            <CiSearch className="nav-icons" style={{ cursor: "pointer" }} />
            <IoMdDownload className="nav-icons" style={{ cursor: "pointer" }} />
            <FaShareAlt className="nav-icons" style={{ cursor: "pointer" }} />
          </div>
        </ul>
      </div>

      <div className="header-mobile">
        <div className="header-main">
          <div className="header-chapter">
            <SlArrowLeft
              onClick={() => navigate("/teach")}
              style={{
                fontSize: 20,
                fontWeight: "bolder",
                cursor: "pointer",
                marginRight: 15,
              }}
            />
            <h4>{head}</h4>
            <div className="right-icons">
              <CiSearch className="nav-icons" style={{ cursor: "pointer" }} />
              <IoMdDownload
                className="nav-icons"
                style={{ cursor: "pointer" }}
              />
              <FaShareAlt className="nav-icons" style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="header-lower"><div className="middle-nav">
            <li
              onClick={() => handleLinkClick("Teach")}
              className={"Teach" === activeLink ? "active" : "inactive"}
            >
              Teach
            </li>
            <li
              onClick={() => handleLinkClick("Workshop")}
              className={"Workshop" === activeLink ? "active" : "inactive"}
            >
              Works
            </li>
            <li
              onClick={() => handleLinkClick("Mind Map")}
              className={"Mind Map" === activeLink ? "active" : "inactive"}
            >
              MindMap
            </li>
          </div></div>
        </div>
      </div>
    </>
  );
}

export default Header;

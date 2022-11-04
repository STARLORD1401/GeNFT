import React, { useState } from "react";
import { Button, Collapse, ListGroup, ListGroupItem } from "reactstrap";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ShareIcon from "@mui/icons-material/Share";
import Person4Icon from "@mui/icons-material/Person4";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import QR from "../assets/qr.png";
import bg2 from "../assets/bg-2.png";

function ProfileInsight(props) {
  const [showQR, toggleShowQR] = useState(false);
  const navigate = useNavigate();
  return (
    //A collapsible modal
    <Collapse
      isOpen={props.isOpen}
      id="profile-insight"
      className="bg-dark all-center justify-content-start flex-column p-2"
    >
      <div className="all-center flex-column text-white justify-content-start">
        {/* Profile Banner  */}
        <img
          src={bg2}
          style={{
            height: "30vh",
            width: "28vw",
            borderRadius: "20px",
            position: "relative",
          }}
          alt="banner"
        />
        <div
          id="profile-insight-banner"
          className="all-center flex-column justify-content-start"
          style={{
            position: "absolute",
          }}
        >
          <div className=" all-center align-items-start p-2 w-100">
            {/* QR Code Toggle Button  */}
            <Button
              className="text-primary col-4 "
              color="dark"
              style={{ borderRadius: "50%", height: "50px", width: "50px" }}
              onClick={() => {
                toggleShowQR(!showQR);
              }}
            >
              {showQR ? <CloseIcon /> : <QrCodeScannerIcon />}
            </Button>
            <span className="col-8 " />
            {/* Share Button  */}
            <Button
              className=" text-primary col-4 "
              color="dark"
              style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            >
              <ShareIcon />
            </Button>
          </div>
          {/* Toggle between Profile Picture and QR Code  */}
          {showQR ? (
            <img
              className="bg-white p-2"
              alt="qr"
              src={QR}
              style={{ height: "100px", width: "100px", borderRadius: "20px" }}
            />
          ) : (
            <div
              className="bg-white"
              style={{ height: "100px", width: "100px", borderRadius: "20px" }}
            />
          )}
          <h6 className="mt-2">{props.userDetails.username}</h6>
        </div>
      </div>
      <ListGroup className="w-100 mt-3">
        {/* List of Menu Items  */}
        <ListGroupItem
          className="bg-dark text-white list-items"
          tag="a"
          href="#"
          onClick={() => {
            navigate("/profile-settings");
          }}
        >
          <Person4Icon className="me-3" />
          Profile Settings
        </ListGroupItem>
        <ListGroupItem
          className="bg-dark text-white list-items"
          tag="a"
          href="#"
        >
          <FavoriteIcon className="me-3" />
          Wishlist
        </ListGroupItem>
        <ListGroupItem
          className="bg-dark text-white list-items"
          tag="a"
          href="#"
        >
          <CollectionsBookmarkIcon className="me-3" />
          My NFT Stash
        </ListGroupItem>
        <ListGroupItem
          className="bg-dark text-white list-items"
          tag="a"
          href="#"
          onClick={() => {
            navigate("/generator");
          }}
        >
          <AutoFixHighIcon className="me-3" />
          Test Generator
        </ListGroupItem>
        <ListGroupItem
          className="bg-dark text-white list-items"
          tag="a"
          href="#"
          onClick={() => {
            props.delUser();
            navigate("/form-page");
          }}
        >
          <ExitToAppIcon className="me-3" />
          Sign Out
        </ListGroupItem>
      </ListGroup>
    </Collapse>
  );
}

export default ProfileInsight;

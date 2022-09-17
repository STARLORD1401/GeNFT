import React, { useState } from "react";
import { Button, Collapse, ListGroup, ListGroupItem } from "reactstrap";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ShareIcon from "@mui/icons-material/Share";
import Person4Icon from "@mui/icons-material/Person4";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import QR from "../assets/qr.png";

function ProfileInsight(props) {
  const [showQR, toggleShowQR] = useState(false);
  const navigate = useNavigate();
  return (
    <Collapse
      isOpen={props.isOpen}
      id="profile-insight"
      className="bg-dark all-center justify-content-start flex-column p-2"
    >
      <div
        id="profile-insight-banner"
        className="bg-primary all-center flex-column text-white justify-content-start"
      >
        <div className="w-100 all-center align-items-start p-2">
          <Button
            className="text-primary col-2 "
            color="dark"
            style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            onClick={() => {
              toggleShowQR(!showQR);
            }}
          >
            {showQR ? <CloseIcon /> : <QrCodeScannerIcon />}
          </Button>
          <span className="col-8" />
          <Button
            className=" text-primary col-2 "
            color="dark"
            style={{ borderRadius: "50%", height: "50px", width: "50px" }}
          >
            <ShareIcon />
          </Button>
        </div>

        {showQR ? (
          <img
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
        <h6 className="mt-2">0x891458.....0d224</h6>
      </div>
      <ListGroup className="w-100 mt-3">
        <ListGroupItem
          className="bg-dark text-white list-items"
          tag="a"
          href="#"
          onClick={() => {
            navigate("/user-details");
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
        >
          <ExitToAppIcon className="me-3" />
          Sign Out
        </ListGroupItem>
      </ListGroup>
    </Collapse>
  );
}

export default ProfileInsight;

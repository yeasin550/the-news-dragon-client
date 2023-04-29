import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle , FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
      <div>
        <h4>Login With</h4>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login With GitHub
        </Button>
        <div className="mt-3">
          <h4>Find Us On</h4>
          <ListGroup>
            <ListGroup.Item>
              <FaFacebook className="text-primary" /> Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter className="text-primary" /> Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram className="text-danger" /> Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
        <QZone></QZone>
        <div>
          <img src={bg} alt="" />
        </div>
      </div>
    );
};

export default RightNav;
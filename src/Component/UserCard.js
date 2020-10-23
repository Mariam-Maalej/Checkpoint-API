import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <div className="cards">
      <Card className="userCard">
        <Card.Header>{user.id}</Card.Header>
        <Card.Body>
          <Card.Title className="user-name">{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {user.username}
          </Card.Subtitle>
          {console.log(user.adress)}
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.phone}</Card.Text>
          <Card.Text>{user.website}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default UserCard;

import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const UserCard = ({ user, star }) => (
  <Card centered>
    <Image src={user.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>
        <a href={user.html_url}>{user.name}</a>
      </Card.Header>
      <Card.Meta>
        <span className="date">Joined in {user.created_at.match(/\d{4}/)}</span>
      </Card.Meta>
      <Card.Description>{user.bio}</Card.Description>
    </Card.Content>
    {user.location && (
      <Card.Content extra>
        <Icon name="home"></Icon>
        {user.location}
      </Card.Content>
    )}
    {user.company && (
      <Card.Content extra>
        <Icon name="briefcase"></Icon>
        {user.company}
      </Card.Content>
    )}
    <Card.Content extra>
      <Icon name="user" />
      {user.followers} followers
      <span>
        <Icon name="star" />
        {star} favs
      </span>
    </Card.Content>
  </Card>
);

export default UserCard;

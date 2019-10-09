import React from "react";
import { Card } from "semantic-ui-react";

const Repo = ({ repo }) => (
  <Card
    href={repo.html_url}
    header={repo.name}
    meta={repo.language}
    description={repo.description}
  />
);

export default Repo;

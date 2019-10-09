import React, { useState } from "react";
import UserCard from "./components/Card";
import Repo from "./components/Repo";
import {
  Container,
  Input,
  Button,
  Grid,
  CardGroup,
  Header
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");
  const [stars, setStars] = useState(0);
  const [userData, setUserData] = useState({});
  const [repos, setRepos] = useState([]);

  async function searchUser() {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    const responseRepo = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    const stars = await axios.get(
      `https://api.github.com/users/${user}/starred`
    );
    setUserData(response.data);
    setRepos(responseRepo.data);
    setStars(stars.data.length);
    console.log(response.data);
  }

  return (
    <Container textAlign="center">
      <Input
        className="margin"
        value={user}
        onChange={e => setUser(e.target.value)}
        icon="user"
        placeholder="Insira o usuário do GitHub"
      />
      <Button className="margin" onClick={searchUser}>
        Buscar
      </Button>
      {userData.login && <UserCard user={userData} star={stars} />}
      {!!repos.length && (
        <Grid columns={3} divided centered>
          <Header textAlign="center" as="h2">
            Repositórios
          </Header>
          <CardGroup centered>
            {repos.map(repo => {
              return <Repo key={repo.id} repo={repo} />;
            })}
          </CardGroup>
        </Grid>
      )}
    </Container>
  );
}

export default App;

import "./App.css";
import React from "react";

import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacter {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function DisplayCharacters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="contents">
      {data.characters.results.map((character) => (
        <div key={character.id} className="item">
          <p className="m-0 hx">{character.name}</p>
          <img
            alt={character.name}
            src={character.image}
            className="img-responsive"
          />
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h2 className="text-center">My first Apollo app 🚀</h2>
      <br />
      <DisplayCharacters />
    </div>
  );
}

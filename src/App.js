import './App.css';
import React from "react";

import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS= gql`
  query GetCharacter {
     characters{
        results{
           id
           name
           image
           status
        }
     }
  }
`;

function DisplayCharacters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.characters.results.map((character) => (
      <div key={character.id}>
          <p >{character.name} ------- <span>{character.status}</span></p>
          <img src={character.image}/>
      </div>
  ));
}

export default function App() {
  return (
      <div>
        <h2>My first Apollo app 🚀</h2>
        <br/>
        <DisplayCharacters/>
      </div>
  );
}

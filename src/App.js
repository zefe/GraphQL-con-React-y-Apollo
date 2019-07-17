import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const CharactersQuery = () => {
  return (
    <Query
      query={gql`
              {
                  characters {
                      results {
                          id
                          name
                      }
                  }
              }
          `}
    >

      {({ loading, error, data }) => {
        console.log(data);
        if (loading) return <span>Loading...</span>
        if (error) return <p>Error!</p>

        return data.characters.results.map(character => {
          return <div className="card"><p> {character.name} </p></div>
        })
      }}
    </Query>
  );
};

function App() {
  return (
    <div>
      <h1>Cómo usar GraphQL en React ⚛️con Apollo Client [Curso express GraphQL]</h1>
      <div className="App">
        <CharactersQuery />

      </div>
    </div>
  );
}

export default App;

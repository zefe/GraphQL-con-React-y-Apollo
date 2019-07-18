import React, { Fragment } from 'react';
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
                          image
                          species
                      }
                  }
              }
          `}
    >

      {({ loading, error, data }) => {
        console.log(data);
        if (loading) return <div className="Loading"><span>🚀 Loading...</span></div>
        if (error) return <p>Error!</p>

        return data.characters.results.map(character => {
          return (
            <div className="card">
              <img src={character.image} alt="" width="150px" height="140px" />
              <p> {character.name} </p>
              <span> {character.species} </span>
            </div>
          )
        })
      }}
    </Query>
  );
};

function App() {
  return (
    <Fragment>
      <h1>Cómo usar GraphQL en React ⚛️con Apollo Client [Curso express GraphQL]</h1>
      <div className="App">
        <CharactersQuery />
      </div>
      <h1>Created by <a href="https://zefe.website/">zefe</a></h1>
    </Fragment>
  );
}

export default App;

/**
 * @Date:   2019-11-05T15:04:06+00:00
 * @Last modified time: 2019-11-08T14:44:06+00:00
 */
import React from 'react';
import Navbar from './navbar';

const Characters = ({ characters }) => {
      return (
        <div>
        <Navbar />
        <div className = "container">
          {characters.map((character, i) => (
            character.name !== "" ?
            <div key={i} className="card">
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                  {character.gender ? <p className="card-text"><strong>Gender:</strong> {character.gender}</p> : <></>}
                  {character.culture ? <p className="card-text"><strong>Culture:</strong> {character.culture}</p> : <></>}
                  {character.born ? <p className="card-text"><strong>Date of Birth:</strong> {character.born}</p> : <></>}
                  {character.died ? <p className="card-text"><strong>Date of Death:</strong> {character.died}</p> : <></>}
                  {character.titles ? <p className="card-text"><strong>Titles:</strong> {character.titles}</p> : <></>}
                  {character.aliases ? <p className="card-text"><strong>Aliases:</strong> {character.aliases}</p> : <></>}
                  {character.father ? <p className="card-text"><strong>Father:</strong> {character.father}</p> : <></>}
                  {character.mother ? <p className="card-text"><strong>Mother:</strong> {character.mother}</p> : <></>}
                  {character.spouse ? <p className="card-text"><strong>Spouse:</strong> {character.spouse}</p> : <></>}
                  {character.allegiances ? <p className="card-text"><strong>Allegiance:</strong> {character.allegiances}</p> : <></>}
                  {character.books ? <p className="card-text"><strong>Appearences:</strong> {character.books}</p> : <></>}
                  {character.povBooks ? <p className="card-text"><strong>POV Books:</strong> {character.povBooks}</p> : <></>}
                  {character.tvSeries ? <p className="card-text"><strong>TV Series Appearences:</strong> {character.tvSeries}</p> : <></>}
                  {character.playedBy ? <p className="card-text"><strong>Played By:</strong> {character.playedBy}</p> : <></>}
              </div>
            </div>
            : ""
          ))}
        </div>
        </div>
      )
    };

export default Characters;

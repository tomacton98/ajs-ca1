/**
 * @Date:   2019-11-05T16:21:00+00:00
 * @Last modified time: 2019-11-08T14:44:36+00:00
 */
 import React from 'react';
 import Navbar from './navbar';

 const Houses = ({ houses }) => {
       return (
         <div>
         <Navbar />
         <div className = "container">
           {houses.map((house) => (
             <div className="card">
               <div className="card-body">
                 <h5 className="card-title">{house.name}</h5>
                 {house.region ? <p className="card-text"><strong>Region:</strong> {house.region}</p> : <></>}
                 {house.coatOfArms ? <p className="card-text"><strong>Coat of Arms:</strong> {house.coatOfArms}</p> : <></>}
                 {house.words ? <p className="card-text"><strong>Words:</strong> {house.words}</p> : <></>}
                 {house.titles ? <p className="card-text"><strong>Titles:</strong> {house.titles}</p> : <></>}
                 {house.seats ? <p className="card-text"><strong>Seats:</strong> {house.seats}</p> : <></>}
                 {house.currentLord ? <p className="card-text"><strong>Lord:</strong>{house.currentLord}</p> : <></>}
                 {house.heir ? <p className="card-text"><strong>Heir:</strong>{house.heir}</p> : <></>}
                 {house.overlord ? <p className="card-text"><strong>Overlord:</strong> {house.overlord}</p> : <></>}
                 {house.founded ? <p className="card-text"><strong>Founded:</strong> {house.founded}</p> : <></>}
                 {house.founder ? <p className="card-text"><strong>Founder:</strong>{house.founder}</p> : <></>}
                 {house.diedOut ? <p className="card-text"><strong>Died Out:</strong>{house.diedOut}</p> : <></>}
                 {house.ancestralWeapons ? <p className="card-text"><strong>Ancestral Weapons:</strong> {house.ancestralWeapons}</p> : <></>}
                 {house.cadetBranches ? <p className="card-text"><strong>Cadet Branches:</strong> {house.cadetBranches}</p> : <></>}
                 {house.swornMembers ? <p className="card-text"><strong>Sworn Members:</strong> {house.swornMembers}</p> : <></>}
               </div>
             </div>
           ))}
         </div>
         </div>
       )
     };

export default Houses;

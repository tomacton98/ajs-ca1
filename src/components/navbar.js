/**
 * @Date:   2019-11-07T11:11:06+00:00
 * @Last modified time: 2019-11-08T14:05:55+00:00
 */
 import React from 'react';
 import { Link } from 'react-router-dom';
 /*import axios from 'axios';*/

 /*const API_URL = 'https://www.anapioficeandfire.com/api/characters/name';*/

 class Navbar extends React.Component{
  /*} state = {
     query: '',
     characters: []
   }

   getInfo = () => {
    axios.get(`https://www.anapioficeandfire.com/api/characters/name?&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data // MusicGraph returns an object named data,
                             // as does axios. So... data.data
        })
      })
  }

   handleInputChange = () => {
     this.setState({
       query: this.search.value
     }, () => {
       if (this.state.query && this.state.query.length > 1) {
         if (this.state.query.length % 2 === 0) {
           this.getInfo()
         }
       }
     })
   } */

   render() {
     return(
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="navbar-brand nav-link">A Guide of Ice and Fire</Link>
              </li>
              <li className="nav-item">
                <Link to="/characterindex" className="nav-link">Characters</Link>
              </li>
              <li className="nav-item">
                <Link to="/houseindex" className="nav-link">Houses</Link>
              </li>
              <li className="nav-item">
                <Link to="/bookindex" className="nav-link">Books</Link>
              </li>
            </ul>
            {/*<form classname = "form">
              <input
               placeholder = "Search Character Name..."
               ref = {input => this.search = input}
               onChange = {this.handleInputChange}
               />
               <p>{this.state.query}</p>
            </form> */}
          </div>
        </nav>
     );
   }
 }

 export default Navbar;

/**
 * @Date:   2019-11-05T18:27:14+00:00
 * @Last modified time: 2019-11-08T14:35:57+00:00
 */
 import React from 'react';
 import {Link} from 'react-router-dom';
 import Navbar from './navbar'
 import BookLogo from './bookLogo.jpg'

 class Home extends React.Component{
   render() {
     return(
       <div>
       <Navbar />
       <div className = "container">
          <br/>
           <div className = "card">
           <h2>Welcome to A Guide of Ice and Fire</h2>
           <img className ="img" src={BookLogo} style={{maxWidth: 250 + "px", height: "auto", className: "center"}} alt = "Logo"/>
           <p className = "home">'A Guide of Ice and Fire' is a web-application built in React using 'An API of Ice and Fire' as an API. It offers information on characters, houses and books from George R.R. Martin's 'A Song of Ice and Fire' book series.</p>
        </div>

           <div className = "card">
              <h2>Browse</h2>
              <Link to ='/characterindex' className = "link">List of Characters</Link>
              <Link to ='/houseindex' className = "link">List of Houses</Link>
              <Link to ='/bookindex' className = "link">List of Books</Link>
           </div>
       </div>
       </div>
     );
   }
 }

 export default Home;

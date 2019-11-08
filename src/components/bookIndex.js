/**
 * @Date:   2019-11-05T17:07:35+00:00
 * @Last modified time: 2019-11-08T14:08:10+00:00
 */

 import React from 'react';
 import Books from './books';

 class BookIndex extends React.Component {
   constructor(props){
     super(props);
       this.state =
       { books: [],
         error: null,
         pageSize: 5,
         currentPage: 1
       };

       this.i = 0;
   }

   componentDidMount() {
     fetch('https://www.anapioficeandfire.com/api/books?page='+ this.state.currentPage +'&pageSize=' + this.state.pageSize)
     .then(res => res.json())
     .then(
       (data) => {
         this.setState({ books: data }, () => console.log(this.state))
       },
       (error) => this.setState({error})
     )
   }

   changePage(value){
     this.i += value;
     if(this.i <= 0){
       this.i = 1;
     }


   this.setState({currentPage: this.i}, () => {
     fetch('https://www.anapioficeandfire.com/api/books?page='+ this.state.currentPage +'&pageSize=' + this.state.pageSize)
     .then(res => res.json())
     .then(
       (data) => {
       this.setState({ books: data }, () => {console.log(this.state); console.log(this.state.currentPage);})
     },
     (error) => this.setState({error})
   )
 });

}

   render() {
     if(this.state.error) {
       return (
         <div className="container">
           {this.state.error}
         </div>
       )
     }
     else {
     return (
       <>
       <Books books={this.state.books} />
       <div className = "container">
       <button onClick={() => this.changePage(-1)}>Previous</button>
       <button onClick={() => this.changePage(1)}>Next</button>
       </div>
       </>
     )
   }
 }
}

 export default BookIndex;

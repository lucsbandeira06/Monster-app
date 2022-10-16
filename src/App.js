import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response)=> Response.json())
    .then((users)=> setMonsters(users))
  }, [])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField) 
  })

  setFilteredMonsters(newfilteredMonsters)
  }, [monsters, searchField])

  const OnsearchChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">

    <h1 className='app-Title'>Monsters Lucandyr</h1>
    <SearchBox 
      className='monsters_search-box'
      onChangeHandler={OnsearchChange} 
      placeholder ='search monsters'
    />

    <CardList monsters = {filteredMonsters} />
    </div>
  )
}

export default App;

// class App extends Component {

//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//    };
   
//   }

//   componentDidMount() {
  
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((Response)=> Response.json())
//     .then((users)=> this.setState(() => {
//       return {monsters: users}
//     }
//     ))
//   }

//   OnsearchChange = (event)=> {
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(
//     () => {
//       return {searchField};
//     },
//     )
//   }


//   render() {
   

//     const { monsters, searchField} = this.state;
//     const { OnsearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField) 
//   });

//     return (   
//       <div className="App">

//       <h1 className='app-Title'>Monsters Lucandyr</h1>
//       <SearchBox 
//         className='monsters_search-box'
//         onChangeHandler={OnsearchChange} 
//         placeholder ='search monsters'
//       />

//   <CardList monsters = {filteredMonsters} />
//     </div>
//   );
//     }
// }



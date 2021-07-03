import './App.css';
import {Component} from 'react'
import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';
const  {monstors} = require('./monstorObject')

class App extends Component {
  constructor(){
    super()
    this.state = {
      monstors: monstors,//imported monstors in line 4
      searchField: ''
    }

    // for user methods to use this referencing App class 
    // this.handleChange = this.handleChange.bind(this)
    // This binding is necessary to make `this` work in the callback

  }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(users => this.setState({monstors : users}))
  // }
  handleChange = e => {
    // in arrow fn "this" keyword is bind to where the fn is defined
    // its called lexical scoping
    this.setState({searchField: e.target.value})
  }
  render(){
    const {monstors, searchField} = this.state
    const filteredMonsters = monstors.filter(monstor => 
      monstor.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
          <h1> Monstor Rolodex!</h1>

        <SearchBox 
        placeholder="Search Monstors" 
        handleChange={this.handleChange}/>
        <CardList 
        monstors={filteredMonsters}/> 
    </div>
    )
  }
}


export default App;

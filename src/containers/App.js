import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component {
    constructor() { 
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }
    componentDidMount() {
        fetch('https://jsonfy.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange= (event) =>{
        this.setState({searchfield: event.target.value})
    }
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robo => {
            return robo.name.toLowerCase().includes(searchfield.toLowerCase())
        })
     //if bilen (robots.lengh === 0) yalinew if (!robots.length) ga ekul nw !robots.length milew kezero ga ekul kehone negate adirigeh wode true keyiew endemalet nw
     return !robots.length ?    // if statement yeneberewun wode ternary keyirenew nw 
        <h1 className='tc'>loading</h1> :
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
                </div>
    }
}


export default App;
import React from 'react';
import './App.css';
import axios from 'axios';

import Github from './components/Github';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      followers: []
    };
  }

  componentDidMount() {
    axios.all([
      axios.get('https://api.github.com/users/johngwells'),
      axios.get('https://api.github.com/users/johngwells/followers')
    ])
    .then(axios.spread((userRes, followerRes) => {
      this.setState({ users: userRes.data})
      // console.log(userRes)
      this.setState({ followers: followerRes.data})
      // console.log(followerRes)
    }))
  } 

  render() {
    return (
      <div className="App">
        {console.log('User', this.state.users)}
        {console.log('Followers', this.state.followers)}
        <Github 
          users={this.state.users} 
          followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;

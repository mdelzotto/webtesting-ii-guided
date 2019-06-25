import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Players from './players/Players';

class App extends Component {
  state = {
    greeting: '',
    players: [
      { id: 1, name: 'Sam' },
      { id: 2, name: 'Bilbo' },
      { id: 3, name: 'Frodo' }
    ]
  };

  greet = () => {
    this.setState({
      greeting: 'Hello Web Students'
    });
  };
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <Players players={this.state.players} />
        <div>
          <button onClick={this.greet}>Greet</button>
          <div>{this.state.greeting}</div>
        </div>
      </div>
    );
  }
}

//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;

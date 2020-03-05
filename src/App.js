import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <Link path="/" className="brand-logo">Kloea</Link>
            </div>
          </div>
        </nav>
        <div className="container">
          <table className="highlight">
            <tbody>
              <tr>
                <td>Taste</td>
              </tr>
              <tr>
                <td>Hiatus</td>
              </tr>
            </tbody>
          </table>
          <div class="fixed-action-btn">
            <Link class="btn-floating btn-large red waves-effect">
              <i class="large material-icons">mode_edit</i>
            </Link>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

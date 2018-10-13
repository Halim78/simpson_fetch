import React, {Component} from 'react';

class Citation extends  Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <img src={this.props.employer.image} alt="simpsons" />  
    
              <h1>{this.props.employer.character}</h1> 
              <p>{this.props.employer.quote}</p>       
              
            </header>
          </div>
        );
    }
    
};

export default Citation;
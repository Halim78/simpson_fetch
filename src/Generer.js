import  React, {Component}  from  'react';

class Generer extends Component {
    render() {
        return (
            <div  className="GenerateCitation">
            <button onClick={this.props.obtenir}><h2>Changer</h2></button>
            </div>
        );
    }
    
}

export  default  Generer;
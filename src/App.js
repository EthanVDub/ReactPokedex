import React, { Component } from 'react';
import './App.css';






class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon : props.pokemon,
      id : props.id,
      type : "",
      type2 : "",
      sprite : "",
      ability: "",
      name : props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.substr(1),
    }
  }
  
  componentWillMount(){
    this.setState({
      loading: true,
    });

    fetch(this.state.pokemon.url)
    .then(res=>res.json())
    .then(data =>{ 
      if(typeof data.types[1] !== 'undefined') {
        this.setState({
          type: data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.substr(1),
          type2: data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.substr(1),
          sprite: data.sprites.front_default,
          ability: data.abilities[0].ability.name,
        })
      } else {
        this.setState({
          type: data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.substr(1) ,
          sprite: data.sprites.front_default,
          ability: data.abilities[0].ability.name,
        })
      }
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="card">
        <div className = "front">
          <div className="icon"><img width="40%" height="40%" alt={this.state.name} src={this.state.sprite} /></div>
          <div className="cardTitle"><h3>{this.state.name}</h3></div>
          <div className="cardContent"><h4>
            {this.state.type}  {this.state.type2 ?  this.state.type2 : null}</h4></div>
          </div>
        <div className="back"><p>Ability: {this.state.ability} </p></div>
      </div>
    )
  }
}

class PokeDex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poke : [],
      loading : false,
      fetch : false,
    };
  }



  componentWillMount(){
    this.setState({
      loading: true,
    });

    fetch(`http://pokeapi.co/api/v2/pokemon?limit=649`)
    .then(res=>res.json())
    .then(response =>{ 
      this.setState({
        poke : response.results,
        loading : true,
        fetch : true,
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    let results;
    const {fetch, loading, poke} = this.state
    if(fetch) {
      results =
      <div className = "row">
      {poke.map((pokemon, index)=>
      <div className="col-lg-3">
      <Card
        key={pokemon.name}
        id={index + 1}
        pokemon = {pokemon}
       />
       </div>
      )} </div> 
    } else if (loading && !fetch) {
      results = <p> Loading </p>
    } else {
      results = <div/>
    }
    return <div>{results}</div>;
  }

}


class App extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="header">
        <h1>Pokedex</h1>
        <p>-Made with ReactJS-</p>
        </div>
        <div className="container">
          <PokeDex />
        </div>
      </div>
    );
  }
}

export default App;
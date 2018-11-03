import React, { Component } from 'react';
import Cards from "./components/Cards/Cards.js";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer"
import cards from "./cards.json";
import './App.css';

class App extends Component {
  state = {
    cards,
    scores: 0,
    highscores: 0
  }
  suffle=cards=>{
    var j, x, i;
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cards[i];
        cards[i] = cards[j];
        cards[j] = x;
    }
    return cards;
  }

  handleClicked = (click,id) => {
    console.log(click)
    let { cards, scores, highscores} = this.state;
    console.log(cards)
    console.log(scores)
    
    if(click==="true"){
      if(scores>highscores){
        highscores=scores
        console.log(highscores)
      }
      for(var i=0;i<cards.length;i++){
        cards[i].clicked="false";
      }
      scores=0;
      console.log("clicked")
    }
    else{
      cards[id].clicked="true"
      scores++;
      console.log("nonclicked")
    }
    cards=this.suffle(cards);
    this.setState({cards, scores, highscores});
  }


  render() {
    return (
      <div>
        <Header state={this.state}
        ></Header>
        <Container>
          {this.state.cards.map(card => (<Cards
            key={card.id}
            handleClicked={this.handleClicked}
            id={card.id}
            name={card.name}
            image={card.image}
            clicked={card.clicked}
          />
          ))
          }
        </Container>
        <Footer></Footer>
      </div>

    );
  }
}

export default App;

import React from 'react';
import Board from './Board';
import Card from './Card';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import FadeAndSlideTransition from './FadeAndSlideTransition';

export default class CardList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cards: []
    }

    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.removeLastCard = this.removeLastCard.bind(this)
  }

  render () {
    const {cards} = this.state

    return (
      <main className="container">
        <button onClick={this.addCard}>Add a card</button>
        <button onClick={this.removeLastCard}>Remove a card</button>
        <TransitionGroup component={Board}>
          {
            cards.map(card => {
              return (
                <FadeAndSlideTransition duration={450} key={card.id}>
                <li className="board__item">
                  <Card onRemove={() => {
                    this.removeCard(card.id)
                  }}>{card.content}</Card>
                </li>
                </FadeAndSlideTransition>
              )
            })
          }
        </TransitionGroup>
      </main>
    )
  }

  addCard () {
    const {cards} = this.state
    const id = cards.length + 1
    const newCard = {
      id,
      content: `Card ${id}`
    }
    this.setState({
      cards: cards.concat([newCard])
    })
  }

  removeCard (id) {
    const {cards} = this.state
    this.setState({
      cards: cards.filter(card => card.id !== id)
    })
  }

  removeLastCard () {
    const {cards} = this.state
    this.setState({
      cards: cards.slice(0, -1)
    })
  }
} 
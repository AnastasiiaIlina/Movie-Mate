import React, { Component } from 'react';
import MovieCard from '../MovieCard';
import './styles.css';


export default class MovieCardsList extends Component {


  render() {
    const { movieCards, onTodoClick } = this.props;

    return (

        <div className="App__cards-container">
           {movieCards.map(item=> <MovieCard 
                key = {item.id}
                cardTitle = {item.inp} 
                cardDesc = { item.textarea } 
                cardRating = {item.select}  
                onClick = { () => onTodoClick(item.id) }
              /> )} 
        </div>
    );
  }
 }
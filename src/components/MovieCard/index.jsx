import React, { Component } from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';

import './styles.css';

export default class MovieCard extends Component {

    static propTypes = {
        onClick: PropTypes.func,
    }

    static defaultProps = {
        onClick: () => {}
    }

  render() {

    const { cardTitle, cardDesc, cardRating,  onClick } = this.props;


    return (
        <div className="MovieCard">
            <h2 className="MovieCard__title"> { cardTitle } </h2>
            
            <Button btnText = {'delete'} onClick = { onClick }/>

            <p className="MovieCard__text">{ cardDesc }</p>
            <p className="MovieCard__rating">Rating: <span>{ cardRating }</span> / 10</p>

            <div className="MovieCard__genre">

            </div> 

            

         
        </div>
    );
  }
}

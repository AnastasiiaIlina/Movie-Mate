import React, { Component } from 'react';
import Header from '../Header';
import Form from '../Form';
import MovieCardsList from '../MovieCardsList';
import v4 from 'uuid/v4'
import './App.css';

class App extends Component {
  state = {
    movieCards: []
      
  };


  // ----------fetch---------------------

  handleFormSubmit = (query) => {
    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`, {
        headers: new Headers({
            Authorization: '563492ad6f91700001000001845b939d393843c869341924558835be'
        })
    })
        .then(response => {
            if(response.ok) {
                return response.json();
            };

            throw new Error('Error while fetching ' + response.statusText);
        })
        .then(data => {

            const images = data.photos.map(photo => ({
                id: photo.id,
                img: photo.src.medium,
                author: photo.photographer
            }));

          
            this.setState({
                galleryItems: images
            })
            console.log(data)
        })
        .catch(err => console.log(err));
}

  // ----------end fetch---------------------

  onAddTodo = (el, t, a) => {
 
    const movieCardItem = {
      id: v4(),
      inp: el,
      textarea:  t,
      select: a,
    };

    this.setState({
      movieCards: [...this.state.movieCards, movieCardItem]
    })

  };

  onDeleteTodo = id => {
  
    this.setState({
      movieCards: this.state.movieCards.filter(item => item.id !== id)
    });
  };


  render() {
    const { movieCards } = this.state;

    return (
      <div className="App">
        <Header />
        <main>

          <MovieCardsList  movieCards = { movieCards } onTodoClick = { this.onDeleteTodo } />
             
          <Form onFormSubmit = { this.onAddTodo }/>

        </main>
      </div>
    );
  }
}

export default App;

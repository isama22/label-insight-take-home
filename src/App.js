import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { getAllPhotos } from './services/json-api';
import Photo from './components/Photo'
import GalleryPage from './pages/GalleryPage/GalleryPage';

class App extends Component {
  
  state = {
    photos: []
  };

  getPhoto = (idx) => {
    return this.state.photos[idx];
  }

  async componentDidMount() {
    const foundPhotos = await getAllPhotos()
    this.setState({
      photos: foundPhotos
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">photos</header>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => 
              <section>
                {this.state.photos.map((photo, idx) => 
                  <Link to={`/photos/${idx}`} key={photo.title}>
                    <div className="ship"><Photo photoData={photo}/></div>
                  </Link>
                )}
              </section>
            }/>
            <Route path='/starships/:idx' render={(props) => 
              <GalleryPage
                {...props}
                getPhoto={this.getPhoto}
              />
            }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
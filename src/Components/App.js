import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import { getPhoto } from '../services/ApiServices';
import ImageGallery from './imageGallery/ImageGallery';

class App extends Component {
  state = {
    find: '',
    gallery: [],
    page: 1,
    total: 0,
    largeImageURL: {},
    error: null,
    showModal: false,
    isLoading: false,
  };

  makeGallery = () => {
    const { find, page } = this.state;
    this.setState({ isLoading: true });

    getPhoto(find, page)
      .then(({ hits, total }) => {
        console.log('hit', hits);
        this.setState(prevState => ({
          gallery: [...hits],
          page: prevState.page + 1,
          total,
        }));
        this.scroll();
        console.log('state', this.state.gallery);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.find !== this.state.find) {
      this.makeGallery();
    }
  }

  onFormSubmit = find => {
    this.setState({ find });
    // this.makeGallery();
  };

  // makeGallery = () => {
  //   const { find, page } = this.state;
  //   getPhoto(find, page)
  //     .then(res => console.log('res', res))
  //     .then(res => {
  //       this.setState(prevState => ({
  //         gallery: [...prevState.gallery, res.hits],
  //       }));
  //     });
  // };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  showBtnLoadMore = () => {
    return Math.ceil(this.state.total / 12) !== this.state.page - 1;
  };

  onPictureOpen = largeImage => {
    this.setState({ largeImageURL: largeImage });
    this.toggleModal();
  };

  render() {
    // const images = getPhoto('war', 1).then(res => {
    //   return res;
    // });
    // console.log(images);
    const { gallery } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
        {console.log('render', gallery)}
        {gallery.length !== 0 && (
          <ImageGallery gallery={gallery} openImg={this.onPictureOpen} />
        )}
      </>
    );
  }
}

export default App;

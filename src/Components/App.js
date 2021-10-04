import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import { getPhoto } from '../services/ApiServices';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';
import Button from './button/Button';
import Loader from '../loader/Loader';

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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.find !== this.state.find) {
      this.setState({ gallery: [] });
      this.makeGallery();
      return;
    }
    // if (prevState.find === this.state.find) {
    //   this.makeGallery();
    // }
  }

  makeGallery = () => {
    const { find, page } = this.state;
    this.setState({ isLoading: true });

    getPhoto(find, page)
      .then(({ hits, total }) => {
        console.log('hit', hits);
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
          total,
        }));
        this.scroll();
        console.log('state', this.state.gallery);
        if (total === 0) {
          alert('There are no pictures');
        }
      })
      .catch(error => alert(error.message))
      .finally(() => this.setState({ isLoading: false }));
  };

  onFormSubmit = find => {
    this.setState({ find });
    // this.makeGallery();
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
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
    const { gallery, showModal, largeImageURL, isLoading, total } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />

        {console.log('render', gallery)}
        {gallery.length !== 0 && (
          <ImageGallery gallery={gallery} onPictureOpen={this.onPictureOpen} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal} largeImage={largeImageURL} />
        )}
        {isLoading && <Loader />}
        {this.showBtnLoadMore() && total !== 0 && (
          <Button getPhoto={this.makeGallery} />
        )}
      </>
    );
  }
}

export default App;

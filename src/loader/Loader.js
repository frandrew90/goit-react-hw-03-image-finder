import React from 'react';
import Loader from 'react-loader-spinner';

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={70}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}

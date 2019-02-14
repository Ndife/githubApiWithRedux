import React, { Component } from 'react';
import '../App.css';
import Slider from "react-slick";



class SliderComponent extends Component {

  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

    return (
      <div >
      <p>this is the slider page</p>
      <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>{this.props.profile.name}</h3></div>
          <div><img src={this.props.profile.avatar_url} alt={this.props.profile.name}/></div>
          <div><h3>{this.props.profile.bio}</h3></div>
          <div><h3>{this.props.profile.login}</h3></div>
          <div><h3>{this.props.profile.type}</h3></div>

        </Slider>
      </div>
    );
  }
}

export default SliderComponent 
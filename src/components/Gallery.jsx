import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as axios from 'axios';
import { Link } from 'react-router-dom';
import { getImages } from '../redux/gallery.jsx'
import Dropdown from './Dropdown.jsx'
import './Gallery.sass'


class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridStyle: 'bigGalleryContainer'

    }
    this.setGridStyle = this.setGridStyle.bind(this);
    axios
      .get('https://boiling-refuge-66454.herokuapp.com/images')
      .then(res => {
        if (res.data) {
          this.props.setGallery(res.data)
        } else {
          alert('error')
        }
      })
      .catch(error => alert(error));
  }
  setGridStyle(gridId) {
    switch (gridId) {
      case 1:
        this.setState({gridStyle: 'bigGalleryContainer'});
        break;
      case 2:
        this.setState({gridStyle: 'middleGalleryContainer'});
        break;
      case 3:
        this.setState({gridStyle: 'smallGalleryContainer'});
        break;
      default:
        return;
    }
  }

render() {
  const gallery = Object.values(this.props.images)

  return (
    <>
    <Dropdown gridId={this.setGridStyle}/>
    <div className={this.state.gridStyle}>
      {
        gallery.map(item => (
          <Link key={item.id} to={`/${item.id}`}>
            <img  className='galleryItem' alt='allImages' src={item.url}></img>
          </Link>
        ))
      }
    </div>
    </>
    )
}
}

let mapStateToProps = (state) => {
  return {
    images: state.gallery.images
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setGallery: (images) => {
      dispatch(getImages(images))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);



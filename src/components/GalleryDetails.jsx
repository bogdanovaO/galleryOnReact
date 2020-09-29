import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { getImagesItem, updateNewPostText, addNewPostText } from '../redux/gallery.jsx';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import './Gallery.sass'
import Button from '@material-ui/core/Button';

class GalleryDetails extends Component {
  constructor(props) {
    super(props)
    axios
      .get('https://boiling-refuge-66454.herokuapp.com/images' + this.props.match.url)
      .then(res => {
        if (res.data) {
          props.setGalleryItem(res.data.url, res.data.comments)
        } else {
          alert('error')
        }
      })
      .catch(error => alert(error));
  }
  render() {
    const galleryItem = this.props.imageUrl
    const galleryComments = this.props.imageComments
    let newPostText = this.props.newPostText
    let newPost = React.createRef();
    const updateComment = this.props.updateComment
    let changePost = () => {
      let comment = newPost.current.value;
      updateComment(comment)
    }

    let addComment = this.props.addComment
    console.log(newPostText)
    return (
      <div className='detailContainer'>
        {/* <div className='galleryDetail'> */}
          <img className='detailContainer__img' src={galleryItem} alt='img' />
          <div className='form'>
          <Form.Control
            className='form__input'
            ref={newPost}
            onChange={changePost}
            value={this.props.newPostText}
            rows="3" />
          <Button variant="outlined"  size="small"  color="primary" 
            className='form__button'
            onClick={addComment}>
            отправить
        </Button>
          </div>
          <div className='comments'>
          {
            galleryComments.map(item => (
              <div className='comments__item'>{item.text}</div>
            ))
          }
          </div>
        </div>


    )
  }
}

const mapStateToProps = (state) => {
  return {
    imageUrl: state.gallery.imageUrl,
    imageComments: state.gallery.imageComments,
    newPostText: state.gallery.newPostText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setGalleryItem: (imageUrl, imageComments) => {
      dispatch(getImagesItem(imageUrl, imageComments))
    },
    updateComment: (comment) => {
      dispatch(updateNewPostText(comment))
    },
    addComment: (comment) => {
      dispatch(addNewPostText(comment))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GalleryDetails);

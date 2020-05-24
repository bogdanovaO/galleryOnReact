const GET_IMAGES_DATA = "GET_IMAGES_DATA"
const GET_IMAGES_ITEM = 'GET_IMAGES_ITEM'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD__NEW_POST_TEXT = 'ADD__NEW_POST_TEXT'

let initialState = {
  images: [],
  imageUrl: [],
  imageComments: [],
  newPostText: ''
}

const gallery  =  (state = initialState, action) => {
  switch(action.type) {
    case 'GET_IMAGES_DATA': {
      return {
        ...state,
        images: action.images
      };
    }
    case 'GET_IMAGES_ITEM': {
      return {
        ...state,
        imageUrl: action.imageUrl,
        imageComments: action.imageComments
      };
    }
    case 'UPDATE_NEW_POST_TEXT': {
      return {
  
        ...state,
        newPostText: action.comment
      };
    }
    case 'ADD__NEW_POST_TEXT': {
      let comment  = {
        id: 156, 
        text: state.newPostText, 
        date: 1578054737927
      }
      return {
        ...state,
        imageComments: [...state.imageComments, comment],
        newPostText: ''
      };
    }
    default:
      return state;
  }
}


export const getImages = (images) => ({
  type: 'GET_IMAGES_DATA', images
});
export const getImagesItem = (imageUrl, imageComments) => ({
  type: 'GET_IMAGES_ITEM', imageUrl, imageComments
});
export const updateNewPostText = (comment) => ({
  type: 'UPDATE_NEW_POST_TEXT', comment
});
export const addNewPostText = (comment) => ({
  type: 'ADD__NEW_POST_TEXT', comment
});

export default gallery;
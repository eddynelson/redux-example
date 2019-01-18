import { GET_POST, NEW_POST } from './types'

export const getPost = () => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(posts => dispatch({
      type: GET_POST, 
      payload: posts 
    }))
}

export const addPost = (post) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(newPost => dispatch({
    type: NEW_POST,
    payload: newPost
  }))
}

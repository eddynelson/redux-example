import React from 'react'
import propTypes from 'prop-types'

import './styles/post.css'

const Post = (props) => (
  <div className="post">
    <h3>{props.title}</h3>
    <p>{props.body}</p>
  </div>
)

Post.propTypes = {
  title: propTypes.string,
  body: propTypes.string
}

export default Post


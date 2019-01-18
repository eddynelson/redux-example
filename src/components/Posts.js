import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPost } from '../actions/postActions'

import Post from './Post'

class Posts extends Component{

  componentDidMount(){
    this.props.getPost()
  }

  render(){
    return (
      <div className="posts">

        {
          this.props.posts.items.length 
          ?
          this.props.posts.items.map((post, i) => {
            return (
              <Post
                key={i}
                {...post}
              />
            )
          })
          :
          <h1>Loading...</h1>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts
  }
}

const mapDipatchToProps = { getPost }

export default connect(mapStateToProps, mapDipatchToProps)(Posts)
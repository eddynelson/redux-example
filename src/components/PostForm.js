import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addPost } from '../actions/postActions'

class PostForm extends Component{
  state = {
    title: '',
    body: ''
  }

  handleChange = event => {
    const target = event.target

    this.setState(() => ({
      [target.name]: target.value
    }))
  }

  handleSubmit = async event => {
    event.preventDefault()

    this.props.addPost(this.state)
  }
  render(){
    return (
      <div className="post-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label><br />
            <input 
              type="text"
              onChange={this.handleChange}
              name="title"
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body: </label><br />
            <textarea 
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
          </div>
          <br />
          <input type="submit" text="Public" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = { addPost }

export default connect(null, mapDispatchToProps)(PostForm)
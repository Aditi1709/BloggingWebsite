import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import './Title.css'

class Title extends Component {
    constructor(props){
        super(props)
        this.state = {text: ''}
        this.handleChange = this.handleChange.bind(this)
    }
    modules= {
        toolbar:false
    }
    format ={
        
    }
    handleChange(value) {
        this.setState({ text: value })
      }
    render() {
        return (
            <div>
            <ReactQuill theme="snow" placeholder="Title..." modules={this.modules} value={this.state.text} onChange={this.handleChange} >
            <div className="titlearea"></div>
            </ReactQuill>
            </div>
        );
    }
}

export default Title;
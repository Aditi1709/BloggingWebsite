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

    shouldComponentUpdate(prevState, newState){
        return prevState === newState
    }

    handleChange(value) {
        this.setState({ text: value })
        // console.log(this.state.text)
        // console.log(e.target.value)
      }
    render() {
        return (
            <div className="title">
                <ReactQuill theme="snow" placeholder="Title..."  modules={this.modules} value={this.state.text} onChange={this.handleChange} >
                    <div className="titlearea"></div>
                </ReactQuill>
            </div>
        );
    }
}

export default Title;
import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import './TextEditor.css'

class TextEditor extends Component {
    constructor(props){
        super(props)
        this.state = {text: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    shouldComponentUpdate(prevState, newState){
        return prevState === newState
    }

    modules={
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'},{'align': []}],
            ['link', 'image', 'video'],
            ['clean']
          ],
    }
    handleChange(value) {
        this.setState({ text: value })
        // console.log(this.state.text)
      }
    render() {
        return (
            <div className="editor">
                <ReactQuill  theme="snow" placeholder="Enter story..." modules={this.modules} value={this.state.text} onChange={this.handleChange} >
                    <div className="editingarea"/>
                </ReactQuill>
            </div>
        );
    }
}

export default TextEditor;
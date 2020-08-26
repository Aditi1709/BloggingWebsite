import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import './css/TextEditor.css'
import Modal from 'react-modal';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router , Switch, Route,Link} from 'react-router-dom';
import parser from "html-react-parser";
import { Grid,Box,Button, ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import SaveIcon from '@material-ui/icons/Save';


class TextEditor extends Component {
    constructor(props){
        super(props)
        this.state = {text: '',title:'',modalIsOpen:false}
        this.handleChange = this.handleChange.bind(this)
        this.setTitle = this.setTitle.bind(this)
    }
    modules={
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']
          ],
    }
    handleChange(value) {
        this.setState({ text: value })
      }
    setTitle(event){
        this.setState({ title : event.target.value});
    }
    setModalIsClose(){
        this.setState({modalIsOpen:false});
    }
    setModalIsOpen(){
        this.setState({modalIsOpen:true});
    }
    componentDidMount(){
        const input = document.querySelector('input[data-link]')
        input.dataset.link = 'https://google.co.in'
    }
    // const [modalIsOpen, setModalIsOpen] = useState(false)
    render() {
        return (
            <div>
                <Container>
                    <Box className="editblog" display="flex" justifyContent="space-between">
                        <Grid>
                    <div className="title">
                        <h3>Title</h3>
                        <input type="text" value={this.state.title} onChange={this.setTitle}></input>
                    </div>
                    <center>
                    <div className="story">
                    <ReactQuill theme="snow" placeholder="Enter story..." modules={this.modules} value={this.state.text} onChange={this.handleChange} >
                        <div className="editingarea"/>
                    </ReactQuill>
                    </div>
                    </center>
                            <Button variant="contained" color="primary" className="preview" onClick={() => this.setModalIsOpen()}>Preview</Button>
                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <Button variant="contained" color="primary" className="submit" startIcon={<SaveIcon/>}>Submit</Button>
                        <Modal isOpen={this.state.modalIsOpen} onRequestClose={()=> this.setModalIsClose() }>
                            <h2>{this.state.title}</h2>
                            <p>{parser(this.state.text)}</p>
                        </Modal>
                    {/* <PreviewOrSubmit/>
                    <PopupModal title={this.state.title} text={parser(this.state.text)} modalOpen={this.state.modalIsOpen} /> */}
                    </Grid>
                    {/* <Grid xs={12} md={3}>
                        <Notes/>
                        <Tags/>
                    </Grid> */}
                    </Box>
                </Container>
            </div>
        );
    }
}
// function PreviewOrSubmit(){
//     return(
//         <div>
//     <button onClick={() => this.setModalIsOpen()}>Preview</button>
//     <Link to="/profile"><button>Submit</button></Link>
//     </div>
//     );
// }
// function PopupModal(props){
//     return(
//         <div>
//             <Modal isOpen={props.modalIsOpen} onRequestClose={()=> this.setModalIsClose() }>
//                         <h2>{props.title}</h2>
//                         <p>{props.text}</p>
//             </Modal>
//         </div>
//     )
// }
export default TextEditor;
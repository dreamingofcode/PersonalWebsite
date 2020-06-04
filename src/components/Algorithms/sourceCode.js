import React from 'react'
import {
    Grid,
    Cell,
    Card,
    CardTitle,
    CardText,
    CardMenu,
    DialogContent,
    DialogTitle,
    DialogActions,
Dialog,
    Button,
  } from 'react-mdl';

class SourceCodeModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleOpenDialog = this.handleOpenDialog.bind(this);
      this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
  
    handleOpenDialog() {
      this.setState({
        openDialog: true
      });
    }
  
    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
    }
  
    render() {
      return (
        <div>
          <Button colored onClick={this.handleOpenDialog} raised ripple>Source Code</Button>
          <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog} style={{width:"500px"}}>
      <DialogTitle>{this.props.title}  Source code</DialogTitle>
          <img src={this.props.source} alt="source code image" height="300px"/>
            <DialogContent>
              <p>Algorithm is rated based on Big O notation</p>
            </DialogContent>
            <DialogActions>
              
              <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
  export default SourceCodeModal
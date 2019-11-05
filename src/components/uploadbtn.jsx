import React from 'react'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const formData = new FormData();
    formData.append('file',file)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
        <input type="file" onChange={this.onChange} style={{width:'300px'}}/>
          {/* <Button
        variant="contained"
        color="primary"
        type="submit"
        onChange={this.onChange} 
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button> */}
      </form>
   )
  }
}



export default SimpleReactFileUpload
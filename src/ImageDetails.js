import React, { Component } from "react";
// import DropSelect from "./DropSelect"
import{
    Input,FormGroup, Button
  } from 'reactstrap'
class ImageDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
            };
	};

	

	render() {
		return (
			<div className="image-details">
                
                <FormGroup>
        {/* <Label for="exampleText">Text Area</Label> */}
        <Input type="textarea"  rows="9" name="imageDescription"  placeholder="Image Description..."/>
      </FormGroup>
      <Button className="btn-save" color="info">SAVE</Button>
            </div>
		);
	}
}

export default ImageDetails;

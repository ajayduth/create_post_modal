import React, { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import update from "immutability-helper";
import cuid from "cuid";
import Dropzone from "./Dropzone";
import ImageList from "./ImageList";
import { isTouchDevice } from "./utils";
import{
  Input,InputGroupAddon,InputGroup,InputGroupText
} from 'reactstrap'
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Modal,
  Image
} from "react-bootstrap";
import { FiPlusCircle } from "react-icons/fi";
import "./App.css";
import ImageDetails from "./ImageDetails";
const styles = {
  postsection: {
    height: "100px",
    width: "300px",
    backgroundColor: "#cdebea9c"
  },
  posticon: {
    height: "35px",
    width: "35px",
    marginTop: "33px",
    marginLeft: "120px",
    marginBottom: "33px",
    marginRight: "120px",
    color: "white"
  }
};

// import Example from "./Example";
// import React, { useState } from "react";
const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;

function App() {
  const [images, setImages] = useState([]);
  const [imgcount,setCount] = useState(1);
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function(e) {
        setImages(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
    console.log(acceptedFiles);
  }, []);

  // const moveImage = (dragIndex, hoverIndex) => {
  //   const draggedImage = images[dragIndex];
  //   setImages(
  //     update(images, {
  //       $splice: [[dragIndex, 1], [hoverIndex, 0, draggedImage]]
  //     })
  //   );
  // };
  const [lgShow, setLgShow] = useState(false);


  return (
    <main className="App">

<Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            Step number 1
          </Col>
          <Col md="auto" style={styles.postsection}>
            <FiPlusCircle
              style={styles.posticon}
              onClick={() => setLgShow(true)}
              className="button"
            />
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Create a post
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Row>
                    <Col>
                      <Form>
                        <Form.Group className="mb-0">
                          <Form.Control
                            type="text"
                            size="sm"
                            placeholder="Project Name..."
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Container>
                    <Row>
                      <Col sm={8} className="border pl-0 pr-0 mt-1">
                        {/* <Image
                          height="300px"
                          width="100%"
                          src="https://cdn.sidlee.com/-/media/architecture/services/sidleearchi_services_hero.jpg?mw=1420&hash=B04E02259F638F7E273FF1B924BE42D85D6EA410"
                          alt="Card image cap"
                        /> */}
      <Dropzone onDrop={onDrop} accept={"image/*"} multiple={false}/>

                      </Col>
                      <Col sm={4} className="pl-1 pr-0 mt-1">
                        {/* { imgcount ===1? */}
                        <Form.Group className="mb-0">
                          <Form.Control
                            as="textarea"
                            rows="12"
                            placeholder="ProjectName ... "
                          />
                        </Form.Group> 
                        {/* <Form.Group className="mb-0">
                          <Form.Control
                            as="textarea"
                            rows="12"
                            placeholder="Image description"
                          />
                        </Form.Group> */}
                        {/* } */}
                      </Col>
                    </Row>
                  </Container>
                  <Form className="mt-1">
                    <Form.Group className="mb-0">
                      <Form.Control
                        type="text"
                        placeholder="Project tags.."
                        size="sm"
                      />
                    </Form.Group>
                  </Form>
                  <Dropzone onDrop={onDrop} accept={"image/*"} multiple={false}/>
                  <ImageList images={images}/>

                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Container>
                  <Row>
                    <Col sm={8}>
                      <FormGroup className="mb-0">
                        <Form.Check
                          type="checkbox"
                          label="Agree to instruction and rule.."
                          checked
                          readOnly
                        />
                        <small>
                          Please<a href="#T1"> Read</a> the instruction and
                          rule.
                        </small>
                      </FormGroup>
                    </Col>
                    <Col sm={4}>
                      <Button color="primary" size="sm">
                        Save Post
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col xs lg="2">
            {/* 3 of 3 */}
          </Col>
        </Row>
      </Container>
      {/* <h1 className="text-center">Create Post</h1>
      <div className="outline">
      <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
        </InputGroupAddon>
        <Input placeholder="Project Name/Title" />
      </InputGroup>
      </div>
      <div className="add-image">
      <Dropzone onDrop={onDrop} accept={"image/*"} multiple={false}/>
      <ImageDetails />
      </div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
        </InputGroupAddon>
        <Input placeholder="Project Tags..." />
      </InputGroup>
      <ImageList images={images}/>
      </div> */}
         
    </main>
  );
}

export default App;
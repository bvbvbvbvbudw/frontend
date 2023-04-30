import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './../../style/search.css'


export default function Search() {

    let sRef = React.createRef();

    const handlerSubmit = (event) => {
        event.preventDefault();
        alert(sRef.current.value)
    }
    return (<>

        <Container className="mt-5 container-search">
            <Row className='search-container'>
                <Col sm={4}>
                    <Form className="d-flex" onSubmit={handlerSubmit}>

                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                ref={sRef}
                            />

                        <Button type='submit' value="search">
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>)
}
import React from 'react';
import Row from 'react-bootstrap-v5/lib/Row';
import Container from 'react-bootstrap-v5/lib/Container'

export default function Main({children}) {


    return (<>
    <Container>
        <Row>
            {children}
        </Row>
    </Container>

    </>)
}
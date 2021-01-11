import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
   height: 100%;
   margin-left: 0.25rem;
`;

const Img = styled.img`
   margin-right: 1rem;
   margin-bottom: 1rem;
`;

class Picture extends Component {
    render = () => {
        return (
            <Card>
                <Img src={this.props.url} alt="" />
            </Card>
        );
    };
}

export default Picture;
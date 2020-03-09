import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.p`
    margin-bottom: 30px;
`;

const Grid = styled.div`

`;

interface IProps {
  title: string;
  children: object;
}

const Section: React.FunctionComponent<IProps> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

export default Section;
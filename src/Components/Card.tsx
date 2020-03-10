import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  
`;

const Image = styled.div``;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Description = styled.span``;

interface IProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  place: string;
  emotion: string;
}

const Card: React.FunctionComponent<IProps> = ({
  id,
  imageUrl,
  title,
  description,
  place,
  emotion,
}) => (
  <Container>
    <ImageContainer>
      <Image />
    </ImageContainer>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

export default Card;
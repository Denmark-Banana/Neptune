import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 10px;
`;

const Image = styled.div``;

const ImageContainer = styled.div``;

const Title = styled.h3`
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
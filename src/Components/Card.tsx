import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

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

export interface ICardProps {
  /* The unique card name */
  id: string;

  /* The title for the card */
  title: string;

  /* The image url for the card */
  imageUrl?: string;

  /* The description for the card */
  description?: string;

  /* The place for the card */
  place?: string;

  /* The emotion for the card */
  emotion?: string;
}

const Card: React.FunctionComponent<ICardProps> = ({
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

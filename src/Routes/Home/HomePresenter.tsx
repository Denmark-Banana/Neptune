import React from 'react';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Card from '../../Components/Card';

const Container = styled.div`
  padding: 20px;
`;

interface Iprops {
  result: Array<{
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    place: string;
    emotion: string;
  }>;
  error: string;
  loading: boolean;
}

const HomePresenter: React.FunctionComponent<Iprops> = ({
  result,
  error,
  loading,
}) => (
  <Container>
    {result && result.length > 0 && (
      <Section title="My Memories">
        {result.map(memory => (
          <Card
            key={memory.id}
            id={memory.id}
            imageUrl={memory.imageUrl}
            title={memory.title}
            description={memory.description}
            place={memory.place}
            emotion={memory.emotion}
          />
        ))}
      </Section>
    )}
  </Container>
);

export default HomePresenter;

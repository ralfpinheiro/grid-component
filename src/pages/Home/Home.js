import React from 'react';
import { Container, Box, BoxTitle, BoxText, Button, PageHeading, Section } from './HomeStyles';

export default function({ boxData }) {
    return (
        <Section>
            <PageHeading>Grid Component</PageHeading>
            <Container>
                {boxData.map(box => (
                <Box key={box.id} bgColor={box.bgColor}>
                    <BoxTitle>{box.title}</BoxTitle>
                    <BoxText>{box.text}</BoxText>
                    <Button>Normal Button</Button>
                    <Button primary>Primary Button</Button>
                </Box>
                ))}
            </Container>
        </Section>
    );
}
import React from 'react';
import { Container, Box, BoxTitle, BoxText, Button } from './HomeStyles';

export default function({ boxData }) {
    return (
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
    );
}
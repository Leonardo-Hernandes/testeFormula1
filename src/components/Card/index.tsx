import React from 'react';
import { TouchableOpacity } from 'react-native';
import Pilot from '../../domain/entities/Pilot';

import {
    Container,
    DetailsContainer,
    Row,
    Title,
    PrimaryText,
    SecondaryText,
    DataItem
} from './styles';

const Card = (pilot: Pilot) => {
    return (
        <TouchableOpacity>
            <Container>
                <DetailsContainer>
                    <PrimaryText>Cod 001</PrimaryText>
                    <Title>{pilot.name}</Title>
                </DetailsContainer>
                <DetailsContainer>
                    <Row>
                        <DataItem>
                            <PrimaryText>Posição</PrimaryText>
                            <SecondaryText>1°</SecondaryText>
                        </DataItem>
                        <DataItem>
                            <PrimaryText>Voltas</PrimaryText>
                            <SecondaryText>{pilot.laps}</SecondaryText>
                        </DataItem>
                        <DataItem>
                            <PrimaryText>Tempo total</PrimaryText>
                            <SecondaryText>0:00</SecondaryText>
                        </DataItem>
                    </Row>
                </DetailsContainer>
            </Container>
        </TouchableOpacity>
    );
}

export default Card;
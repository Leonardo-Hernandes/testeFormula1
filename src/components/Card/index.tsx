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

const Card = (pilot: any) => {
    return (
        <TouchableOpacity>
            <Container>
                <DetailsContainer>
                    <PrimaryText>Cod: {pilot.pilot.id}</PrimaryText>
                    <Title>{pilot.pilot.name}</Title>
                </DetailsContainer>
                <DetailsContainer>
                    <Row>
                        <DataItem>
                            <PrimaryText>Posição</PrimaryText>
                            <SecondaryText>{pilot.pilot.key + 1}°</SecondaryText>
                        </DataItem>
                        <DataItem>
                            <PrimaryText>Voltas</PrimaryText>
                            <SecondaryText>{pilot.pilot.laps}</SecondaryText>
                        </DataItem>
                        <DataItem>
                            <PrimaryText>Tempo total</PrimaryText>
                            <SecondaryText>{pilot.pilot.totalTime}</SecondaryText>
                        </DataItem>
                    </Row>
                </DetailsContainer>
            </Container>
        </TouchableOpacity>
    );
}

export default Card;
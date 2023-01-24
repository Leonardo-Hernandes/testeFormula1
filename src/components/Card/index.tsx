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

const Card = (props: any) => {
    const pilot = props.pilot;
    const pilots = props.pilots;
    const updatePilot = props.updatePilot
    const navigation = props.props.navigation

    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Editar Dados', {pilot, pilots, updatePilot})
            }
        >
            <Container>
                <DetailsContainer>
                    <PrimaryText>Cod: {pilot.id}</PrimaryText>
                    <Title>{pilot.name}</Title>
                </DetailsContainer>
                <DetailsContainer>
                    <Row>
                        <DataItem>
                            <PrimaryText>Posição</PrimaryText>
                            <SecondaryText>{pilot.key + 1}°</SecondaryText>
                        </DataItem>
                        <DataItem>
                            <PrimaryText>Voltas</PrimaryText>
                            <SecondaryText>{pilot.laps}</SecondaryText>
                        </DataItem>
                        <DataItem>
                            <PrimaryText>Tempo total</PrimaryText>
                            <SecondaryText>{pilot.totalTime}</SecondaryText>
                        </DataItem>
                    </Row>
                </DetailsContainer>
            </Container>
        </TouchableOpacity>
    );
}

export default Card;
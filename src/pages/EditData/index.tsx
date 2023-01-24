import React, { useState } from 'react';

import { SafeAreaView } from 'react-native';
import {
    TextInput,
    Button,
    Avatar
} from 'react-native-paper';

import {
    Container,
    PilotBox,
    Row,
    AvatarBox,
    Padding
} from './styles';

const EditData = () => {
    const [pilotPosition, setPilotPosition] = useState()
    const [pilotCode, setPilotCode] = useState()
    const [pilotName, setPilotName] = useState()
    const [pilotLaps, setPilotLaps] = useState()
    const [pilotTotalTime, setPilotTotalTime] = useState()

    const handleSave = () => {
        console.log("Save")
    }

    const handleCancel = () => {
        console.log("Cancel")
    }

    return (
        <SafeAreaView>
            <Container>
                <PilotBox>
                    <AvatarBox>
                        <Avatar.Text size={140} label="Ts" />
                    </AvatarBox>
                    <Padding>
                        <TextInput
                            label="Posição"
                            mode='outlined'
                            onChangeText={pilotPosition => setPilotPosition}
                            value={pilotPosition}
                            keyboardType="numeric"
                        />
                    </Padding>
                    <Padding>
                        <TextInput
                            label="Código"
                            mode='outlined'
                            onChangeText={pilotCode => setPilotCode}
                            value={pilotCode}
                            keyboardType="numeric"
                        />
                    </Padding>
                    <Padding>
                        <TextInput
                            label="Nome do Piloto"
                            mode='outlined'
                            onChangeText={pilotName => setPilotName}
                            value={pilotName}
                        />
                    </Padding>
                    <Padding>
                        <TextInput
                            label="Quantidade de Voltas"
                            mode='outlined'
                            onChangeText={pilotLaps => setPilotLaps}
                            value={pilotLaps}
                            keyboardType="numeric"
                        />
                    </Padding>
                    <Padding>
                        <TextInput
                            label="Tempo Total da Corrida"
                            mode='outlined'
                            onChangeText={pilotTotalTime => setPilotTotalTime}
                            value={pilotTotalTime}
                        />
                    </Padding>
                </PilotBox>
                <Row>
                    <Button mode="contained" onPress={handleCancel}>
                        Cancelar
                    </Button>
                    <Button mode="contained" onPress={handleSave}>
                        Salvar
                    </Button>
                </Row>
            </Container>
        </SafeAreaView>

    );
}

export default EditData;
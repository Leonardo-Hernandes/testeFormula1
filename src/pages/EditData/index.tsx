import React, { useState, useEffect } from 'react';

import { KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
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

const EditData = (data: any) => {
    const [pilotPosition, setPilotPosition] = useState<string>()
    const [pilotCode, setPilotCode] = useState<string>()
    const [pilotName, setPilotName] = useState<string>("")
    const [pilotLaps, setPilotLaps] = useState<string>()
    const [pilotTotalTime, setPilotTotalTime] = useState<string>()
    let newPilot = data.route.params.pilot
    const updatePilot = data.route.params.updatePilot

    useEffect(() => {
        setPilotPosition(newPilot.key.toString());
        setPilotCode(newPilot.id.toString());
        setPilotName(newPilot.name);
        setPilotLaps(newPilot.laps.toString());
        setPilotTotalTime(newPilot.totalTime);
    }, [])

    const handleSave = () => {
        newPilot.name = pilotName
        newPilot.laps = pilotLaps
        newPilot.totalTime = pilotTotalTime

        updatePilot(newPilot)
        data.navigation.goBack()
    }

    const handleCancel = () => {
        data.navigation.goBack()
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                <Container>
                    <KeyboardAvoidingView
                        behavior="height"
                        keyboardVerticalOffset={-200}
                    >
                        <PilotBox>
                            <AvatarBox >
                                <Avatar.Text size={150} label={pilotName?.slice(0,3)} style={{backgroundColor: "#0d807a"}}/>
                            </AvatarBox>
                            <Padding>
                                <TextInput
                                    label="Posição"
                                    mode='outlined'
                                    onChangeText={pilotPosition => setPilotPosition(pilotPosition)}
                                    value={pilotPosition}
                                    disabled
                                    keyboardType="numeric"
                                />
                            </Padding>
                            <Padding>
                                <TextInput
                                    label="Código"
                                    mode='outlined'
                                    disabled
                                    onChangeText={pilotCode => setPilotCode(pilotCode)}
                                    value={pilotCode}
                                    keyboardType="numeric"
                                />
                            </Padding>
                            <Padding>
                                <TextInput
                                    label="Nome do Piloto"
                                    mode='outlined'
                                    onChangeText={pilotName => setPilotName(pilotName)}
                                    value={pilotName}
                                />
                            </Padding>
                            <Padding>
                                <TextInput
                                    label="Quantidade de Voltas"
                                    mode='outlined'
                                    onChangeText={pilotLaps => setPilotLaps(pilotLaps)}
                                    value={pilotLaps}
                                    keyboardType="numeric"
                                />
                            </Padding>
                            <Padding>
                                <TextInput
                                    label="Tempo Total da Corrida"
                                    mode='outlined'
                                    onChangeText={pilotTotalTime => setPilotTotalTime(pilotTotalTime)}
                                    value={pilotTotalTime}
                                />
                            </Padding>
                        </PilotBox>
                        <Row>
                            <Button mode="contained" onPress={handleCancel} style={{backgroundColor: "#0d807a"}}>
                                Cancelar
                            </Button>
                            <Button mode="contained" onPress={handleSave} style={{backgroundColor: "#0d807a"}}>
                                Salvar
                            </Button>
                        </Row>
                    </KeyboardAvoidingView>
                </Container>
            </SafeAreaView>
        </ScrollView>
    );
}

export default EditData;
import React, { useCallback, useEffect, useState } from 'react';

import PilotsRepositoryImpl from "../../.././src/data/repositories/PilotRepositoryImpl";
import PilotService from '../../.././src/domain/usecase/PilotService';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import Card from '../../components/Card';


import {
    SafeAreaView,
    FlatList,
} from 'react-native';

import {
    Button,
} from 'react-native-paper';

import {
    Container,
} from './styles';



const Home = (props: any) => {
    const [fileResponse, setFileResponse] = useState<any>();
    const [pilots, setPilots] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<any>(false);
    const pilotRepo = new PilotsRepositoryImpl();
    const pilotService = new PilotService(pilotRepo);

    useEffect(() => {
        setIsLoading(false)
    }, [isLoading])

    useEffect(() => {
        if (fileResponse) {
            readFile(fileResponse[0].uri)
        }
    }, [fileResponse])


    const updatePilot = async (pilot: any) => {
        setIsLoading(true)
        const newPilots = pilots;
        const find = pilots.indexOf(pilot)
        newPilots[find] = pilot

        const resp = await pilotService.OrganizeData(newPilots);
        setPilots(resp)
    };

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response: any = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
            });
            setFileResponse(response);
        } catch (error) {
            console.warn(error);
        }
    }, []);

    const readFile = async (path: string) => {
        try {
            const contents = await RNFS.readFile(path, "utf8");
            getPilots(contents)
        } catch (e) {
            console.log(e);
        }
    };

    const getPilots = async (contents: any) => {
        const pilotsResponse = await pilotService.GetPilots(contents)

        setPilots(pilotsResponse)
    };

    return (
        <SafeAreaView>
            <Container>
                <Button mode="contained" onPress={handleDocumentSelection} style={{ backgroundColor: "#0d807a" }}>
                    Enviar Arquivo
                </Button>
                {!isLoading ?
                    <FlatList data={pilots}
                        renderItem={({ item }) => <Card props={props} pilot={item} pilots={pilots} updatePilot={updatePilot} />}
                        contentContainerStyle={{
                            paddingBottom: 50 * 2
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                    : null}
            </Container>
        </SafeAreaView>
    )
}

export default Home;
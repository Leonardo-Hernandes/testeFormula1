import React, { useCallback, useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button
} from 'react-native';

import PilotsRepositoryImpl from "./src/data/repositories/PilotRepositoryImpl";
import PilotService from './src/domain/usecase/PilotService';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';



function App(): JSX.Element {
  const [fileResponse, setFileResponse] = useState<any>();
  const [pilots, setPilots] = useState<any>([]);
  const pilotRepo = new PilotsRepositoryImpl();
  const pilotService = new PilotService(pilotRepo);

  useEffect(() => {
    if (fileResponse) {
      readFile(fileResponse[0].uri)
    }
  }, [fileResponse])


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
      const pilotsResponse = await pilotService.GetPilots(contents)

      setPilots(pilotsResponse)
      console.log(pilotsResponse[19])
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <Button title="Enviar Arquivo" onPress={handleDocumentSelection} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

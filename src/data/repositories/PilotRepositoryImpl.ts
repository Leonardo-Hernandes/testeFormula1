import Pilot from "../../domain/entities/Pilot"
import PilotRepository from "../../domain/repositories/PilotRepository"

export default class PilotRepositoryImpl implements PilotRepository {
    calcTime(time: string, laps: number) {
        const separetedTime: string[] = time.split(".");
        const minToSecond: number = parseInt(separetedTime[0]) * 60;
        const secondToMillissecond:number = (minToSecond + parseInt(separetedTime[1])) * 1000;
        const totalMillisecond:number = secondToMillissecond + parseInt(separetedTime[2]);
        
        return totalMillisecond
    }


    async GetPilots(data: any): Promise<Pilot[]> {
        const formatedData = []
        const dataLines = data.split(/\r?\n/)
        dataLines.shift()

        for(let item of dataLines) {
            const separetedItem = item.split(" ")
            const time = separetedItem[5].replace(":", ".")

            const formatedItem = {
                "id": parseInt(separetedItem[1]),
                "name": separetedItem[3],
                "laps": parseInt(separetedItem[4]),
                "timePerLap": separetedItem[5],
                "totalTime": this.calcTime(time, separetedItem[4]),
                "speed": parseInt(separetedItem[6]),
            }

            formatedData.push(formatedItem)
        }

        return formatedData.map((item: Pilot) => ({ id: item.id, name: item.name, laps: item.laps, timePerLap: item.timePerLap, totalTime: item.totalTime, speed: item.speed }))
    }
}

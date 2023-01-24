import Pilot from "../../domain/entities/Pilot"
import PilotRepository from "../../domain/repositories/PilotRepository"

export default class PilotRepositoryImpl implements PilotRepository {
    calcTime(time: string, laps: number) {
        const totalMilliseconds = this.getMilliseconds(time, laps)

        const seconds: number = totalMilliseconds / 1000

        const minutes = Math.floor(seconds / 60);
        const totalSeconds = seconds % 60;

        const totalTime = `${this.padTo2Digits(minutes)}:${this.padTo2Digits(totalSeconds)}`;

        return { milliseconds: totalMilliseconds, totalTime: totalTime.substr(0, 9) }
    }

    padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
    }

    getMilliseconds(time: string, laps: number) {
        const separetedTime: string[] = time.split(".");
        const minToSecond: number = parseInt(separetedTime[0]) * 60;
        const secondToMillissecond: number = (minToSecond + parseInt(separetedTime[1])) * 1000;
        const milliseconds: number = secondToMillissecond + parseInt(separetedTime[2]);

        const totalMilliseconds: number = milliseconds * laps;

        return totalMilliseconds;
    }

    getMaxLaps(data: Pilot[]) {
        let laps = 0;
        for (let item of data) {
            if (item.laps > laps)
                laps = item.laps
        };

        return laps
    }



    async OrganizeData(data: Pilot[]) {
        let maxLaps = this.getMaxLaps(data);
        let organizingData: any = []
        const organizedData: any = [];

        while(maxLaps > 0) {
            for (let item of data) {
                if (item.laps == maxLaps) {
                    organizingData.push(item)
                }
            }
            
            organizingData.sort(function (a: any, b: any) {
                return a.totalTime < b.totalTime ? -1 : a.totalTime > b.totalTime ? 1 : 0;
            })
    
            for(let item of organizingData) {
                organizedData.push(item)
            }

            organizingData = []
            maxLaps --
        }   
        
        return organizedData;
    }



    async GetPilots(data: any): Promise<Pilot[]> {
        const dataLines = data.split(/\r?\n/)
        const formatedData = []
        dataLines.shift()

        for (let item of dataLines) {
            const separetedItem = item.split(" ")
            const time = separetedItem[5].replace(":", ".")
            const formatedTime = this.calcTime(time, separetedItem[4])

            const formatedItem = {
                "id": parseInt(separetedItem[1]),
                "name": separetedItem[3],
                "laps": parseInt(separetedItem[4]),
                "timePerLap": separetedItem[5],
                "totalTime": formatedTime.totalTime,
                "speed": parseInt(separetedItem[6]),
            }

            formatedData.push(formatedItem)
        }

        const finalData = await this.OrganizeData(formatedData);

        return finalData.map((item: Pilot, index: number) => ({
            id: item.id,
            key: index,
            name: item.name,
            laps: item.laps,
            timePerLap: item.timePerLap,
            totalTime: item.totalTime,
            speed: item.speed
        }));
    }
}

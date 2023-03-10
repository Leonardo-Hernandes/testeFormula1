export default class Pilot {
    id: number
    name: string
    laps: number
    timePerLap: string
    totalTime: string
    speed: number

    constructor(
        id: number,
        name: string,
        laps: number,
        timePerLap: string,
        totalTime: string,
        speed: number
    ) {
        this.id = id
        this.name = name
        this.laps = laps
        this.timePerLap = timePerLap
        this.totalTime = totalTime
        this.speed = speed
    }
}

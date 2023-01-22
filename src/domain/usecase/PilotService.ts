import Pilot from "../entities/Pilot"
import PilotRepository from "../repositories/PilotRepository"

export default class PilotServiceImpl {
    pilotRepo: PilotRepository

    constructor(ir: PilotRepository) {
        this.pilotRepo = ir
    }

    async GetPilots(data : any): Promise<Pilot[]> {
        return this.pilotRepo.GetPilots(data)
    }
}

import Pilot from "../entities/Pilot"

export default interface PilotRepository {
    GetPilots(data: []): Promise<Pilot[]>
}

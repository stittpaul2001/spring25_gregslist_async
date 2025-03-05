import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js"


class HouseService {

    async getHouses(){
        const response= await api.get('api/houses')
        console.log('got houses', response.data);
        const houses = response.data.map(pojo => new House(pojo))
        AppState.houses = houses
    }
}

export const houseService = new HouseService()
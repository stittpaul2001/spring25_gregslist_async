import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { houseService } from "../services/HouseServ.js";
import { Pop } from "../utils/Pop.js";


export class HouseController {
    constructor() {
        AppState.on('houses', this.drawHouses)

        console.log('this is my House Controller, can you see it');
        this.getHouses()
        
    }

    async getHouses() {
        try {
            await houseService.getHouses()
        } catch (error) {
            console.error('could not get houses', error)
            Pop.error(error, 'could not get houses')
        }
        
    }

    drawHouses() {
        console.log('drawing houses')
        const houses = AppState.houses
        let content = ''
        houses.forEach(house => content += house.template)
        const housesElm = document.getElementById('houseListings')
        housesElm.innerHTML = content
    }


}

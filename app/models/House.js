

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator

    }

    // const exampleDataFromAPI = {

        
    //     "price": "10000000",
    //     "bedrooms": "10",
    //     "bathrooms": "14",
    //     "levels": "5",
    //     "year": "1990",

    // }

    get template(){
        return `
        <div class="col-12">
            <div class="row bg-dark border">
                <div class="col-md-4">
                    <img src="${this.imgUrl}" alt="a picture of a house" class="img-fluid">
                </div>
                    <div class="col-md-8">
                        <div class="d-block text-light">
                            <p class="fs-3">Year: ${this.year}</p>
                            <p class="fs-4 text-center">${this.description}</p>
                            <p class="fs-4">Levels: ${this.levels}</p>
                            <p class="fs-4">Bedrooms: ${this.bedrooms}</p>
                            <p class="fs-4">Bathrooms: ${this.bathrooms}</p>
                            <p class="fs-3 text-end">Price: $${this.price}</p>
                        </div>
                    </div>
            </div>
        </div>
        `
    }

}

     
      
        
export class Item {
    constructor(public itemCode: string,
                public itemImgUrl: string, 
                public itemTitle: string,
                public itemRating: 1|2|3|4|5,
                public itemPrice : number,
                public itemQty: number,
                public description?: string) {

    }

    
}

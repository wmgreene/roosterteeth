const RoosterTeeth = require('../../roosterteeth');

var roosterteeth = new RoosterTeeth();

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://svod-be.roosterteeth.com/api/v1/store-carousel
roosterteeth.store_carousel.list(printResponse);
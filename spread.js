function ispisiImena(prvo, drugo, trece){
    console.log(prvo);
    console.log(trece);
}

const x = ['Ivan', 'Marija', 'David'];
ispisiImena(...x);

function ispisiImena2(...imena){
    console.log(imena);
}

const y = ['Ivan', 'Marija', 'David'];
ispisiImena2(y[0], y[1], y[2]);
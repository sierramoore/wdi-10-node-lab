//connect car.js to index.js


module.exports.color = 'blue';
module.exports.convertable = true;
module.exports.speed = 0;
// let speed = 0;

module.exports.accelerate = () => {
    this.speed++;
    console.log("The new speed is: ");
    //when i console.log("blahblah", this.speed) -> get undefined bkus console.logging a function that doesnt return anything
    return this.speed;
};

module.exports.declerate = () => {
    this.speed--;
    console.log("The new speed is: ");
    return this.speed;
};

//CALL with "node index.js" in terminal

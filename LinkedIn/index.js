/**
 * objects/object container/properties{key:value}/accessing objects{dot/bracket notation}
 */
const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNumber: 15,
    strapLength: {
        left: 26,
        right: 26
    },
    lidOpen: false,
    toggledId: function(lidStatus){                         //methods
        this.lidOpen = lidStatus;
    },
    newStrapLength: function(lengthLeft, lengthRight){     //methods
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
}
// using funtions
backpack.toggledId(true);
console.log(backpack.lidOpen);

backpack.newStrapLength(77,65);
console.log(backpack);


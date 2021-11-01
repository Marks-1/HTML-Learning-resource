/**
 * classes
 * class declaration: class Name {}
 * class expression: const Name = class {}
 * 
 */
 class Backpack {
    // defines parameters
    constructor(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen) { 
    // define peoperties
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
        }
        this.lidOpen = lidOpen;
    }
    //methods
    toggledId(lidStatus){
        this.lidOpen = lidStatus;
    }

    newStrapLength(lengthLeft, lengthRight){
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
}

export default Backpack;
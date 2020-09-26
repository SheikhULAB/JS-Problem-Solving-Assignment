/*========= Feet to Mile Covert=========== */

feetToMile(10);

function feetToMile(Feet) {
    var mile = .000189 * Feet;
    return mile;

}

if (feet < 0)
    console.log("Feet Value  should not less than 0.. Please Give a valid Value...");
else
    console.log(feet + " Feet = " + feetToMile(feet).toFixed(3) + " Mile");



/*========= Number of Wood Calculation =============*/


woodCalculator(40,10,5);

function woodCalculator(chair, table, bed) {
    var numOfWoodUseChair = 1 * chair;
    var numOfWoodUseTable = 3 * table; 
    var numOfWoodUseBed = 5 * bed; 

    var total = numOfWoodUseChair + numOfWoodUseTable + numOfWoodUseBed;
    return total;

}

if (chair < 0 || table < 0 || bed < 0)
    console.log("Number of chair or table or bed should not negative..Please Enter a Valid Value..");

else
    console.log("For " + chair + " Chair " + table + " Table " + bed + " Bed You Need " + woodCalculator(chair, table, bed) + " Cubic Wood");




/*======= Number of Brick  Calculation ========= */


brickCalculator(100);

function brickCalculator(floor) {

    if (floor <= 10)
        var noOfBricks = floor * 15 * 1000; 
    else if (floor <= 20)
        var noOfBricks = (10 * 15 * 1000) + ((floor - 10) * 12 * 10000); 
    else if (floor > 20)
        var noOfBricks = (10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 20) * 10 * 1000); 

    return noOfBricks;
}
if (nuOfFloors < 0)
    console.log("Floor Value should be larger than 0.... Please Try again...");

else
    console.log("For " + nuOfFloors + " Floor Buildings You Need " + brickCalculator(nuOfFloors) + " Bricks");



/*==============Find the name of Tiny Friend====================*/

var nameOfFriends = ["nazmul", "bappy", "rana", "faisal", "emon", "moon", "maimoon", "muntasir", "Abir", "bidhan", "sumit", "jahid", "shanto", "rasel"];


function tinyFriends(name) {
    var tinyName = "";

    var minLength = 99999999;


    for (var i = 0; i < nameOfFriends.length; i++) {
        var length = nameOfFriends[i].length;

        if (length < minLength) {
            minLength = length;
            tinyName = nameOfFriends[i];
        }

    }

    return tinyName;
}

if (nameOfFriends.length < 1)
    console.log("Array should not empty...");

else
    console.log("My Tiny Name Friend is "+tinyFriends(nameOfFriends));
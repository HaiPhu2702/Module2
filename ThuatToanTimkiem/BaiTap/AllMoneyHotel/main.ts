let hotel = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]

let allSum=0;
let underGhostRoom=0;
function TongTien(hotel) {

    for (let i = 0; i <hotel.length ; i++) {
        for (let j = 0; j < hotel[i].length; j++) {
            allSum+=hotel[i][j];
            if(hotel[i][j]===0 &&i<hotel.length-1){
                underGhostRoom+=hotel[i+1][j]
            }
        }

    }
    return allSum-underGhostRoom;
}
let result=TongTien(hotel);
console.log(result);

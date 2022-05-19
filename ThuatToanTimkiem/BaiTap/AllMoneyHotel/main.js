var hotel = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
var allSum = 0;
var underGhostRoom = 0;
function TongTien(hotel) {
    for (var i = 0; i < hotel.length; i++) {
        for (var j = 0; j < hotel[i].length; j++) {
            allSum += hotel[i][j];
            // console.log(allSum);
            if (hotel[i][j] === 0 && i < hotel.length - 1) {
                underGhostRoom += hotel[i + 1][j];
            }
        }
    }
    return allSum - underGhostRoom;
}
var result = TongTien(hotel);
console.log(result);

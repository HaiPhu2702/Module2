let arrPhoneNumber = ["0324545", "0335345", "0835436", "0847658", "0769647", "0789326"];
function tachDauSo(arr) {
    let Vietel = [];
    let Vina = [];
    let Mobile = [];
    arr.forEach((value) => {
        if (value.startsWith("032") || value.startsWith("033")) {
            Vietel.push(value);
        }
        if (value.startsWith("083") || value.startsWith("084")) {
            Vina.push(value);
        }
        if (value.startsWith("076") || value.startsWith("078")) {
            Mobile.push(value);
        }
    });
    Vietel.forEach((value => {
        console.log("Viettel " + value);
    }));
    Vina.forEach((value => {
        console.log("Vina " + value);
    }));
    Mobile.forEach((value => {
        console.log("Mobile " + value);
    }));
}
tachDauSo(arrPhoneNumber);

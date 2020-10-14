function getCarInfo(car) {
    console.log(car.name + ": " + car.model + ": " + car.plateNo + ": " + car.manufacturer);
}
var validateCarInfo = {
    name: 'Mercedes Benz AMG',
    model: '456ADERTGH',
    manufacturer: 'Daimler AG',
    plateNo: 34511208
};
getCarInfo(validateCarInfo);

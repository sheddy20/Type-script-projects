interface Car {
  name: string;
  model: any;
  manufacturer: string;
  plateNo: number;
}

function getCarInfo(car: Car) {
  console.log(`${car.name}: ${car.model}: ${car.plateNo}: ${car.manufacturer}`);
}

let validateCarInfo = {
  name: 'Mercedes Benz AMG',
  model: '456ADERTGH',
  manufacturer: 'Daimler AG',
  plateNo: 34511208,
};

getCarInfo(validateCarInfo);
let portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];

let portStatuses = [
    'AVAILABLE', 'CHARGING', 'ERROR',
    'AVAILABLE', 'CHARGING', 'AVAILABLE'
];

let portPowersKw = [250, 150, 60, 250, 60, 150];

console.log("=== TRẠNG THÁI BAN ĐẦU ===");

for (let i = 0; i < portIds.length; i++) {
    console.log(portIds[i], portStatuses[i], portPowersKw[i] + " kW");
}

let indexS01 = portIds.indexOf('S01');

if (indexS01 !== -1) {
    portStatuses[indexS01] = 'CHARGING';
}

console.log("S01 đã chuyển sang CHARGING");

let indexS03 = portIds.indexOf('S03');

if (indexS03 !== -1) {
    portStatuses[indexS03] = 'AVAILABLE';
}

console.log("S03 đã chuyển sang AVAILABLE");

let availableCount = 0;

for (let i = 0; i < portStatuses.length; i++) {
    if (portStatuses[i] === 'AVAILABLE') {
        availableCount++;
    }
}

console.log("Số trụ sẵn sàng:", availableCount);

let maxPower = 0;
let maxPort = "";

for (let i = 0; i < portIds.length; i++) {
    if (
        portStatuses[i] === 'AVAILABLE' &&
        portPowersKw[i] > maxPower
    ) {
        maxPower = portPowersKw[i];
        maxPort = portIds[i];
    }
}

console.log("\n=== BÁO CÁO CUỐI CA ===");

for (let i = 0; i < portIds.length; i++) {
    console.log(
        portIds[i] + " | " +
        portStatuses[i] + " | " +
        portPowersKw[i] + " kW"
    );
}

console.log("Tổng số trụ AVAILABLE:", availableCount);
console.log("Trụ sẵn sàng có công suất lớn nhất:", maxPort);
console.log("Công suất:", maxPower + " kW");
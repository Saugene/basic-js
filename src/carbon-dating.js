const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
     if (!sampleActivity || typeof (sampleActivity) != "string" || !Number(sampleActivity) || Number(sampleActivity) <= 0 || Number(sampleActivity) > 15) return false;
     let sA = Number(sampleActivity);
     return Math.ceil(Math.log(MODERN_ACTIVITY/sA)*HALF_LIFE_PERIOD/0.693);
};

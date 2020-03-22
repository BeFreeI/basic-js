const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (Number(sampleActivity) <= 0 || Number(sampleActivity) >= MODERN_ACTIVITY
      || !parseFloat(sampleActivity) || sampleActivity !== `${sampleActivity}`)
    return false;

  let koeff = 0.693 / HALF_LIFE_PERIOD;
  return Math.floor(Math.log(parseFloat(sampleActivity)/MODERN_ACTIVITY)/koeff)*-1;
};

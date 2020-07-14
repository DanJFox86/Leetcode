//  Time: O(1)
// Space: O(1)

var angleClock = function(hour, minutes) {
  const angleHour = (hour % 12) * 30 + (minutes / 60) * 30;
  const angleMinutes = (minutes / 60) * 360;
  const angleCW = Math.abs(angleHour - angleMinutes);
  return Math.min(angleCW, 360 - angleCW)
};
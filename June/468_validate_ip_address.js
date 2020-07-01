//  Time: O(n)
// Space: O(n)
// Return if given IP address is valid IPv4, IPv6 or neither.


var validIPAddress = function(IP) {
  
  const isIPv4 = (IP) => {
    let _IP = IP.split('.');
    if (_IP.length !== 4) {
      return false;
    }
    const eachNumValid = _IP.every((str) => {
                           if (!(str.length <= 3 && str.length > 0)) {
                             return false;
                           } else if (str.length > 1 && str[0] === '0') {
                             return false;
                           }
                           return true;
                         });
    if (!eachNumValid) {
      return false;
    }
    // Number(num) will convert hex numbers to decimal, need to account for that
    for (let i = 0; i < _IP.length; i++) {
      for (let j = 0; j < _IP[i].length; j++) {
        if (_IP[i][j] != Number(_IP[i][j])) {
          return false;
        }
      }
    }
    _IP = _IP.map((str) => Number(str))
    
    if (!_IP.every((num) => (num >= 0 && num <= 255))) {
      return false;
    }
    return true;
  }
  const isIPv6 = (IP) => {
    let _IP = IP.split(':');
    if (_IP.length !== 8 ) {
      return false;
    }
    if (!_IP.every((str) => typeof str === 'string' && str.length <= 4 && str.length > 0)) {
      return false;
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < _IP[i].length; j++) {
        if (_IP[i][j] == Number(_IP[i][j])) {
          // do nothing
        } else {
          // must be a character
          let charCode = _IP[i].charCodeAt(j);
          if (!((charCode <= 102 && charCode >= 97) || (charCode <= 70 && charCode >= 65))) {
            return false;
          }
        }
      }
    }
    return true;
  }
  if (isIPv4(IP)) {
    return 'IPv4';
  }
  if (isIPv6(IP)) {
    return 'IPv6';
  }
  return 'Neither';
};
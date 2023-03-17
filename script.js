function increaseValue(id) {
    var value = parseInt(document.getElementById(id).value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(id).value = value;
  }
  
  function decreaseValue(id) {
    var value = parseInt(document.getElementById(id).value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById(id).value = value < 1 ? 1 : value;
  }
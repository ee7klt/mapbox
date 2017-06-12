var reader = new FileReader();

reader.onload = function(e) {
  var text = reader.result;
}

reader.readAsText('./paths.txt', encoding);

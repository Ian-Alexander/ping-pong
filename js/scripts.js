// business logic
var pingPong = function(numbers) {
  var result = [];
  for (var index = 0; index <= numbers; index ++ ) {
    if (index % 3 === 0 && index % 15 !== 0) {
      result.push("PING");
    } else if (index % 5 === 0 && index % 15 !== 0) {
      result.push("PONG");
    } else {
      result.push(index);
  }
}
return result;
};
// user interface
$(function() {
  $(".ping-pong").submit(function(event){
    event.preventDefault();
    $("ul#outputS").empty();
    var numbers = parseInt($("#inputNumber").val());
    var output = pingPong(numbers);
    for (var index = 1; index <= numbers; index++){
      $("#outputS").append("<li>" + output[index] + "</li>");
    }
  });
});

$("#shuffle").on("click", function() {
  var parent = $("#container");
  var divs = parent.children();

  while (divs.length) {
    var randomIndex = Math.floor(Math.random() * divs.length);
    parent.append(divs.splice(randomIndex, 1));
  }
});

$("#sort").on("click", function() {
  var parent = $("#container");
  var divs = parent.children();
  var sortDivs = divs.sort((a,b) => 
    a.innerText - b.innerText
  )
  parent.append(sortDivs);
});
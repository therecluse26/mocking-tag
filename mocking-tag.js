// Creates a <mock>tAg tHaT yoU caN UsE to MoCK WitH</mock>
(function(){
  var convToMock = function(elem){
    let origText = elem.innerText;
    let newText = "";
    let rndBool = false;
    var i = origText.length;
    for (var i = 0; i < origText.length; i++) {
      rndBool = Math.random() >= 0.5;
      if (rndBool == 1){
        newText += origText.charAt(i).toUpperCase();
      } else {
        newText += origText.charAt(i).toLowerCase();
      }          
    } 
    elem.innerText = newText;
  }
  let tagName = "mock";
  document.createElement(tagName);
  let tags = document.getElementsByTagName(tagName);
  for ( let i = 0; i < tags.length; i++) {
    convToMock(tags[i]);		
  }
})();

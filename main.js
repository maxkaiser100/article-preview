var shareToolTip = document.getElementById("shareToolTip");
var shareButton = document.getElementById("shareButton");
var shareMobileButton = document.getElementById("shareMobileButton");
var shareOverlay = document.getElementById("shareOverlay");
var shareClick = document.getElementById("shareClick");
var shareArea = document.getElementById('share');



shareButton.addEventListener('click', function () {
  shareToolTip.style.display = "flex";
 
  shareClick.style.display = "flex";
  
    });

shareMobileButton.addEventListener('click', function () {
        shareOverlay.style.display = "flex";
        });



document.addEventListener('click', function(event) {
    var isClickInsideElement = shareButton.contains(event.target);
    if (!isClickInsideElement) {
        shareToolTip.style.display = "none";
        shareClick.style.display = "none";
      
    }
});

document.addEventListener('click', function(event) {
    var isClickInsideElement = shareMobileButton.contains(event.target);
    if (!isClickInsideElement) {
        shareOverlay.style.display = "none";
        
    }
});
 
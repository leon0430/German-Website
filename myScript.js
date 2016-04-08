



var picList = new Array(5);
var captionList = new Array(5);
var locationList = new Array(5);

var fButton;
var bButton;	
var whichPic = 0; //zero means first pic//
	picList[0] = "pic/pic0.jpg";
	picList[1] = "pic/pic1.jpg";
	picList[2] = "pic/pic2.jpg";
	picList[3] = "pic/pic3.jpg";
	picList[4] = "pic/pic4.jpg";

//var whichCaption = 0;
	captionList[0] = "The blacony of OutReach360.";
	captionList[1] = "The View of a beach during sunrise.";
	captionList[2] = "A picture with some of my friends.";
	captionList[3] = "The view from the hike down.";
	captionList[4] = "A picture of surise at the beach";

//var whichLocation = 0;
	locationList[0] = "Location: Monte Cristi, Dominican Republic";
	locationList[1] = "Location: Monte Cristi, Dominican Republic";
	locationList[2] = "Location: Monte Cristi, Dominican Republic";
	locationList[3] = "Location: Monte Cristi, Dominican Republic";
	locationList[4] = "Location: Monte Cristi, Dominican Republic";

window.onload = function() {
	alert("Hi there-- :-)");
	document.getElementById("picView").src = picList[whichPic];

	fButton = document.getElementById("fButton");
	bButton = document.getElementById("bButton");	

	fButton.addEventListener('click', function(event) {
		//alert("Don't poke me!")
		++whichPic;
		if(whichPic >= picList.length) {
			whichPic = 0;
		}
		document.getElementById("picView").src = picList[whichPic];
		document.getElementById("locationLoc").innerHTML = locationList[whichPic];
		document.getElementById("captionLoc").innerHTML = captionList[whichPic];
	});

	bButton.addEventListener('click', function(event) {
		//alert("Don't poke me!")
		--whichPic;
		if(whichPic < 0) {
			whichPic = picList.length-1;
		}
		document.getElementById("picView").src = picList[whichPic];
		document.getElementById("locationLoc").innerHTML = locationList[whichPic];
		document.getElementById("captionLoc").innerHTML = captionList[whichPic];
	});
};



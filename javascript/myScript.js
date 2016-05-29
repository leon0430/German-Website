var picList = new Array(5);

var fButton;
var bButton;	
var whichPic = 0; //zero means first pic//
	picList[0] = "pic/img0.jpg";
	picList[1] = "pic/img1.jpg";
	picList[2] = "pic/img2.jpg";
	picList[3] = "pic/img3.jpg";
	picList[4] = "pic/img4.jpg";

function changePic() {
	++whichPic;
		if(whichPic >= picList.length) {
			whichPic = 0;
		}
		document.getElementById("picView").src = picList[whichPic];
	}



$(document).ready(function(){

	document.getElementById("picView").src = picList[whichPic];
	setInterval(changePic, 6500);

	fButton = document.getElementById("fButton");
	bButton = document.getElementById("bButton");	

	fButton.addEventListener('click', function(event) {
		//alert("Don't poke me!")
		++whichPic;
		if(whichPic >= picList.length) {
			whichPic = 0;
		}
		document.getElementById("picView").src = picList[whichPic];
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
	
	$('span').css ('display', 'none');
	 $(".side_img").fadeTo(100, 0.2, function(){});
	 $(".side_img").rotate(-45);
	 $('span').fadeTo(50, 0, function(){});

	$("#leftSide").hover(function () { 
			   $('#leftSide').animate({'width': '30%'}, { duration: 1000, queue: false });
			   $('#rightSide').animate({'width': '69%'}, { duration: 1000, queue: false,
			   	complete: function(){
			   		$('span').css ('display', 'inline');
			   		$(".side_img").fadeTo(1000, 1.0, function(){});
			   		$('span').fadeTo(1000, 1.0, function(){});
			   		$(".side_img").rotate({duration: 1000, animateTo: 0 });
			   	}
			   	});
    //$('span').animate({"font-color" : "#FAF93C"}, { duration: 1000, queue: false });
					   
// colors : FAF93C 5A79A5

            }, function () {
               $('#leftSide').animate({'width': '64px'}, 1000);
			   $('#rightSide').animate({'width': '92%'}, 1000);
			   $('span').css ('display', 'none');
			   $(".side_img").fadeTo(1000, 0.2, function(){});
			   $('span').fadeTo(1000, 0, function(){});
			   $(".side_img").rotate({
     				 duration: 1000,
      				 animateTo: -45 });

            });



});
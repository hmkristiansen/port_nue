var showWork = false;

window.addEventListener("scroll", function (event) {

    let scroll = this.scrollY,
        windowHeight = this.innerHeight;
        workHeight = document.getElementById("work").clientHeight;
        workDistanceTop = document.getElementById("work").offsetTop;
        delta = workDistanceTop - scroll;

    if(delta > 0){
        if( (delta < (windowHeight/2.5)) && !showWork){
            showPort(delta);
        }else if( ( delta > (windowHeight/2.5)) && showWork){
            hidePort(delta);
        }
    }else if(delta < 0){
        let workDistanceBottom = workDistanceTop + workHeight;
        let newDelta = workDistanceBottom - scroll;

        if( (newDelta > (windowHeight/2.5)) && !showWork){
            showPort(delta);
        }else if( ( newDelta < (windowHeight/2.5)) && showWork){
            hidePort(delta);
        }
    }

});

function showPort(delta){
    if(delta>0){
        $('#work').removeClass('inactive');
        $('#work').addClass('active');

        $('#greeting').removeClass('active');
        $('#greeting').addClass('inactive2');
    }else{
        $('#work').removeClass('inactive2');
        $('#work').addClass('active');

        $('#about').removeClass('active');
        $('#about').addClass('inactive');

    }
    showWork = true;
}

function hidePort(delta){
    if(delta>0){
        $('#work').removeClass('active');
        $('#work').addClass('inactive');

        $('#greeting').addClass('active');
        $('#greeting').removeClass('inactive2');
    }else{
        $('#work').removeClass('active');
        $('#work').addClass('inactive2');

        $('#about').removeClass('inactive');
        $('#about').addClass('active');
    }
    showWork = false;
}

var update = setInterval(function() {
	updateAge();
}, 500);

var bday = new Date("Nov 19, 1996 05:55:25").getTime();
var dday = new Date("Nov 19, 2077 12:00:00").getTime();

function updateAge(){
	let now = new Date().getTime(); 
	let diffTime1 = Math.abs(now - bday);
	let diffTime2 = Math.abs(dday - now);
	document.getElementById("age").innerHTML =(diffTime1/31557600000);
	//document.getElementById("dead").innerHTML ="💀 : " + (diffTime2/31557600000);
}


$( "#work img" ).click(function() {
    $('#overlay').removeClass('hidden');
    $('#overlay').addClass('visible');
    $('body').addClass('noScroll');
    $('#work, header ,footer').addClass('blur');
    console.log(this.id);
});

$( "#close_btn" ).click(function() {
    $('#overlay').addClass('hidden');
    $('#overlay').removeClass('visible');
    $('body').removeClass('noScroll');
    $('#work, header ,footer').removeClass('blur');
});

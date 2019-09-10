const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Oct 19, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
    //   do something later when date is reached
      if (distance < 0) {
       clearInterval(x);
       'ITS THE DAY!';
      }

    }, second)

    // day night samulation
    function daytonight() {
      if ($("#fullpage").hasClass("night")) {
        $("#fullpage").removeClass("night");
        $("svg").css("fill", "black");
        $(".timer-div").css("color", "black");
        $(".timer-div-2").css("color", "black");
        $(".tagline-head").css("color", "black");
        // /$("#switch").removeClass("switched");
      }
      else {
        $("#fullpage").addClass("night");
        $("svg").css("fill", "white");
        $(".timer-div").css("color", "white");
        $(".timer-div-2").css("color", "white");
        $(".tagline-head").css("color", "white");
        // $("#switch").addClass("switched");
    
      }
    }
    
    setInterval(daytonight,5000);

    // Speaker Component

    /* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  

  // mobile timer

  
const launchdate = new Date('October 19 ,2019 13:00:00').getTime()

const intvl = setInterval(()=>{

    const currentdate = new Date().getTime()

    const distance = launchdate - currentdate

    const days =Math.floor(distance /(1000*60*60*24))
    const hours =Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    const min = Math.floor((distance%(1000*60*60))/(1000*60))
    const sec = Math.floor((distance%(1000*60))/(1000))

   document.querySelector('.days').innerHTML = days
   document.querySelector('.hours').innerHTML = hours
   document.querySelector('.minutes').innerHTML = min
   document.querySelector('.seconds').innerHTML = sec

    if(distance<0){
        clearInterval(intvl) 
    }
} ,1000)
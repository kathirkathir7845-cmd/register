<script>
  // Play Audio on Page Load
  window.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bgMusic");
    if (audio) {
      let playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(function() {
          document.body.addEventListener("click", function() {
            audio.play();
          }, { once: true });
        });
      }
    }
  });

  // Auto Slideshow Array for Profile Circle
  let photoList = [
    "./images/WhatsApp Image 2026-07-15 at 2.45.11 PM.jpeg",
    "./images/WhatsApp Image 2026-07-15 at 2.45.07 PM.jpeg",
    "./images/WhatsApp Image 2026-07-15 at 2.45.09 PM.jpeg",
    "./images/WhatsApp Image 2026-07-15 at 2.45.13 PM.jpeg"
  ];
  let slideIdx = 0;

  function startSlideshow() {
    setInterval(function() {
      slideIdx = (slideIdx + 1) % photoList.length;
      $("#slideshowImg").fadeOut(500, function() {
        $(this).attr("src", photoList[slideIdx]).fadeIn(500);
      });
    }, 3500);
  }

  // Core Login Validation Function
  function processLogin() {
    let uName = $("#username").val().trim();
    let pWord = $("#password").val().trim();

    if (uName === "viviliya@2004" && pWord === "naai kutty") {
      $("#errorMsg").hide();
      $("#displayName").text("vivi");

      let audio = document.getElementById("bgMusic");
      if (audio && audio.paused) {
        audio.play();
      }

      $("#firstSection").fadeOut(1000, function() {
        $("body").removeClass("login-active");
        $("#wrapper").fadeIn(1000, function() {
          startBirthdayAnimations();
          startSlideshow();
        });
      });
    } else {
      $("#errorMsg").text("Invalid Username or Password! ❌").fadeIn();
    }
  }

  // Button Click Event
  $("#loginBtn").on("click", function(e) {
    e.preventDefault();
    processLogin();
  });

  // Enter Key Press Event for Password Input
  $("#password, #username").on("keypress", function(e) {
    if (e.which === 13) {
      e.preventDefault();
      processLogin();
    }
  });

  function startBirthdayAnimations() {
    let datetxt = "24/10/2026";
    let datatxtletter = "You are a very special girl. Today, I wish you all the best, lots of health, and lots of joy. I always hope we will celebrate many more birthdays like this together. Happy birthday to you.💕";
    let titleLetter = "To you";
    let charArrDate = datetxt.split('');
    let charArrDateLetter = datatxtletter.split('');
    let charArrTitle = titleLetter.split('');
    let currentIndex = 0;
    let currentIndexLetter = 0;
    let currentIndexTitle = 0;
    let date__of__birth = document.querySelector(".date__of__birth span");
    let text__letter = document.querySelector(".text__letter p");

    setTimeout(function(){
      let timeDatetxt = setInterval(function(){
        if(currentIndex < charArrDate.length){
          date__of__birth.textContent += charArrDate[currentIndex];
          currentIndex++;
        } else {
          let i = document.createElement("i");
          i.className = "fa-solid fa-star";
          document.querySelector(".date__of__birth").prepend(i);
          document.querySelector(".date__of__birth").appendChild(i.cloneNode(true));
          clearInterval(timeDatetxt);
        }
      },100)
    }, 1000);

    var intervalContent;
    var intervalTitle;
    $("#btn__letter").off("click").on("click", function(){
      $(".box__letter").slideDown();
      setTimeout(function(){
        $(".letter__border").slideDown();
      },1000);
      setTimeout(function(){
        intervalTitle = setInterval(function(){
          if(currentIndexTitle < charArrTitle.length){
            document.querySelector(".title__letter").textContent += charArrTitle[currentIndexTitle];
            let i = document.createElement("i");
            i.className = "fa-solid fa-heart";
            document.querySelector(".title__letter").appendChild(i);
            currentIndexTitle++;
          } else {
            clearInterval(intervalTitle);
          }
        },100);
      },2000);
      setTimeout(function(){
        document.querySelector("#heart__letter").classList.add("animationOp");
        document.querySelector(".love__img").classList.add("animationOp");
        document.querySelector("#mewmew").classList.add("animationOp");
      },2800);
      setTimeout(function(){
        document.querySelectorAll(".heart").forEach((item)=>{
          item.classList.add("animation");
        });
      },3500);
      setTimeout(function(){
        intervalContent = setInterval(function(){
          if(currentIndexLetter < charArrDateLetter.length){
            text__letter.textContent += charArrDateLetter[currentIndexLetter];
            currentIndexLetter++;
          } else {
            clearInterval(intervalContent);
          }
        },50);
      },4000);
    });

    $(".close").off("click").on("click", function(){
      clearInterval(intervalContent);
      document.querySelector(".title__letter").textContent = "";
      text__letter.textContent = "";
      currentIndexLetter = 0;
      currentIndexTitle = 0;
      document.querySelector("#heart__letter").classList.remove("animationOp");
      document.querySelector(".love__img").classList.remove("animationOp");
      document.querySelector("#mewmew").classList.remove("animationOp");
      document.querySelectorAll(".heart").forEach((item)=>{
        item.classList.remove("animation");
      });
      $(".box__letter").slideUp();
      $(".letter__border").slideUp();
    });
  }
</script>
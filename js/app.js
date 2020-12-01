  // const progress_period = $(".js-progress-circle-by-period");
  // const progress_time = $(".js-progress-circle-by-time");
  // const len = Math.PI * 2 * 100;
  // progress_period.css("stroke-dasharray", len);
  // progress_time.css("stroke-dasharray", len);

  // function update(v, elem) {
  //   var offset = -(len * v) / 60;
  //   elem.css("stroke-dashoffset", offset);
  // }

  // $(".js-done").on("click", function () {
  //   var start_period = $(".js-counter-period").data("start");
  //   var finish_period = $(".js-counter-period").data("finish");
    

  //   var step = 60 / finish_period;

  //   update(start_period * step + step, progress_period);
  //   $(".js-counter-period").data("start", start_period + 1);
  //   $(".js-counter-period").html((start_period + 1) + '/' + finish_period);
  //   $(this).prop('disabled',true);
  //   $(this).addClass('disabled');


  //   var intID = setInterval(function () {
  //     var start_time = $(".js-counter-time").data("start");
  //     var finish_time = $(".js-counter-time").data("finish");
  //     update(finish_time - finish_time + start_time , progress_time);
  //     $(".js-counter-time").data("start", start_time + 1);
  //     console.log(start_time + 1);

  //     $(".js-counter-time").text(finish_time - start_time);
  //     if (start_time == finish_time) {
  //       clearInterval(intID);
  //       $(".js-done").prop('disabled',false);
  //       $(".js-done").removeClass('disabled');

  //       $(".js-counter-time").data("start", 0);
  //       $(".js-counter-time").text(finish_time);
  //       update(0, progress_time);

  //     }
  //   }, 1000);


  // });










  jQuery(function($) {
    const elem_time = $(".js-circle-progress-time");
    let sec = elem_time.data("sec");
    elem_time.circleProgress({
      max: sec,
      // value: sec,
      indeterminateText: sec,
      animation: 'linear',
      animationDuration: 1000,
      textFormat: 'value',
      clockwise: false
    });
    // let nnn = sec;

    
    const status = {
      timer: false
    }

    let incValue = (el, val) => {
      el.circleProgress({ value: val });    
    }

    let timer = (sec, el) => {
      let n = sec;
      if(!status.timer){
        let idInterval = setInterval(() => { 
          if(n-- != 0){
            incValue(el, n);
            status.timer = true;
          }
          else{ 
            clearInterval(idInterval);
            status.timer = false; 
          }
        }, 1000)
      }
      // else { 
      //   console.log('уже запущено'); 
      // }
    };

    const elem_period = $(".js-circle-progress-period");
    let per = elem_period.data("per");
    elem_period.circleProgress({
      max: per,
      value: 0,
      animation: 'linear',
    });

    let xxx = 0;
    $('.js-button-done').on('click', function(){
      if(!status.timer){
        incValue(elem_period, ++xxx);
      }
        timer(sec, elem_time);
    })
});


  // $("button").on("click", function () {
  //   var num = $("span").data("sec");
  //   var intID = setInterval(function () {
  //     var sec = Number($("span").text());

  //     update(num - sec + 1);
  //     $("span").text(sec - 1);

  //     if (sec == 1) {
  //       clearInterval(intID);
  //       // alert("asdas");
  //     }
  //   }, 1000);
  // });





// // фиксация меню при скроле
// window.addEventListener("scroll", function (e) {
//   const header = document.querySelector("#header");
//   if (pageYOffset > 400) {
//     header.classList.add("fixed");
//   } else {
//     header.classList.remove("fixed");
//   }
// });

// // Боковое меню при клике
// function toogleMenu() {
//   const menu = document.querySelector("#menu");
//   // if(menu.classList.contains )
//   menu.classList.toggle("active");
// }

// // Плавный скролл до указанного элемента. Для IOS устройств анимации нет
// const isSafari = window.safari !== undefined,
//   is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent),
//   smoothLinks = document.querySelectorAll("[data-scroll-to]");
// for (let smoothLink of smoothLinks) {
//   smoothLink.addEventListener("click", function (e) {
//     if (!isSafari || !is_ios) {
//       e.preventDefault();
//       const id = smoothLink.getAttribute("data-scroll-to");
//       const elemTo = document.querySelector(id);
//       window.scroll({
//         top: elemTo.offsetTop,
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   });
// }

const countdownElement = document.getElementById("countdown");

setTimeout(function () {
  countdownElement.innerText = "10";
  countdownElement.className = "saffron";
  setTimeout(function () {
    countdownElement.innerText = "9";
    countdownElement.className = "white";
    setTimeout(function () {
      countdownElement.innerText = "8";
      countdownElement.className = "green";
      setTimeout(function () {
        countdownElement.innerText = "7";
        countdownElement.className = "saffron";
        setTimeout(function () {
          countdownElement.innerText = "6";
          countdownElement.className = "white";
          setTimeout(function () {
            countdownElement.innerText = "5";
            countdownElement.className = "green";
            setTimeout(function () {
              countdownElement.innerText = "4";
              countdownElement.className = "saffron";
              setTimeout(function () {
                countdownElement.innerText = "3";
                countdownElement.className = "white";
                setTimeout(function () {
                  countdownElement.innerText = "2";
                  countdownElement.className = "green";
                  setTimeout(function () {
                    countdownElement.innerText = "1";
                    countdownElement.className = "saffron";
                    setTimeout(function () {
                      countdownElement.innerText = "Happy Independence Day";
                      countdownElement.className = "flag";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

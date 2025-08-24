/**
 * 2019 drhong web page
 */

var Dr = {};
(function (window, Constructor, undefined) {
  // Constructor
  var DrWeb = function () {
    that = this;
  };

  DrWeb.prototype = {
    init: function () {
      that.htmlLoad();
    },
    htmlLoad: function () {
      $(document).ready(function () {
        $("div[data-includeHTML]").each(function () {
          $(this).load($(this).attr("data-includeHTML"));
        });
        setTimeout(() => {
          Dr.Api.mainSet();
        }, 500);

        that.ipUpdate();
      });
    },
    ipUpdate: function () {
      fetch("https://app-music-node-socket.onrender.com/log/ip/home", {
        method: "GET",
      })
        .then((res) => res.json()) // 응답이 JSON이면
        .then((data) => {
          console.log("connected succeefully");
        })
        .catch((err) => {
          console.error("something went wrong!!", err);
        });
    },
    mainImage: function () {
      let imgTag = document.getElementById("mainImage");
      let imgArray = [
        "sa",
        "mot",
        "dw2",
        "webo",
        "mn",
        "bioMain",
        "rc",
        "webp",
        "delta",
        "dreffect",
        "mn",
        "teles",
        "rock",
        "drsaxCover",
      ];
      let number = Math.floor(Math.random() * imgArray.length);
      imgTag.src = `./img/${imgArray[number]}.jpg`;

      setInterval(() => {
        let number = Math.floor(Math.random() * imgArray.length);
        imgTag.src = `./img/${imgArray[number]}.jpg`;
      }, 2000);
    },
  };

  Constructor.data = DrWeb;
  DrWeb();
})(window, Dr);

var newWeb = new Dr.data(); // 객체필요
newWeb.__proto__.init(); //초기 로드해야함

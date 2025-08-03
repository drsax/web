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
      that.slide();
    },
    slide: function () {
      $(document).ready(function () {
        $(".slider-class").slick({
          autoplay: true, // 자동 재생
          autoplaySpeed: 2000, // 자동 재생 속도 (3초)
          dots: false, // 페이지네이션 점 표시
          arrows: false, // 좌우 화살표 숨기기
          infinite: true, // 무한 루프
          fade: true, // 페이드 효과 사용 (선택 사항)
        });
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

    preset: {
      // load_json :function(){
      // 	var jsondata = DrAJAX.LoadJsonData('./ajax/init.json'); //'./ajax/osc.xml'
      // 	console.log(jsondata.editor);
      // }
    },
  };

  Constructor.data = DrWeb;
  DrWeb();
})(window, Dr);

var newWeb = new Dr.data(); // 객체필요
newWeb.__proto__.init(); //초기 로드해야함


/**
 * 2019 drhong web page
 */

var Dr ={};
;(function (window, Constructor, undefined) {

	// Constructor
	var DrWeb = function(){
	    that = this;
	};

	DrWeb.prototype = {
		init : function() {

            that.htmlLoad();
   
        },
        htmlLoad: function() {
            $(document).ready(function () {

                that.mainImage();

                $("div[data-includeHTML]").each(function () {                
                    $(this).load($(this).attr("data-includeHTML")); 
                })
                setTimeout(()=>{
                    Dr.Api.mainSet();
                },1000);
            });
        },
        mainImage: function() {
            let imgTag = document.getElementById('mainImage');
            let imgArray = [
                "sa","mot","dw2","webo","mn","bioMain","rc","webp",
                "delta","dreffect","mn","teles","rock","drsaxCover"
            ];
            let number = Math.floor(Math.random() * imgArray.length);
            imgTag.src =`./img/${imgArray[number]}.jpg`

            setInterval(() => {
                let number = Math.floor(Math.random() * imgArray.length);
                imgTag.src =`./img/${imgArray[number]}.jpg`
            }, 2000);
        },
        
        preset :{
				// load_json :function(){
				// 	var jsondata = DrAJAX.LoadJsonData('./ajax/init.json'); //'./ajax/osc.xml'
				// 	console.log(jsondata.editor);
				// }
		}

	}; 


    Constructor.data = DrWeb;
    DrWeb();

})(window, Dr);

var newWeb= new Dr.data() // 객체필요
newWeb.__proto__.init(); //초기 로드해야함

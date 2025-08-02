Dr.Api = new function() {
    var that = this;

    // Dr.Api.navReset();
    this.mainSet= function(){
        let mainPage =$("#contentsId");
        $.get("./view/contents/bioSection.html?check=" + Date.now(), function (data) {
            mainPage.append(data);
        });
        $.get("./view/contents/contactSection.html?check=" + Date.now(), function (data) {
            mainPage.append(data);
        }); 
        // $.get("./view/contents/cvSection.html?check=" + Date.now(), function (data) {
        //     mainPage.append(data);
        // });   
    }
}
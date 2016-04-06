var max_id = 0; //for init
var current_max_id = 0; //for update
var storage = window.localStorage;
var timer;

/*
$(document).on("pagecreate",function(){
$.mobile.showPageLoadingMsg();
    } 
);
*/
$(document).ready(function(){
    loaded();
    //document.addEventListener('DOMContentLoaded', loaded, false); 
    /*
    if(storage.newstContent && !navigator.onLine){
    	$(storage.newstContent).appendTo("#thelist");
    	$("#thelist").trigger("create");
        myScroll.refresh();
        //alert(storage.content);
    }*/ 
});

$(document).on("pageinit",function(){
    $.getJSON(initMaxIDLink, function (data) {
            if (data.status == 'success') {
                //$.mobile.hidePageLoadingMsg();
                window.max_id = parseInt(data.id);
    			/*if(storage.newstContent && parseInt(storage.maxid) == window.max_id){
                    //$("#notice").show();
    				$(storage.getItem("newstContent")).appendTo("#thelist");
    				$("#thelist").trigger("create");
                    myScroll.refresh();
    			} */
    			if(parseInt(storage.maxid) < window.max_id || !storage.maxid || !storage.newstContent || true){
    			$.getJSON(initLink,function (data) {
                // create a variable to hold the parsed output from the server
                var output = [];
                //$.mobile.showPageLoadingMsg();
                // if the PHP script returned a success
                if (data.status == 'success') {
                    //$.mobile.hidePageLoadingMsg();
                    // iterate through the response rows
                    for (var key in data.items) {
                        var myString =data.items[key];
                        //myString = myString.Replace("\"", "&quot;");  
                        //myString = myString.Replace("\'", "&#39;"); 
                        //myString = myString.replace("\\n", "");
                        //myString = myString.replace("\r\n", "");
                        //myString = myString.replace("\\r\\n", "");
                        output.push('<li style="white-space:pre-wrap;" onclick="onClickLi();">' + myString + 
                        '<a href="#" save="false" class="ui-btn ui-corner-all ui-icon-heart ui-btn-icon-notext"></a>'+
                        '<a href="#" class="ui-btn ui-corner-all ui-icon-refresh ui-btn-icon-notext"></a></li>');
                    }
                    storage.clear();
                    storage.setItem("maxid",data.maxid);
                    storage.setItem("newstContent",output.join(''));
                // if the PHP script returned an error
                } else {
                    $("#notice").show();
                    output.push('<li>出错</li>');
                }
                $(output.join('') ).appendTo("#thelist");
                $("#thelist").trigger("create");
                $("a.ui-icon-heart").on("tap",function(){
    				if ($(this).attr("save")=="false"){
    					$(this).css("background-color","red");
    					$(this).attr("save","true");
    					return;
    				}
    				if($(this).attr("save")=="true"){
    					$(this).css("background-color","transparent");
    					$(this).attr("save","false");
    				}
                });
                myScroll.refresh();
                });        
                }			
            }
    });
    //show update notice when there is new duanzi.
    timer = window.setInterval(
        function(){
            $.getJSON(initMaxIDLink, function (data) {
                    if (data.status == 'success') {
                        window.current_max_id = parseInt(data.id);
            			if(storage.newstContent && parseInt(storage.maxid) < window.current_max_id){
                            $("#newdz_notice").show();
            			} 			
                    }
            });
        },60000);
}); 


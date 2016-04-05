var max_id = 0;
var storage = window.localStorage;
//if(storage.content){
if(storage.content && !navigator.onLine){
	$(storage.getItem("content")).appendTo("#thelist");
	$("#thelist").trigger("create");
} 

$.getJSON('<api address>', function (data) {
        if (data.status == 'success') {
            window.max_id = parseInt(data.id);
			/*if(storage.content && parseInt(storage.maxid) == window.max_id){
				$(storage.getItem("content")).appendTo("#thelist");
				$("#thelist").trigger("create");
			}*/ 
			//if(parseInt(storage.maxid) < window.max_id || !storage.maxid || !storage.content){
			if(true){
			$.getJSON('<api address>',function (data) {
            // create a variable to hold the parsed output from the server
            var output = [];
            // if the PHP script returned a success
            if (data.status == 'success') {
                // iterate through the response rows
                for (var key in data.items) {
                    var myString =data.items[key];
                    myString = myString.replace("\\n", "");
                    myString = myString.replace("\r\n", "");
                    myString = myString.replace("\\r\\n", "");
                    output.push('<li style="white-space:pre-wrap;">' + myString + '<a href="#" class="ui-btn ui-corner-all ui-icon-heart ui-btn-icon-notext">图标</a></li>');
                }
                storage.clear();
                storage.setItem("maxid",data.maxid);
                storage.setItem("content",output.join(''));
            // if the PHP script returned an error
            } else {
                output.push('<li>No Data Found</li>');
            }
            $(output.join('') ).appendTo("#thelist");
            $("#thelist").trigger("create");
            $("a.ui-icon-heart").on("tap",function(){
                $(this).css("background-color","red");
				$(this).css("color","red");
            });
        });        
    }			
			
			
        }
});


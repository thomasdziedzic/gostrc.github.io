$(function () {
    var stripNonATags = function (unstripped) {
        var stripNonATagsRegex = /<(?!\/?a(?=>|\s.*>))\/?.*?>/g;
        var stripped = unstripped.replace(stripNonATagsRegex, "");
        return stripped;
    };
    
    $("#input").on('paste', function(e){
        for(item in e.originalEvent.clipboardData.items) {
            var obj = e.originalEvent.clipboardData.items[item];
            if(obj.type === "text/html") {
                obj.getAsString(function(s) {
                    $("#input").val(s);
                    $("#input").change();
                });
            }
        }
    });

    $("#input").change(function () {
        var unstripped = $(this).val();
        var stripped = stripNonATags(unstripped);
        $("#output").val(stripped);
    });
});

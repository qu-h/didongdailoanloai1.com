this.previewPreview = function() {
    /* CONFIG */
    xOffset = 10;
    yOffset = 30;
    /* END CONFIG */

    $("a.preview").hover(function(e) {
        this.t = this.title;
        this.title = "";
        var c = (this.t != "") ? "<br/>" + this.t : "";
        $("body").append("<p id='preview'><img src='" + this.rel + "' alt='Đang tải ảnh ... ' />" + c + "</p>");
        $("#preview")
                .css("top", (e.pageY - xOffset) + "px")
                .css("left", (e.pageX + yOffset) + "px")
                .fadeIn("fast");
    },
            function() {
                this.title = this.t;
                $("#preview").remove();
            });
    $("a.preview").mousemove(function(e) {
        $("#preview")
                .css("top", (e.pageY - xOffset) + "px")
                .css("left", (e.pageX + yOffset) + "px");
    });
};

// starting the script on page load
$(document).ready(function() {
    previewPreview();
});
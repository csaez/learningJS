function task(text, list) {
    this.span = $(document.createElement("span"));
    this.span.text(text);

    this.cbox = $(document.createElement("input"));
    this.cbox.attr("type","checkbox");

    this.edit = $(document.createElement("input"));
    this.edit.attr("type", "text");
    this.edit.toggleClass("hide");

    this.li = $(document.createElement("li"));
    this.li.append(this.cbox, this.span, this.edit);
    $(list).append(this.li)

    this.span.on("click", function(){
        $(this).toggleClass("hide");
        var edit = $(this).siblings("input:text");
        edit.val($(this).text());
        edit.toggleClass("hide");
        edit.focus();
    });

    this.edit.on("blur", function(){
        $(this).toggleClass("hide");
        var span = $(this).siblings("span");
        span.text($(this).val());
        span.toggleClass("hide");
    });

    this.edit.on("keyup", function(e){
        if (e.key == "Enter") $(this).blur();
    });

    this.cbox.on("click", function(){
        $(this).parent().toggleClass("checked")
    });
};
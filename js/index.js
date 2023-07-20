$(window).on("load",()=>{
    $(".click").on("click",(e)=>{
        let vari=$(e.target).attr('src');
        let img=$(".big");
        $(".big .popup").attr('src',vari);
        img.addClass("active");
        let src=$("#third");
        src.addClass("none");
    })
    $(".cancel").on("click",()=>{
        let img=$(".big");
        img.removeClass("active");
        let src=$("#third");
        src.removeClass("none");
        src.removeClass("active");
    })
    $(".clickable").on("click",()=>{
        let src=$("#third");
        src.addClass("active");
    })
    $(".canc").on("click",()=>{
        let src=$("#third");
        src.removeClass("active");
    })

});
//var a = 111;
//console.log(a);

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    if(scrollTop>=1000&&scrollTop<=2500){
        $("#zhu1").addClass("zhu1_mv");
        $("#zhu2").addClass("zhu2_mv");
        $("#zhu3").addClass("zhu3_mv");
        $("#zhu4").addClass("zhu4_mv");

        $("#c3_top_p1").addClass("c3_top_p1_mv");
        $("#c3_top_p2").addClass("c3_top_p2_mv");
        $("#c3_top_p3").addClass("c3_top_p3_mv");
        $("#c3_top_p4").addClass("c3_top_p4_mv");
        $("#up_line").addClass("up_line_mv");

    } else if(scrollTop<1000){
        $("#zhu1").removeClass("zhu1_mv");
        $("#zhu2").removeClass("zhu2_mv");
        $("#zhu3").removeClass("zhu3_mv");
        $("#zhu4").removeClass("zhu4_mv");

        $("#c3_top_p1").removeClass("c3_top_p1_mv");
        $("#c3_top_p2").removeClass("c3_top_p2_mv");
        $("#c3_top_p3").removeClass("c3_top_p3_mv");
        $("#c3_top_p4").removeClass("c3_top_p4_mv");

        $("#up_line").removeClass("up_line_mv");
    }

    if(scrollTop>=2600&&scrollTop<=3900){

        $("#suo_body").addClass("suo_allthing");
        $(".blue").addClass("blue_mv");
        $(".green").addClass("green_mv");
        $(".orange").addClass("orange_mv");

    } else if(scrollTop<2600){
        $("#suo_body").removeClass("suo_allthing");
        $(".blue").removeClass("blue_mv");
        $(".green").removeClass("green_mv");
        $(".orange").removeClass("orange_mv");
    }
    //.in_c_show,.out_c_show,.number_show{
    if(scrollTop>=1625&&scrollTop<=2500){

        $(".in_c").addClass("in_c_show");
        $(".out_c").addClass("out_c_show");
        $(".number").addClass("number_show");
        $(".ge").addClass("ge_mv");
        $(".shi").addClass("shi_mv");
        $(".bai").addClass("bai_mv");
        $(".clean_list1").addClass("clean_list_show");
        $(".doclean").addClass("doclean_show ");
        $(".clean_tools").addClass("tools_show");
        $(".clean_tools").addClass("tools_mv");

        $(".gou1").addClass("gou1_show");
        $(".gou2").addClass("gou2_show");
        $(".gou3").addClass("gou3_show");
        $(".gou4").addClass("gou4_show");
        $(".gou5").addClass("gou5_show");
        $(".dagou").addClass("clean_over_show");

        $(".shuazi_before_clean").addClass("before_clean_mv");
        $(".huojian_before_clean").addClass("before_clean_mv");
        $(".dun_before_clean").addClass("before_clean_mv");
        $(".shuazi_after_clean").addClass("after_clean_mv");
        $(".huojian_after_clean").addClass("after_clean_mv");
        $(".dun_after_clean").addClass("after_clean_mv");

    } else if(scrollTop<1900){
        $(".in_c").removeClass("in_c_show");
        $(".out_c").removeClass("out_c_show");
        $(".number").removeClass("number_show");
        $(".ge").removeClass("ge_mv");
        $(".shi").removeClass("shi_mv");
        $(".bai").removeClass("bai_mv");
        $(".clean_list1").removeClass("clean_list_show");
        $(".doclean").removeClass("doclean_show ");
        $(".clean_tools").removeClass("tools_show");
        $(".clean_tools").removeClass("tools_mv");
        $(".gou1").removeClass("gou1_show");
        $(".gou2").removeClass("gou2_show");
        $(".gou3").removeClass("gou3_show");
        $(".gou4").removeClass("gou4_show");
        $(".gou5").removeClass("gou5_show");
        $(".dagou").removeClass("clean_over_show");

        $(".shuazi_before_clean").removeClass("before_clean_mv");
        $(".huojian_before_clean").removeClass("before_clean_mv");
        $(".dun_before_clean").removeClass("before_clean_mv");
        $(".shuazi_after_clean").removeClass("after_clean_mv");
        $(".huojian_after_clean").removeClass("after_clean_mv");
        $(".dun_after_clean").removeClass("after_clean_mv");
    }
})



$(".container7_right_play").click(function(){
    console.log(111111);
    if($(".comment1").hasClass('comment_fly')){
        console.log(666)


    }else{
        $(".comment1").addClass("comment_fly").removeClass("comment_com");
        $(".comment2").addClass("comment_com");

        return;
    }


    if($(".comment2").hasClass('comment_com')){
        $(".comment2").removeClass("comment_com").addClass("comment_fly");
        $(".comment3").addClass("comment_com");
        $(".comment1").removeClass("comment_com");
        return;

    }

    if($(".comment3").hasClass('comment_com')){
        $(".comment3").removeClass("comment_com").addClass("comment_fly");
        //$(".comment2").addClass("comment_fly");
        $(".comment4").addClass("comment_com").removeClass("comment_fly");
        //$(".comment1").removeClass("comment_fly");
        return;

    }


    if($(".comment4").hasClass('comment_com')){
        $(".comment4").removeClass("comment_com").addClass("comment_fly");
        //$(".comment2").addClass("comment_fly");
        $(".comment1").addClass("comment_com").removeClass("comment_fly");
        $(".comment2").removeClass("comment_fly");
        $(".comment3").removeClass("comment_fly");
        return;

    }

    //if($(".comment1").hasClass('comment_com')){
    //    $(".comment1").removeClass("comment_com").addClass("comment_fly");
    //    $(".comment2").addClass("comment_com");
    //    $(".comment4").removeClass("comment_fly");
    //    return;
    //
    //}

})











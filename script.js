$(function(){

  $(".gl").click(function(){
    $("#side_main").css("display","none");
    $("#hos_intro").css("display","none");
    $("#medical_intro").css("display","block");
    $("#staff_intro").css("display","none");
    $("#access").css("display","none");
  });
  $(".bl").click(function(){
    $("#side_main").css("display","none");
    $("#hos_intro").css("display","none");
    $("#medical_intro").css("display","block");
    $("#staff_intro").css("display","none");
    $("#access").css("display","none");
  });


   $("#top").click(function(){
     $("#side_main").css("display","block");
     $("#hos_intro").css("display","none");
     $("#medical_intro").css("display","none");
     $("#staff_intro").css("display","none");
     $("#access").css("display","none");
   });
  $("#hosp").click(function(){
    $("#side_main").css("display","none");
    $("#hos_intro").css("display","block");
    $("#medical_intro").css("display","none");
    $("#staff_intro").css("display","none");
    $("#access").css("display","none");
  });
  $("#medic").click(function(){
    $("#side_main").css("display","none");
    $("#hos_intro").css("display","none");
    $("#medical_intro").css("display","block");
    $("#staff_intro").css("display","none");
    $("#access").css("display","none");
  });
  $("#staff").click(function(){
    $("#side_main").css("display","none");
    $("#hos_intro").css("display","none");
    $("#medical_intro").css("display","none");
    $("#staff_intro").css("display","block");
    $("#access").css("display","none");
  });
  $("#acce").click(function(){
    $("#side_main").css("display","none");
    $("#hos_intro").css("display","none");
    $("#medical_intro").css("display","none");
    $("#staff_intro").css("display","none");
    $("#access").css("display","block");
  });




});

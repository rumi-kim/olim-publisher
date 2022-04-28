$(function(){

  // footer dropdown
  $(".dropdown_name").on("click", function(){
    $(".ico_act").toggleClass("is_active");
    $(this).siblings(".dropdown_list").slideToggle(200)
  })
})
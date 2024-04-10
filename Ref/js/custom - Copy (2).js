$(document).ready(function(){
  $(function() {
    $('.accordion-header').click(function(j) {
      
      var dropDown = $(this).closest('.acc_card').find('.accordion-content');
      $(this).closest('.acc').find('.accordion-content').not(dropDown).slideUp();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(this).closest('.acc').find('.accordion-header.active').removeClass('active');
        $(this).addClass('active');
      }
      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    });
  });
  
  $(".accor_arrow_left").click(function(){
    $(".harmacy_kit_head").addClass("pharmacy_kit_active")
    $(".accor_arrow_right").addClass("active_arrow")
    if($(".message_tab").hasClass("active_message")){
      console.log("true")
    }
  })
  $(".accor_arrow_right").click(function(){
    $(".harmacy_kit_head").removeClass("pharmacy_kit_active")
    $(".accor_arrow_right").removeClass("active_arrow")
  })
  $(".chat_toggle").click(function(){
    $(".dashbord-message-left").toggleClass("toggle_pharmacy_kit");
   
    $(".message_tab").toggleClass("active_message")
  //  if($(".harmacy_kit_head").hasClass("pharmacy_kit_active")) 
  //   {
  //     console.log("true")
  //   }
    
    
  })
  $(".dash_board_chat").click(function(){
    $(".dashboard_row").toggleClass("active")
    $(this).toggleClass("dash_active")
    // if( $(".dashboard_row>div:first-child").hasClass("col-lg-12"))
    // {
    //   $(this).removeClass("dash_active")
    //   $(".dashboard_row>div:first-child").attr("class","col-lg-8")
    //   $(".dashboard_row>div:nth-child(2)").attr("class","col-lg-4")
    // }
    // else{
    //   $(this).addClass("dash_active")
    //   $(".dashboard_row>div:first-child").attr("class","col-lg-12")
    //   $(".dashboard_row>div:nth-child(2)").attr("class","col-lg-0 dashboard_unset")
    // }
  })
  $(" .dropdown_btn").click(function(){
    let id= $(this).attr("data-id");
    console.log(id)
    $(`#drop_sample_${id}`).slideToggle()
  })
})
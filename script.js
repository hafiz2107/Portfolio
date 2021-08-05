$(document).ready(function(){

  $("#submit-form").validate({
    rules:{
        name:{
            required:true,
            minlength:4,
        },
        email:{
            required:true,
            email:true
        }
       
    },
    submitHandler:function(form){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwNw8kk5Vh6erRklyWsFN0CEo6Y2UCeBHHk_1d9gwF3B4MkNHImCTlSAd2gMaGMzel3/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Thank You !!")
                window.location("#aboutme")
            },
            error:function (err){
                alert("Something Error")
            }
        })
    }
})
})


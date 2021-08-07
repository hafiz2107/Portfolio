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
          },
          company:{
              required:true,
              minlength:5
          },
          mobile:{
              required:true,
              number:true,
              minlength:10,
              maxlength:10
              
          },
          cmnt:{
              required:true,
              minlenght:10
          }
         
      },
   submitHandler:function(form){
              $.ajax({
                  url:"https://script.google.com/macros/s/AKfycbwNw8kk5Vh6erRklyWsFN0CEo6Y2UCeBHHk_1d9gwF3B4MkNHImCTlSAd2gMaGMzel3/exec",
                  data:$("#submit-form").serialize(),
                  method:"post",
                  success:function (response){
                      alert("Submitted successfully")
                      window.location.reload()
                  },
                  error:function (err){
                      alert("Something Error")
                  }
              })
          }
      })
  })
  
  
  
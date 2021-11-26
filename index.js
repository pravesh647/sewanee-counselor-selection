/* Using Jquery
 * Takes the value of the selected optionand Leads the user to the counselor based on their choice.
 * Each counselor is assigned a number.
 * Each option has a one of the number assigned each counselors as its value
 * 
 * Value = Counselor
 * c1 = Taylor Baird
 * c2 = Shiro Burnette
 * c3 = Lisa Burns
 * c4 = Sarah Butler
 * c5 = Jeff Heitzenrater
 * c6 = Reece Jamison
 * c7 = Tim Neil
 * c8 = Lateishia Spencer
 * c9 = Faith Vaughn
 * c10 = Nancy York
 * 
 */

$(document).ready(
  function(){
    $('#go').click(
      function(e){
        var x = $("#studentState :selected").val(); // The value of the selected option
        // document.getElementById("debug").innerHTML= x;

        var c1 = "https://new.sewanee.edu/admission-aid/admission-counselors/taylor-baird/";
        var c2 = "https://new.sewanee.edu/admission-aid/admission-counselors/shiro-burnnette/";
        var c3 = "https://new.sewanee.edu/admission-aid/admission-counselors/lisa-burns/";
        var c4 = "https://new.sewanee.edu/admission-aid/admission-counselors/sarah-butler/";
        var c5 = "https://new.sewanee.edu/admission-aid/admission-counselors/jeff-heitzenrater/";
        var c6 = "https://new.sewanee.edu/admission-aid/admission-counselors/reece-jamison/";
        var c7 = "https://new.sewanee.edu/admission-aid/admission-counselors/tim-neil/";
        var c8 = "https://new.sewanee.edu/admission-aid/admission-counselors/lateishia-spencer/";
        var c9 = "https://new.sewanee.edu/admission-aid/admission-counselors/faith-vaughn/";
        var c10 = "https://new.sewanee.edu/admission-aid/admission-counselors/nancy-york/";


        if (x == "1") {
          window.location.href = c1;
        }
        else if (x == "2") {
          window.location.href = c2;
        }
        else if (x == "3") {
          window.location.href = c3;
        }
        else if (x == "4") {
          window.location.href = c4;
        }
        else if (x == "5") {
          window.location.href = c5;
        }
        else if (x == "6") {
          window.location.href = c6;
        }
        else if (x == "7") {
          window.location.href = c7;
        }
        else if (x == "8") {
          window.location.href = c8;
        }
        else if (x == "9") {
          window.location.href = c9;
        }
        else if (x == "10"){
          window.location.href = c10;
        }
        else if(x == "GA"){
          var xGA = $("#GAAreas :selected").val();  // The value of the GAAreas seleeted option.
          if(xGA == "1"){
            window.location.href = c1;
          }
          else if (xGA == "2"){
            window.location.href = c2;
          }
          else{
            window.alert("Please select the area");
          }
        }
        else if(x == "NC"){
          var xNC = $("#NCAreas :selected").val();  // The value of the GAAreas seleeted option.
          if(xNC == "5"){
            window.location.href = c5;
          }
          else if (xNC == "1"){
            window.location.href = c1;
          }
          else{
            window.alert("Please select the area");
          }
        }
        else if(x == "PA"){
          var xPA = $("#PAAreas :selected").val();  // The value of the GAAreas seleeted option.
          if(xPA == "8"){
            window.location.href = c8;
          }
          else if (xPA == "3"){
            window.location.href = c3;
          }
          else{
            window.alert("Please select the area");
          }
        }
        else if(x == "TN"){
          var xTN = $("#TNAreas :selected").val();  // The value of the GAAreas seleeted option.
          if(xTN == "4"){
            window.location.href = c4;
          }
          else if (xTN == "9"){
            window.location.href = c9;
          }
          else{
            window.alert("Please select the area");
          }
        }
        else{
          window.alert("Please select your state");
        }
        
      }
    );
  }
);  


// -------------------------------------

$(document).ready(
  function(){

    $('#studentState').change(
      function(e){
        var x = $('#studentState :selected').val();
        if (x == "TN") {
          $('.areas').hide();
          $('#TNAreas').show();
        }
        else if (x == "GA") {
          $('.areas').hide();
          $('#GAAreas').show();
        }
        else if (x == "PA") {
          $('.areas').hide();
          $('#PAAreas').show();
        }
        else if (x == "NC"){
          $('.areas').hide();
          $('#NCAreas').show();
        }
        else {
          $('.areas').hide();          
        }


      }

    );

  }
);
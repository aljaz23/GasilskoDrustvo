function checkForm(){
   var imePriimek = document.getElementById("Imepri").value;
   var email = document.getElementById("email").value;
   var tel = document.getElementById("tel").value;
   var vsebina = document.getElementById("vsebina").value;
   var stevec=0;
 
   if (imePriimek == "") {

          document.getElementById('Imepri').style.border = "1px solid red";
          stevec = stevec + 1;
        }
        if (email == "") {
          document.getElementById('email').style.border = "1px solid red"
          stevec = stevec + 1;
        }
        if (tel == "") {
          document.getElementById('tel').style.border = "1px solid red"
          stevec = stevec + 1;
        }
        if (vsebina == "") {
          document.getElementById('vsebina').style.border = "1px solid red"
          stevec = stevec + 1;
        }
        if (stevec > 0) {
           return false;
        }
        return true;
      }





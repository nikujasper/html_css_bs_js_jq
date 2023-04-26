
function fun1() {
          var  ab = document.getElementById("e1").value;
           var cd = document.getElementById("p1").value;
            localStorage.setItem("email", ab);
            localStorage.setItem("password", cd);
        }

        function fun2(){
           var  ef=document.getElementById("e2").value;
           var  gh=document.getElementById("p2").value;

             if(localStorage.getItem("email")==ef && localStorage.getItem("password")==gh){
                sessionStorage.setItem("email",ef);
        sessionStorage.setItem("password",gh);
             }
             else{
               alert("Invalid Credentials");
             }
            

        }

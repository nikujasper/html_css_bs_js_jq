

function fun1() {
          let  u1 = document.getElementById("unit1").value;
           let p1 = document.getElementById("price1").value;
           let u2= document.getElementById("unit2").value;
           let p2= document.getElementById("price2").value;

          u1=Number(u1);

          u2=Number(u2);
           let sum1=u1*p1;
           let sum2=p2*u2;
           let  tunit=u1+u2;

           let amt=sum1+sum2;
           let avp= amt/tunit;
            
             $("#tu").val(tunit);
             $("#ap").val(avp);
              $("#ta").val(amt);

      
           
}

function fun2() {
     $("#hd").show();
    
  }
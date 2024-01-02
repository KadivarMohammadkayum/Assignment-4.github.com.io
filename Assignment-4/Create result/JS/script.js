function calculate(){
    var num1 = document.getElementById("c").value;
var num2 = document.getElementById("clang").value;
var num3 = document.getElementById("data").value;
var num4 = document.getElementById("html").value;
var num5 = document.getElementById("css").value;
var num6 = document.getElementById("php").value;
var num7 = document.getElementById("java").value;

    if ( num1>100 || num2>100 || num3>100 || num4>100 || num5>100 || num6>100 || num7>100 ) {
        alert( "Please Enter The Correct Value");
    }
    else{
        var sum = parseFloat(num1) +  parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5) + parseFloat(num6) + parseFloat(num7);
        document.getElementById("obtain").innerHTML="Obtain :" + sum ;
        var per=sum/700*100;
        document.getElementById("persen").innerHTML="persentage :" + per;
    }
}




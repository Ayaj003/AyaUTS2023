function multi(){
var first=document.getElementById("firstNum").value;
var second=document.getElementById("secNum").value;
var result= first*second;
document.getElementById("res").innerHTML=result;
if ((first==null || first=="") || (second==null|| second=="")){
    alert("No values!")
}
    }

function divide(){
    var first=document.getElementById("firstNum").value;
    var second=document.getElementById("secNum").value;
    var result= first/second;
    document.getElementById("res").innerHTML=result;
    if ((first==null || first=="") || (second==null|| second=="")){
        alert("No values!")
    }
    }
    
function convert(){
    var cels=document.getElementById("cels").value;
    var fahr=document.getElementById("fahr").value;
    var result;
    if(cels==null || cels==""){
        result=(fahr-32)/1.8;
    }
    if(fahr==null || fahr==""){
        result=(cels*1.8) + 32;
    }
    if ((cels==null || cels=="") && (fahr==null|| fahr=="")){
        alert("No values!")
    }
    document.getElementById("res2").innerHTML=result;
    }
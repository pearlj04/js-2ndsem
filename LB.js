function onfunc(){
    document.getElementById("bbtp").style.backgroundColor="gold"; document.getElementById("bbtp").style.boxShadow="0px 10px 65px gold,0px -4px 15px gold,15px 20px 50px gold,-15px 20px 50px gold,0px 25px 50px gold,-5px 15px 50px gold"; document.getElementById("bod").style.backgroundColor="yellow";
document.getElementById("bod").style.color="black";
document.getElementById('on').style.backgroundColor="lawngreen";
document.getElementById("on").style.boxShadow="0px 5px 10px";
document.getElementById("on").style.outline="none";
document.getElementById("bbtp").style.transition="all 0.2s linear";
document.getElementById("bod").style.transition="all 0.2s ease";
document.getElementById("text").style.color="yellow";
document.getElementById("text").style.transition="all 0ms ease"
};

function offfunc(){
    document.getElementById('bbtp').style.backgroundColor="#efefef";document.getElementById("bbtp").style.boxShadow=null;    document.getElementById("on").style.backgroundColor="green";
document.getElementById("on").style.boxShadow=null;
document.getElementById("bod").style.backgroundColor="grey";
document.getElementById("bod").style.color='grey';
document.getElementById("bod").style.transition="all 0s ease";
document.getElementById("text").innerHTML= "HI SIR!";
document.getElementById("text").style.color="skyblue";
}
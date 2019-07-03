var myage=28;
var ignasiage=32;

function exercise1(){
    var myname="yolanda";
    console.log(myname);

}

exercise1();


function exercise2(){
    console.log(myage);

}

exercise2();

function exercise3(){
    console.log (ignasiage-myage);
}

exercise3()

function exercise4(){

    if (myage > 21){
        console.log ("You are older than 21")
    } else {
        console.log ("You are not older than 21")
    };
    
}
exercise4()

function exercise5(){
    if (myage > ignasiage){
        console.log ("Ignasi is younger than you")
    } else if (myage < ignasiage) {
        console.log ("Ignasi is older than you")
    } else if (myage === ignasiage){
        console.log ("You have the same age as Ignasi")
    }
}

exercise5()

var classnames = ["Yolanda","Marta","Alex","Lluis","Nona","Amaia","Irene","Romina","Mar"];
function exercise6(){
    classnames.sort();
    console.log (classnames)
}
    
exercise6()

function exercise7(){
    var last = classnames[classnames.length - 1];
    console.log (classnames)
}
    
exercise7()



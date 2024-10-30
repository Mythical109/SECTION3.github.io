//Clever... Alright, we'll let that slide

//ABOUT
var a = new Image();
a.src = 'chasersAbout.png';
a.setAttribute('width', 500);
a.setAttribute('height', a.height/4);


//CH2
var b = new Image();
b.src = 'ch2.png';
b.setAttribute('width', 500);
b.setAttribute('height', 733);


//CH4
var c = new Image();
c.src = 'ch4.png';
c.setAttribute('width', 500);
c.setAttribute('height', 733);
c.addEventListener('click', openImg);

//CH5
var d = new Image();
d.src = 'ch5.png';
d.setAttribute('width', 500);
d.setAttribute('height', 733);
d.title = '10. o  4. l';


var k = new Image();
k.src = 'steganography.png';
k.setAttribute('width', 500);
k.setAttribute('height', 733);
k.setAttribute('id', 'steg');

var LOGO = new Image();
LOGO.src = 'HUB.png';


var i = 0;
var e = 0;

var o = 0;

var h = false;

var t = document.createTextNode('6. r 1.e  9. i');

var f = false;

var newImg = false;




var speed  = 65;
var welcomeMessage = 'You have been delegated to the branch Chasers. Please look through the provided information and resources, and work through the challenges presented.';
var goodLuck = 'Godspeed, and good luck.';

var interludeMessage = 'Congratulations for making it this far, Section 3. You have made it to the half-way point of this exercise. Please indicate that you are ready for the second half by requesting a copy of \"Brave New World\".'+
' Once you have acuired the book, you may continue.';

var ans2 = false;
var ans3 = false;
var ans4 = false;
var ans5 = false;




function typeWelcome(){

    if (i<welcomeMessage.length){
        document.getElementById('welcomeP').innerHTML += welcomeMessage.charAt(i);
        i++;
        setTimeout(typeWelcome, speed);
    }

    if(i == welcomeMessage.length){
        document.getElementById('welcomeP').innerHTML += '<br><br>';
        setTimeout(typeGoodLuck, speed);
    }//End of if

}//End of function

function typeGoodLuck(){

    if (e<goodLuck.length){
        document.getElementById('welcomeP').innerHTML += goodLuck.charAt(e);
        e++;
        setTimeout(typeGoodLuck, speed);
    }
}//End of typeGoodLuck






function aboutLoadImg(){
    console.log('2. x  5.o  8.t');
    document.getElementById('aboutImg').appendChild(a);
}//End of aboutLoadImg()


function ch2LoadImg(){
    newImg = false;
    f = true;

    switch(o){
        case 2:
            document.getElementById('resourceImgDiv').removeChild(c);
            break;

        case 3:
            document.getElementById('resourceImgDiv').removeChild(d);
            break;


        default:

    }//End of switch()

    o = 1;

    f = true;

    document.getElementById('resourceImgDiv').appendChild(b);

    document.getElementById('m').appendChild(t);

}//End of cAndtLoadImg()

function ch4LoadImg(){
    newImg = false;
    
    switch(o){
        case 1:
            document.getElementById('resourceImgDiv').removeChild(b);
            break;

        case 3:
            document.getElementById('resourceImgDiv').removeChild(d);
            break;

        default:
            
    }//End of switch()

    o = 2;

    if(f){
        document.getElementById('m').removeChild(t);
        f = false;
    }//End of if

    document.getElementById('resourceImgDiv').appendChild(c);
}//End of caesarLoadImg()

function ch5LoadImg(){
    newImg = false;

    switch(o){
        case 1:
            document.getElementById('resourceImgDiv').removeChild(b);
            break;

        case 2:
            document.getElementById('resourceImgDiv').removeChild(c);
            break;

        default:
            
    }//End of switch()

    o = 3;

    if(f){
        document.getElementById('m').removeChild(t);
        f = false;
    }//End of if

    document.getElementById('resourceImgDiv').appendChild(d);


    
}//End of binaryLoadImg()





function openImg(){
    window.open('ch4Alt.png');
}//End of checkImg



//PASSWORD

function answer(){
    var res = document.getElementById('pass1').value;

    if(res.toUpperCase() == 'EXPLORATION'){
        window.open('interlude3.html', '_self') ;
    }//End of if

    else {
        window.alert('Incorrect');
    }//End of else


}//End of function answer


function merp(){
    console.log('welcome1.html');
    typeInterlude();
}//End of merp

function typeInterlude(){
    document.getElementById('interludeP').innerHTML += interludeMessage.charAt(o);

    if(o<interludeMessage.length){
        o++;
        setTimeout(typeInterlude, speed);
    }

}//End of typeInterlude()


function readyFile(){
    document.getElementById('fileImg').appendChild(k);
}//End of readyFile


function finalAnswer(){

    var wrong = 'Questions ';
    var numOfWrong = 0;

    var w = document.getElementById('pass2').value;

    var x = document.getElementById('pass3').value;

    var y = document.getElementById('pass4').value;

    var z = document.getElementById('pass5').value;



    if(w.toUpperCase() == 'CAUGHT'){
        ans2 = true;
    }//End of if
    else{
        ans2 = false;
        wrong += '1, ';
    }// End of else

    if(x.toUpperCase() == 'FIND'){
        ans3 = true;
        numOfWrong++;
    }//End of if
    else{
        ans3 = false;
        wrong += '2, ';
        numOfWrong++;
    }//End of else


    if(y.toUpperCase() == 'REALITY-BENDING'){
        ans4 = true;

    }//Edn of if
    else{
        ans4 = false;
        wrong += '3, ';
        numOfWrong++;
    }//End of else

    if(z.toUpperCase() == 'GET'){
        ans5 = true;
    }//End of if
    else{
        ans5 = false;
        wrong += '4, ';
        numOfWrong++;
    }//End of else



    if(ans2 && ans3 && ans4 && ans5){
        window.open('congrats3.html', '_self');
    }//End of if
    else {
        if(numOfWrong>1){
            wrong+= 'are wrong';
        }//End of inner if
    
        else{
            wrong+= 'is wrong';
        }//End of inner else
    
        window.alert(wrong);
    }//End of else

}//End of finalAnswer

var congrats = 'Congratulations, Chasers. You have successfully made it to the end of the exercise. You have done well on both learning the ropes and collaborating with your team. Please let your instructor know that you are finished by returning your section\’s book.'

var thanks = 'Thank you again. We\’ll be in touch soon.';

var hub = 'H.U.B. Recuitment';

var num = 0;
var num2 = 0;
var num3 = 0;


function typeCongrats(){
    document.getElementById('congratsP').innerHTML += congrats.charAt(num);

    if(num<congrats.length){
        num++;
        setTimeout(typeCongrats, speed);
    }

    if(num == congrats.length){
        document.getElementById('congratsP').innerHTML += '<br>';
        speed +=40;
        setTimeout(typeThanks, speed);
    }//End of if

}//End of typeInterlude()

function typeThanks(){
    document.getElementById('congratsP').innerHTML += thanks.charAt(num2);

    if(num2<thanks.length){
        num2++;
        setTimeout(typeThanks, speed);
    }

    if(num2 == thanks.length){
        document.getElementById('congratsP').innerHTML += '<br>';
        setTimeout(typeHUB, speed);
    }//End of if

}//End of typeThanks


function typeHUB(){

    if(num3<hub.length){
        if(num3 == 0){
            document.getElementById('congratsP').appendChild(LOGO);
            document.getElementById('congratsP').innerHTML += '<br><br>';
        }//End of if
        document.getElementById('congratsP').innerHTML += hub.charAt(num3);
        num3++;
        setTimeout(typeHUB, speed);
    }//End of if
    
}//End of typeThanks



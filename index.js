var imageChange = document.getElementById('imagechange');
var btn1 = document.getElementsByClassName("color1");
var btn2 = document.getElementsByClassName("color2");
var btn3 = document.getElementsByClassName("color3");
var btn4 = document.getElementsByClassName("color4");
var btn5 = document.getElementsByClassName("color5");

function red(){
    imageChange.style.backgroundImage = "url('red.PNG')";
};
function blue(){
    imageChange.style.backgroundImage = "url('blue.PNG')";
};
function black(){
    imageChange.style.backgroundImage = "url('black.PNG')";
};
function pink(){
    imageChange.style.backgroundImage = "url('pink.PNG')";
};
function purple(){
    imageChange.style.backgroundImage = "url('purple.PNG')";
};
var t;
function startTime() {
    var time = document.getElementById('timer');
    time.style.visibility="visible";
    var image1 = document.getElementById('inside');
    image1.style.visibility="hidden";
    var number = document.getElementById('inside1');
    number.style.visibility="hidden";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = afternoon(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    time.innerHTML = h + "  : " + m + " : " + s;
    t = setTimeout(startTime, 1000);
};
function afternoon(j){
    if (j==13){
        return 1;
    }
    else{
        if (j==14){
            return 2;
        }
        else{
            if (j==15){
                return 3;
            }
            else{
                if (j==16){
                    return 4;
                }
                else{
                    if (j==17){
                        return 5;
                    }
                    else{
                        if (j==18){
                            return 6;
                        }
                        else{
                            if (j==19){
                                return 7;
                            }
                            else{
                                if (j==20){
                                    return 8;
                                }
                                else{
                                    if (j==21){
                                        return 9;
                                    }
                                    else{
                                        if (j==22){
                                            return 10;
                                        }
                                        else{
                                            if (j==23){
                                                return 11;
                                            }
                                            else{
                                                return 12;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};

var btn = document.getElementById('heart');
btn.addEventListener('click',function(){
    clearTimeout(t);
    var time1 = document.getElementById('timer');
    time1.style.visibility="hidden";
    var image11 = document.getElementById('inside');
    image11.style.visibility="visible";
    var number1 = document.getElementById('inside1');
    number1.style.visibility="visible";
    var random  = Math.random();
    number1.innerHTML=parseInt(random*(100-60)+60);
});

    
    



let dateDefault = ['Aekapat Chunwiriyakul','Film','26','Bachelors degree of Economics','Wichienmatu School','Prince of Songkhla University','Watching Movie','Swimming Basketball','fun and good person']

function nameClick(){
    var name = prompt("Where is your name?", dateDefault[0]);
    if(!name == ""){
        document.getElementById("name").innerHTML = name;
        dateDefault[0] = name;
    }
}

function nicknameClick(){
    var nickname = prompt("Where is your nick name?", dateDefault[1]);
    if(!nickname == ""){
        document.getElementById("nickname").innerHTML = nickname;
        dateDefault[1] = nickname;
    }
}


function ageClick(){
    var age = prompt("How old are you?", dateDefault[2]);
    if(!nickname == ""){
        document.getElementById("age").innerHTML = age;
        dateDefault[2] = age;
    }
}


function degreeClick(){
    var degree = prompt("What is your major?", dateDefault[3]);
    if(!degree == ""){
        document.getElementById("degree").innerHTML = degree;
        dateDefault[3] = degree;
    }
}

function gradeClick(){
    var gradesh = prompt("What is your grade school?", dateDefault[4]);
    if(!gradesh == ""){
        document.getElementById("gradesh").innerHTML = gradesh;
    }
}


function uniClick(){
    var uni = prompt("What is your university?", dateDefault[5]);
    if(!uni == ""){
        document.getElementById("uni").innerHTML = uni;
        dateDefault[5]
    }
}


function hobbyClick(){
    var hobby = prompt("What is your hobby?", dateDefault[6]);
    if(!hobby == ""){
        document.getElementById("hobby").innerHTML = hobby;
        dateDefault[6]
    }
}


function sportClick(){
    var uni = prompt("What is your fav sport?", dateDefault[7]);
    if(!sport == ""){
        document.getElementById("sport").innerHTML = sport;
        dateDefault[7]
    }
}


function traitsClick(){
    var uni = prompt("What is your traits?", dateDefault[8]);
    if(!uni == ""){
        document.getElementById("traits").innerHTML = traits;
        dateDefault[8]
    }
}

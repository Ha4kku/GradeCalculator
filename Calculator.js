function calculategrade() {
    var homeworkavg = calculateArray("Homework");
    var classworkavg = calculateArray("Classwork");
    var assessmentsavg = calculateArray("Tests");
    var participationavg = calculateArray("Participation");
    var hwaverage = calcWeight(homeworkavg, "Homework");
    var classwork = calcWeight(classworkavg, "Classwork");
    var testaverage = calcWeight(assessmentsavg, "Tests");
    var participationaverage = calcWeight(participationavg, "Participation");
    var grade2 = hwaverage + classwork + testaverage + participationaverage;

    return grade2;
}
function calculateArray(category) {
    var avg = 0;
    var string = document.getElementById(category).value;
    string = string.split(",");
    for(var i = 0; i < string.length; i++){
        avg += parseInt(string[i]);
    }

    avg = avg / string.length;

    return avg;

}
function calcWeight(avg, category){
    avg = calculateArray(category);
    var weight = document.getElementById(category + "weight").value;
    var total = 0;
    weight = weight / 100;
    total = weight * avg;


    return total;
}

function calculate(){
    check();
    calculategrade();
    gradecolor();

}
function finalGrade(grade){
    var weight = document.getElementById("Scoreweight").value;
    var desire = document.getElementById("Score").value;
    grade = calculategrade();

    weight = weight / 100;

    desire = (desire - grade) / weight;


    document.getElementById("grade").innerHTML = desire + "%";
    return desire;

}
function check(){
    var check1 = document.getElementById("Homeworkweight").value;
    var check2 = document.getElementById("Classworkweight").value;
    var check3 = document.getElementById("Testsweight").value;
    var check4 = document.getElementById("Participationweight").value;
    var check6 = document.getElementById("Scoreweight").value;
    var check5 = 0;
    var z = [check1, check2, check3, check4];

    for(var i = 0; i < 4; i ++){
        check5 += parseInt(z[i])
    }


    if(check5 != 100){
        alert("Make sure your weight values add up to 100%");
    }
}
function gradecolor(){

    if(calculateArray("Homework") >= 90){
        document.getElementById("Homeworkweight").style.backgroundColor = "chartreuse";
        document.getElementById("Homework").style.backgroundColor = "chartreuse";

    }else if(calculateArray("Homework") >= 80 && calculateArray("Homework") <= 89){
        document.getElementById("Homework").style.backgroundColor = "plum";
        document.getElementById("Homeworkweight").style.backgroundColor = "plum";

    }else if(calculateArray("Homework") >= 70 && calculateArray("Homework") <= 79){
        document.getElementById("Homework").style.backgroundColor = "#f8ff20";
        document.getElementById("Homeworkweight").style.backgroundColor = "#f8ff20";

    }else if(calculateArray("Homework") >= 60 && calculateArray("Homework") <= 69){
        document.getElementById("Homework").style.backgroundColor = "coral";
        document.getElementById("Homeworkweight").style.backgroundColor = "coral";

    }else if(calculateArray("Homework") < 60){
        document.getElementById("Homework").style.backgroundColor = "red";
        document.getElementById("Homeworkweight").style.backgroundColor = "red";
    }

    if(calculateArray("Classwork") >= 90){
        document.getElementById("Classworkweight").style.backgroundColor = "chartreuse";
        document.getElementById("Classwork").style.backgroundColor = "chartreuse";

    }else if(calculateArray("Classwork") >= 80 && calculateArray("Homework") <= 89){
        document.getElementById("Classwork").style.backgroundColor = "plum";
        document.getElementById("Classworkweight").style.backgroundColor = "plum";

    }else if(calculateArray("Classwork") >= 70 && calculateArray("Homework") <= 79){
        document.getElementById("Classwork").style.backgroundColor = "#f8ff20";
        document.getElementById("Classworkweight").style.backgroundColor = "#f8ff20";

    }else if(calculateArray("Classwork") >= 60 && calculateArray("Homework") <= 69){
        document.getElementById("Classwork").style.backgroundColor = "coral";
        document.getElementById("Classworkweight").style.backgroundColor = "coral";

    }else if(calculateArray("Classwork") < 60){
        document.getElementById("Classwork").style.backgroundColor = "red";
        document.getElementById("Classworkweight").style.backgroundColor = "red";
    }

    if(calculateArray("Tests") >= 90){
        document.getElementById("Testsweight").style.backgroundColor = "chartreuse";
        document.getElementById("Tests").style.backgroundColor = "chartreuse";

    }else if(calculateArray("Tests") >= 80 && calculateArray("Homework") <= 89){
        document.getElementById("Tests").style.backgroundColor = "plum";
        document.getElementById("Testsweight").style.backgroundColor = "plum";

    }else if(calculateArray("Tests") >= 70 && calculateArray("Homework") <= 79){
        document.getElementById("Tests").style.backgroundColor = "#f8ff20";
        document.getElementById("Testsweight").style.backgroundColor = "#f8ff20";

    }else if(calculateArray("Tests") >= 60 && calculateArray("Homework") <= 69){
        document.getElementById("Tests").style.backgroundColor = "coral";
        document.getElementById("Testsweight").style.backgroundColor = "coral";

    }else if(calculateArray("Tests") < 60){
        document.getElementById("Tests").style.backgroundColor = "red";
        document.getElementById("Testsweight").style.backgroundColor = "red";
    }

    if(calculateArray("Participation") >= 90){
        document.getElementById("Participationweight").style.backgroundColor = "chartreuse";
        document.getElementById("Participation").style.backgroundColor = "chartreuse";

    }else if(calculateArray("Participation") >= 80 && calculateArray("Homework") <= 89){
        document.getElementById("Participation").style.backgroundColor = "plum";
        document.getElementById("Participationweight").style.backgroundColor = "plum";

    }else if(calculateArray("Participation") >= 70 && calculateArray("Homework") <= 79){
        document.getElementById("Participation").style.backgroundColor = "#f8ff20";
        document.getElementById("Participationweight").style.backgroundColor = "#f8ff20";

    }else if(calculateArray("Participation") >= 60 && calculateArray("Homework") <= 69){
        document.getElementById("Participation").style.backgroundColor = "coral";
        document.getElementById("Participationweight").style.backgroundColor = "coral";

    }else if(calculateArray("Participation") < 60){
        document.getElementById("Participation").style.backgroundColor = "red";
        document.getElementById("Participationweight").style.backgroundColor = "red";
    }




}

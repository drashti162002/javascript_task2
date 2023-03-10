const form = document.getElementById('form');



function submit(){
    validation();
    var dataEntered = retriveData();
    console.log(dataEntered);
    var readData = readDataFromLocalStroage(dataEntered);
    console.log(readData);
    insert(readData);
}

function validation(){

    var name = document.getElementById("name").value;
    var validName=/^[A-Za-z]+$/;

    console.log(name);
    if (name==null || name==""){  
        alert("Please enter your name");  
        // name.focus();
        return false; 
    }
    else if(name.match(validName)){
        return true;
    }

    var email = document.getElementById("email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   

    console.log(email);
    if(email.match(validRegex)){
        // return true;
    }
    else if(email == ""){
        alert("Please enter your email"); 
        return false;
    }
    else{
        alert("Please enter your vaild email");
    }


    var number = document.getElementById("phoneNumber").value;

    console.log(number);
    if(number == null || number == "" || number.length!=10){
        alert("Please enter your vaild number");
        phoneNumber.focus();
        return false;
    }
    
    var birthday = document.getElementById("birthday").value;
    console.log(birthday);

    var time = document.getElementById("time").value;
    console.log(time);

    // var fColor = document.getElementById("fcolor").value;
    // fColor
    // console.log(fColor);

    // var paymentMethod = document.getElementById("paymentMethod").value;
    // console.log(paymentMethod);

    // var age = document.getElementById("age").value;
    // console.log(age);

    // var cOption = document.getElementById("cOption").value;
    // console.log(cOption);

    // var photo = document.getElementById("photo").value;
    // console.log(photo);

}   

function retriveData(){
    console.log("color");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("phoneNumber").value;
    var birthday = document.getElementById("birthday").value;
    var time = document.getElementById("time").value;
    var select_color = document.getElementById("select_color").value;
    // var paymentMethod = document.getElementById("paymentMethod").value;
    // var age = document.getElementById("age").value;
    // var cOption = document.getElementById("cOption").value;
    // var photo = document.getElementById("photo").value;

    // var arr = [name, email, number, birthday, time, fColor, paymentMethod, age, cOption, photo];
    // return arr;

    var arr = [name, email, number, birthday, time, select_color];
    return arr;

}


function readDataFromLocalStroage(dataEntered){
    localStorage.setItem("Name", dataEntered[0]);
    localStorage.setItem("Email", dataEntered[1]);
    localStorage.setItem("Number", dataEntered[2]);
    localStorage.setItem("Birthday", dataEntered[3]);
    localStorage.setItem("Time", dataEntered[4]);
    localStorage.setItem("Color", dataEntered[5]);

    
    /** Get data from local-storage */
    var name1 = localStorage.getItem("Name");
    var email2 = localStorage.getItem("Email");
    var number3 = localStorage.getItem("Number");
    var birthday4 = localStorage.getItem("Birthday");
    var time5 = localStorage.getItem("Time");
    var color6 = localStorage.getItem("Color")

    var arr = [name1, email2, number3, birthday4, time5, color6];
    return arr;
}
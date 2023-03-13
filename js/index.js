const form = document.getElementById('form');

var row = null;

function submitFormData(){
    validation();
    var dataEntered = retriveData();
    //console.log(dataEntered);
    var readData = readDataFromLocalStroage(dataEntered);
    //console.log(readData);
    if(row == null){
        insert(readData);
        msg.innerHTML = "Data Inserted!"
    }
    else{
        update();
        msg.innerHTML = "Data Updated!"
    }
    resetForm();
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
}   

function retriveData(){
    console.log("color");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("phoneNumber").value;
    var birthday = document.getElementById("birthday").value;
    var time = document.getElementById("time").value;
    var select_color = document.getElementById("select_color").value;
    var paymentMethod = document.getElementsByName("payment").value;
    var age = document.getElementById("age").value;
    var cOption = document.getElementById("cOption").value;
    var photo = document.getElementById("my_file").value;

    // var arr = [name, email, number, birthday, time, fColor, paymentMethod, age, cOption, photo];
    // return arr;

    var arr = [name, email, number, birthday, time, select_color, paymentMethod, age, cOption, photo];
    return arr;

}


function readDataFromLocalStroage(dataEntered){
    localStorage.setItem("Name", dataEntered[0]);
    localStorage.setItem("Email", dataEntered[1]);
    localStorage.setItem("Number", dataEntered[2]);
    localStorage.setItem("Birthday", dataEntered[3]);
    localStorage.setItem("Time", dataEntered[4]);
    localStorage.setItem("Color", dataEntered[5]);
    localStorage.setItem("payment", dataEntered[6]);
    localStorage.setItem("Age", dataEntered[7]);
    localStorage.setItem("checkbox", dataEntered[8]);
    localStorage.setItem("File", dataEntered[9]);

    
    /** Get data from local-storage */
    var name1 = localStorage.getItem("Name");
    var email2 = localStorage.getItem("Email");
    var number3 = localStorage.getItem("Number");
    var birthday4 = localStorage.getItem("Birthday");
    var time5 = localStorage.getItem("Time");
    var color6 = localStorage.getItem("Color");
    var paymentMethod7 = localStorage.getItem("Payment");
    var age8 = localStorage.getItem("Age");
    var checkbox9 = localStorage.getItem("checkbox");
    var file10 = localStorage.getItem("File");

    var arr = [name1, email2, number3, birthday4, time5, color6, paymentMethod7, age8, checkbox9, file10];
    return arr;
}


function insert(readData){
    console.log("datainsert")
    var table = document.getElementById("data_list").getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);
    cell6 = row.insertCell(5);
    cell7 = row.insertCell(6);
    cell8 = row.insertCell(7);
    cell9 = row.insertCell(8);
    cell10 = row.insertCell(9);
    cell11 = row.insertCell();


    cell1.innerHTML = readData[0];
    cell2.innerHTML = readData[1];
    cell3.innerHTML = readData[2];
    cell4.innerHTML = readData[3];
    cell5.innerHTML = readData[4];
    cell6.innerHTML = readData[5];
    cell7.innerHTML = readData[6];
    cell8.innerHTML = readData[7];
    cell9.innerHTML = readData[8];
    cell10.innerHTML = readData[9];

    cell11.innerHTML = `<button onClick="onEdit(this)" class = "btn btn-primary">Edit</button>
                        <button onClick="onDelete(this)" class = "btn btn-danger">Delete</button>`

}


function onEdit(td){
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("email").value = row.cells[1].innerHTML; 
    document.getElementById("phoneNumber").value = row.cells[2].innerHTML; 
    document.getElementById("birthday").value = row.cells[3].innerHTML;
    document.getElementById("time").value = row.cells[4].innerHTML;
    document.getElementById("select_color").value = row.cells[5].innerHTML;
    document.getElementsByName("payment").value = row.cells[6].innerHTML;
    document.getElementById("age").value = row.cells[7].innerHTML;
    document.getElementById("cOption").value = row.cells[8].innerHTML;
    document.getElementById("my_file").value = row.cells[9].innerHTML;
}

function update(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("email").value;
    row.cells[2].innerHTML = document.getElementById("phoneNumber").value;
    row.cells[3].innerHTML = document.getElementById("birthday").value;
    row.cells[4].innerHTML = document.getElementById("time").value;
    row.cells[5].innerHTML = document.getElementById("select_color").value;
    row.cells[6].innerHTML = document.getElementsByName("payment").value;
    row.cells[7].innerHTML = document.getElementById("age").value;
    row.cells[8].innerHTML = document.getElementById("cOption").value;
    row.cells[9].innerHTML = document.getElementById("my_file").value;
    row = null;
}

function onDelete(td){
    var ans =  confirm("Are you sure?");
    if(ans == true){
    row = td.parentElement.parentElement;
    document.getElementById('data_list').deleteRow(row.rowIndex);
    msg.innerHTML = "Data Delete!"
    }
}


function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = ""; 
    document.getElementById("phoneNumber").value = ""; 
    document.getElementById("birthday").value = "";
    document.getElementById("time").value = "";
    document.getElementById("select_color").value = "";
    document.getElementsByName("payment").value = "";
    document.getElementById("age").value = "";
    document.getElementById("cOption").value = "";
    document.getElementById("my_file").value = "";
}

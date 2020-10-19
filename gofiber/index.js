var emp = {
  Employees: [
    {
      
      name: "Ashok",
      from: "Vizag",
      to: "Patna",
      conversation: "ae998tnjaru.invalid:5060",
      type: "108.26.135.78:63548",
      insertion: "108.26.135.78:63548",
      deletion: "08/31/2020-18:00:08",
       
    },
    {
       
      name: "Ashok",
      from: "Vizag",
      to: "Patna",
      conversation: "ae998tnjaru.invalid:5060",
      type: "108.26.135.78:63548",
      insertion: "108.26.135.78:63548",
      deletion: "08/31/2020-18:00:08",
       
    },
    {
      
      name: "Ashok",
      from: "Vizag",
      to: "Patna",
      conversation: "ae998tnjaru.invalid:5060",
      type: "108.26.135.78:63548",
      insertion: "108.26.135.78:63548",
      deletion: "08/31/2020-18:00:08",
       
    },
  ],
  count: 3,
};

// const emp = require("./data")
// console.log(emp)


function display(inputStr) {
  var dis = document.getElementById("dis");
  console.log(inputStr.length);
  var displayHeader = document.createElement("tr");
  var displayHeader1 = document.createElement("th");
  displayHeader1.textContent = "APP";
  var displayHeader2 = document.createElement("th");
  displayHeader2.textContent = "NAME";
  var displayHeader3 = document.createElement("th");
  displayHeader3.textContent = "FROM";
  var displayHeader4 = document.createElement("th");
  displayHeader4.textContent = "TO";
  var displayHeader5 = document.createElement("th");
  displayHeader5.textContent = "CONVERSATION";
  var displayHeader6 = document.createElement("th");
  displayHeader6.textContent = "TYPE";
  var displayHeader7 = document.createElement("th");
  displayHeader7.textContent = "INSERTION";
  var displayHeader8 = document.createElement("th");
  displayHeader8.textContent = "DELETION";
  var displayHeader9 = document.createElement("th");
  displayHeader9.textContent = "REMOVE";
  displayHeader.append(
    displayHeader1,
    displayHeader2,
    displayHeader3,
    displayHeader4,
    displayHeader5,
    displayHeader6,
    displayHeader7,
    displayHeader8,
    displayHeader9
  );
  dis.append(displayHeader);
  for (var i = 0; i < inputStr.length; i++) {
    var display = document.createElement("tr");
    var display1 = document.createElement("td");
    var display1Img = document.createElement("img");
    display1Img.setAttribute(
        "src",
        "data:image/png;base64,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"
      );
    var display2 = document.createElement("td");
    var display3 = document.createElement("td");
    var display4 = document.createElement("td");
    var display5 = document.createElement("td");
    var display6 = document.createElement("td");
    var display7 = document.createElement("td");
    var display8 = document.createElement("td");
    var display9 = document.createElement("td");
    var display9Img = document.createElement("img");

    //display1Img.innerText = inputStr[i].app;

    display9Img.setAttribute(
      "src",
      "https://image.shutterstock.com/image-vector/trash-can-line-icon-linear-260nw-1627082257.jpg"
    );
    display9Img.setAttribute("alt", "The Pulpit Rock");
    display2.innerText = inputStr[i].name;
    display3.innerText = inputStr[i].from;
    display4.innerText = inputStr[i].to;
    display5.innerText = inputStr[i].conversation;
    display6.innerText = inputStr[i].type;
    display7.innerText = inputStr[i].insertion;
    display8.innerText = inputStr[i].deletion;
    // display9.innerText = inputStr[i].remove
    display1.append(display1Img);
    display9.append(display9Img);
    display.append(
      display1,
      display2,
      display3,
      display4,
      display5,
      display6,
      display7,
      display8,
      display9
    );
    dis.append(display);
  }

  // inputStr.map(item=>{
  //   console.log(item.emailAddress)
  //   displayPara1.innerText = item.emailAddress
  //   displayPara2.innerText = item.employeeCode
  //   displayPara3.innerText = item.firstName
  // })
  //displayPara.innerText = inputStr
}

function objListener() {
  var output = JSON.stringify(emp);
  // display(output)
  //console.log(output,typeof(output))
  obj = JSON.parse(output);
  display(obj.Employees);
  //console.log(obj,typeof(obj))
  // console.log(obj.Employees[1].emailAddress,"EEE")
}

function textMsg(){
    console.log("Coming soon")
}

var jsonBtn = document.querySelector("#jsonObj");
var jsonBtn2 = document.querySelector("#jsonObj2")

jsonBtn.addEventListener("click", objListener);
jsonBtn2.addEventListener("click",textMsg)

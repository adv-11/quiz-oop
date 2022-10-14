// Questions will be asked

const Questions = [
  {
    id: 0,

    q:
      "1. Several Functions of the same name can be defined as long as they have different parameters ,this is called as ?",
    a: [
      { text: "Operator Overloading", isCorrect: false },
      { text: "Functions resuing", isCorrect: false },
      { text: "Function Overloading", isCorrect: true },
      { text: "None of the above", isCorrect: false }
    ]
  },
  {
    id: 1,

    q: "2. Which of the following permits function overloading in c++ ?",
    a: [
      { text: "Data type", isCorrect: false, isSelected: false },
      { text: "Number of arguments", isCorrect: false },
      { text: "Return type of arguments", isCorrect: false },
      { text: "All of the above", isCorrect: true }
    ]
  },
  {
    id: 2,
    q: "3. Which of the following is also similar to function overloading ?",
    a: [
      { text: "Operator Overloading", isCorrect: false },
      { text: "Destructor Overloading", isCorrect: false },
      { text: "Constructor Overloading ", isCorrect: true },
      { text: "None of the above", isCorrect: false }
    ]
  },

  {
    id: 3,
    q:
      "4. Which of the following in Object Oriented Programming is supported by Function overloading and default arguments features of C++ ?  ",
    a: [
      { text: "Inheritance", isCorrect: false },
      { text: "Polymorphism", isCorrect: true },
      { text: "Encapsulation", isCorrect: false },
      { text: "None of the above", isCorrect: false }
    ]
  },

  {
    id: 4,
    q:
      "5.When functions are overloaded, which parts of the function are the same?",
    a: [
      { text: "Function Names", isCorrect: true },
      { text: " No. of Input Parameters", isCorrect: false },
      { text: "Function Output types", isCorrect: false },
      { text: "Data type of input parameters", isCorrect: false }
    ]
  },
  {
    id: 5,
    q: "THANK YOU FOR TAKING THE QUIZ :) , Refresh to start again!",
    a: [
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false }
    ]
  }
];

// Set start
var start = true;

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  // Getting the question
  const question = document.getElementById("question");

  // Setting the question text
  question.innerText = Questions[id].q;

  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  var selected = "";

  // Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "white";
    op2.style.backgroundColor = "skyblue";
    op3.style.backgroundColor = "skyblue";
    op4.style.backgroundColor = "skyblue";
    selected = op1.value;
  });

  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "skyblue";
    op2.style.backgroundColor = "white";
    op3.style.backgroundColor = "skyblue";
    op4.style.backgroundColor = "skyblue";
    selected = op2.value;
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "skyblue";
    op2.style.backgroundColor = "skyblue";
    op3.style.backgroundColor = "white";
    op4.style.backgroundColor = "skyblue";
    selected = op3.value;
  });

  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "skyblue";
    op2.style.backgroundColor = "skyblue";
    op3.style.backgroundColor = "skyblue";
    op4.style.backgroundColor = "white";
    selected = op4.value;
  });

  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");

  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
      b;
    } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
  });
}

if (start) {
  iterate("0");
}

// Next btn and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 6) {
    id++;
    iterate(id);
    console.log(id);
  }
});

//flag background changing (next)

//back btn and method
const back = document.getElementsByClassName("back")[0];
var id = 0;

back.addEventListener("click", () => {
  start = false;
  if (id != 0 && id < 6) {
    id--;
    iterate(id);
    console.log(id);
  }
});
//flag background changing (back)

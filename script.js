const getHistory = () =>{
 return document.getElementById('history-value').innerText;
};

const printHistory = (num) =>{
 document.getElementById('history-value').innerText=num;
};

const getFormattedNumber = (num) =>{
 if(num=="-"){
  return "";
 }
 let n = Number(num);
 let value = n.toLocaleString('en');
 return value;
};

const getOutput = () =>{
 return document.getElementById('output-value').innerText;
};

const printOutput = (num) =>{
 if(num==""){
  document.getElementById("output-value").innerText = num;
 }
 else{
  document.getElementById('output-value').innerText=getFormattedNumber(num);
 }
};

const reverseNumberFormat = (num) =>{
 return Number(num.replace(/,/g,""));
}

let operator = document.getElementsByClassName('operator');
for(let i=0; i<operator.length;i++){
 operator[i].addEventListener('click', function(){
  if(this.id=='clear'){
   printHistory("");
   printOutput("");
  }
  else if(this.id=='backspace'){
   let output = reverseNumberFormat(getOutput()).toString();
   if(output){ //if output has a value
    output = output.substr(0, output.length-1);
    printOutput(output);

   }
  }
  else{
   let output = getOutput();
   let history = getHistory();
   if(output==''&& history==""){
    if(isNaN(history[history.length-1])){ //checks if last xter is a function 
     history = history.substr(0,history.length-1);  //remove last character using substring function
    }
   }
   if(output!='' || history !=''){
    output = output ==''?output:reverseNumberFormat(output);
    history = history + output;
    if(this.id=='='){
     let result = eval(history);
     printOutput(result);
     printHistory('');
    }
    else{
     history = history + this.id;
     printHistory(history);
     printOutput('');
    }
   }
  }

 })
}
let number = document.getElementsByClassName('number');
for(let i=0; i<number.length;i++){
 number[i].addEventListener('click', function(){
  let output = reverseNumberFormat(getOutput());
  if(output!=NaN){ //if output is a number
   output = output + this.id;
   printOutput(output);

  }

 })
}

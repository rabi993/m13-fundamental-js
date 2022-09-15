
var student1 = {id:121,phone:54134,name:"rabi"};
var student2 = {id:122,phone:5414474,name:"kamal"};


console.log(student1);
console.log(student2);
var phonNo =student1.phone;
console.log(phonNo);
var phonN2 =student2['phone'];
console.log(phonN2);
var phonPropName ="phone";
var phonN3 =student2[phonPropName];
console.log(phonN3);
//update phone number
// student1.phone=222222222222;
// student1["phone"]=5555555;
student1[phonPropName]=99999999;
console.log(student1);
console.log(student2);
student1.cinema="ogni2";
student1['cinema']="ogni3";
console.log(student1);


  const addData =() =>{
  var name = $('#name').val();
  console.log(name);
  var lname = $('#lastName').val();
  console.log(lname);
  var gender = $("input[name='gender']").val();
  
  console.log(gender);
  var salary = $('#salary').val();
  console.log(salary);

  let employeeObj = {
    "name": name,
    "lastName": lastName,
    "gender": gender,
    "salary": salary
  }
  console.log(employeeObj);
  $.ajax({
    url: 'http://localhost:3000/employee',
    type:'POST',
    dataType:'json',
    data:employeeObj,
    success:function(data,){
      console.log(data);

    },
    error:function(textError){
      console.log('error in operation');
    }

  })


}


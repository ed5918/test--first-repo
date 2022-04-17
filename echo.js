function echo(param){

    let type = typeof param;
 // print data type
 console.log(type);
 // print valuew, if type is string or number
  if (type == 'string'  || type == 'number'){
      console.log(param);
  } else{
      console.log('Parameter is not suitable for printing');
  }
 // else - print error message


}
echo('Hello, JavaScript!');
echo(18); 
echo(null);
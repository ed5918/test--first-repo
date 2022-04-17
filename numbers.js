function float(a,b,c){
 let sum = a + b + c;

 let sunAsString = String(sum);
 let type = 'Integer';

 for(let i = 0; i < sunAsString.length;i++ ){
    if(sunAsString[i] == '.'){
        type = 'Float';
    }
 }

 console.log(`${sum} - ${type}`);

}
float(1,2,3);
console.log('----------');
float(1,2,3.14);
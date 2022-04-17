function place(word, char, match){
 // create variable for result
 let result = '';
 
 // combine word char
 for (let i = 0; i < word.lenght; i++){
     if (word[i] == '_'){
     result += char;
 }else{
   result += word[i];
 }
}
 // -- read characters one by one 
 // -- if current character is '_' add char parametar to result 
 // -- else add current character to result 
 // compare result with match and print message
 if (result == match ){
    console.log('Matched');
}else{
    console.log('Not matched');
}
 }
place('Str_ng', 'I', 'Strong');
place('Str_ng', 'i', 'String');
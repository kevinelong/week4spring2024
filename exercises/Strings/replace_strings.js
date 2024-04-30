let message = `Our corporate 123 offices 
are located in 123 Dallas, 
and our retail store
is also in dallas and our mfg facility is also in 123 dallas.`;

//replace dallas with austin
let updated = message.replace(/123/gi, "456")
//g global all around
//i is insensitive to case so upper and lower case (capital)

console.log(updated)

// for(let i =0; mc=0; mc < 2 && i < words.length; i++){
//     if(word == sought){
//         mc++;
//     }
// }

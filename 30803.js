//308.3 lab part 1


for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) 
        console.log("FizzBuzz") 
    
    else if (i % 3 == 0) 
        console.log("Fizz")
    
    else if (i % 5 == 0) 
        console.log("Buzz")
    
    else console.log(i);
}

//lab part 2 this drove me crazy. I understand loops but not math.


const num = 7;
const mynextnum = (num) => {
   let sqofnum = Math.floor(Math.sqrt(num));
   let prime = num !== 1;
   for(let i = 2; i < sqofnum + 1; i++){
      if(num % i === 0){
         prime = false;
         break;
      };
   };
   return prime;
}
function nextP (num = 1) {
   while(!mynextnum(++num)){
   };
   return num;
};
console.log(nextP(num));

// lab part 3



const csvstring = `ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry_Cook,19 \r\n63,Blaine,Quiz_Master,58\r\n98,Bill,Doctors_Assistant,26`

const rows = csvstring.split("\r\n");

for (let i = 0; i < rows.length; i++) {
  
    const cells = rows[i].split(",");
   
    console.log("Row " + (i + 1) + ":");
  
    for (let z = 0; z < cells.length; z++) {
    
        console.log("  Cell " + (z + 1) + ": " + cells[z]);
  }
}

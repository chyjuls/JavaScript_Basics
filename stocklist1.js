
// first create a list, in an array.
// create an index list (integer) for items on the list, first itme=0;
// [0,1,2,3,4,5,6,], where Rice=0, Persimmon=1, etc.)
// Ask for user to input an item, and create an output message telling me them if item is in stock.

const UserStock = prompt("Enter what you need:");
// items are listed as array...

var list = [ "Rice", " ", "Persimmon", " ",  "Wheat", " ", "Banana", " ", "Apple",  "Butter", "Eggs","",]
           // 0             1                  2             3             4              5       6


// Find if user input is listed in the array, use list.indexOF(UserStock) !==-1, this will search for a match.

// using the if and else statement ouput your message.

if (list.indexOf(UserStock)!==-1){
    alert("In stock");
}

else{

    var addStock=prompt(UserStock +  " " + "not in store, Please add item:")

}   // To add User's input use the push function.

      list.push(addStock);

      // In order not to have user input an already existing item, another variable 
      // newItem is created and compared to UserStock.

     var newItem = addStock;

     if (newItem == UserStock){
        alert(list)
     }
     else{
         alert("Try again!");
     }
    

// Items listed in the array are case sensitive, so user must input items as they appear in the list.
// the .toLowerCase function can be used to change all letters to lowercase.



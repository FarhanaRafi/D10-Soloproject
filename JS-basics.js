console.log("\n----------EXERCISE A---------\n")
/* EXERCISE A
Create a variable called test and assign a string value to it.
*/

let test = "Hello";
console.log(`String: ${test}`);

console.log("\n----------EXERCISE B---------\n")
/* EXERCISE B
Create a variable called sum and assign to it the result of the sum between the numbers 10 
and 20.
*/

let sum = 0;
for(let i = 10; i <= 20; i++){
    sum = sum + i;
}

let result = sum;
console.log(`Total: ${result}`);


console.log("\n----------EXERCISE C---------\n")
/* EXERCISE C
Create a variable called random and assign to it a random number between 0 and 20 (it should 
be randomly created at each execution).
*/

let random = Math.floor(Math.random()*21);
console.log(`Random number between 0 and 20: ${random}`);

console.log("\n----------EXERCISE D---------\n")
/* EXERCISE D
Create a variable called me and assign to it an object containing the following information: name = your name, 
surname = your surname, age = your age.
*/

let me = {
    name : "Farhana",
    surname : "Rafi",
    age : 27
}
console.log("Myself:" , me);

console.log("\n----------EXERCISE E---------\n")
/* EXERCISE E
Write a piece of code for programmatically removing the age property from the previously create object.
*/

delete me.age;
console.log("Deleted Age:" , me);

console.log("\n----------EXERCISE F---------\n")
/* EXERCISE F
Write a piece of code for programmatically adding to the me object you defined before an array called skills, 
containing the programming languages you know right now.
*/

me.skills = ["Java Script" , "Phython" , "Java"];
console.log("Adding Skills:" , me);

console.log("\n----------EXERCISE G---------\n")
/* EXERCISE G
Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/

let removedSkill = me.skills.pop();
console.log("After Removing Skill:" , me);

console.log("\n----------JS Functions---------")
console.log("\n----------EXERCISE 1---------\n")
/* EXERCISE 1
Write a function called dice; it should randomize an integer number between 1 and 6.
*/

function dice(){
    let random = 1 + Math.floor(Math.random()*6);
    return random;
}

let random1 = dice();
console.log("Random Number from dice:", random1);

console.log("\n----------EXERCISE 2---------\n")
/* EXERCISE 2
Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

function whoIsBigger(n1 , n2){
    if(n1 > n2){
        return n1
    }else{
        return n2
    }
}

let biggestNumber = whoIsBigger(76 , 67);
console.log("Biggest Number", biggestNumber);

console.log("\n----------EXERCISE 3---------\n")
/* EXERCISE 3
Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

function splitMe(string){
    let array = string.split(" ");
    return array;
}

let strings = splitMe("I Love Coding");
console.log("An array with every word in that string:" , strings);

console.log("\n----------EXERCISE 4---------\n")
/* EXERCISE 4
Write a function called deleteOne which receives a string and a boolean as parameters.
If the boolean value is true it should return the string without the first letter, otherwise it should remove the 
last one from it.
*/

function deleteOne(string, boolean){
    if(boolean){
        return string.slice(1);
    } else {
        return string.slice(0, -1);
    }
}

let result1 = deleteOne("Welcome", true);
let result2 = deleteOne("Welcome", false);
console.log("Result when boolean is True:", result1);
console.log("Result when boolean is False:", result2);

console.log("\n----------EXERCISE 5---------\n")
/* EXERCISE 5
Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"
*/
function onlyLetters(string){
    return string.replace(/[0-9]/g, "");
}

let inputString = "Hello I was born on 90s"
let outputString = onlyLetters(inputString)
console.log("input string:", inputString);
console.log("only letters:", outputString);

console.log("\n----------EXERCISE 6---------\n")
/* EXERCISE 6
Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string 
is a valid email address.
*/

function isThisAnEmail(string){
    return RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(string);
}

let validEMail = isThisAnEmail("abc12@gmail.com");
let inValidEMail = isThisAnEmail("hello");
console.log("Valid E-mail:abc12@gmail.com", validEMail);
console.log("Invalid E-mail:hello", inValidEMail);

console.log("\n----------EXERCISE 7---------\n")
/* EXERCISE 7
Write a function called whatDayIsIt that should return the current day of the week.
*/

function whatDayIsIt(){
    let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[new Date().getDay()];
}

let currentDay = whatDayIsIt()
console.log("Current Day of the week:", currentDay);

console.log("\n----------EXERCISE 8---------\n")
/* EXERCISE 8
Write a function called rollTheDices which receives a number as a parameter. It should invoke the dice() function 
defined in Ex1 the specified amount of times, and return an object containing a sum property holding the sum of 
all values extracted and a values array containing the single values of the dicerolls themselves.
Example: RollTheDices(3) => returns {
sum: 10
values: [3, 3, 4]
}
*/

function rollTheDices(number) {
    let sum = 0
    let values = []
    for(let i= 0; i < number; i++) {
        let value = dice()
        values.push(value)
        sum = sum + value;
    }
    console.log(values)
    return sum;
}

let sumOfRolledDice = rollTheDices(8);
console.log("Total:", sumOfRolledDice);

console.log("\n----------EXERCISE 9---------\n")
/* EXERCISE 9
Write a function called howManyDays which receives a date as a parameter and returns the number of days 
passed since that date.
*/

function howManyDays(date){
    return Math.floor((new Date() - date)/(1000 * 60 * 60 * 24));
}

let difference = howManyDays(new Date('10/6/2022'))
console.log("Difference between current date and given date(10/6/2022):", difference);

console.log("\n----------EXERCISE 10---------\n")
/* EXERCISE 10
Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.
*/

function isTodayMyBirthday(){
    let today = new Date();
    let myBirthday = new Date("9/7/1997")
    if(today.getDate()=== myBirthday.getDate() && today.getMonth() === myBirthday.getMonth()){
        return true;
    } else {
        return false;
    }
}

let myDay = isTodayMyBirthday();
console.log("Is today my Birthday?", myDay);

console.log("\n----------JS Arrays & Objects---------\n")
console.log("\n----------EXERCISE 11---------\n")
/* EXERCISE 11
Write a function called deleteProp which receives an object and a string as parameters,
and returns the given object after deleting its property named as the given string.
*/

function deleteProp(object, string){
    delete object[string];
    return object;
}

let object1 = {
    name : "john",
    lastName : "Doe",
    age : 30
}
console.log("Before Deleting Age:", object1);
let object2 = deleteProp(object1, "age");
console.log("After deleting property (age):", object2);



let movies = [
    {
       Title:"The Lord of the Rings: The Fellowship of the Ring",
       Year:"2001",
       imdbID:"tt0120737",
       Type:"movie",
       Poster:"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    },
    {
       Title:"The Lord of the Rings: The Return of the King",
       Year:"2003",
       imdbID:"tt0167260",
       Type:"movie",
       Poster:"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
       Title:"The Lord of the Rings: The Two Towers",
       Year:"2002",
       imdbID:"tt0167261",
       Type:"movie",
       Poster:"https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
       Title:"Lord of War",
       Year:"2005",
       imdbID:"tt0399295",
       Type:"movie",
       Poster:"https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
       Title:"Lords of Dogtown",
       Year:"2005",
       imdbID:"tt0355702",
       Type:"movie",
       Poster:"https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
       Title:"The Lord of the Rings",
       Year:"1978",
       imdbID:"tt0077869",
       Type:"movie",
       Poster:"https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
       Title:"Lord of the Flies",
       Year:"1990",
       imdbID:"tt0100054",
       Type:"movie",
       Poster:"https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
    },
    {
       Title:"The Lords of Salem",
       Year:"2012",
       imdbID:"tt1731697",
       Type:"movie",
       Poster:"https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
    },
    {
       Title:"Greystoke: The Legend of Tarzan, Lord of the Apes",
       Year:"1984",
       imdbID:"tt0087365",
       Type:"movie",
       Poster:"https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
    },
    {
       Title:"Lord of the Flies",
       Year:"1963",
       imdbID:"tt0057261",
        Type:"movie",
        Poster:"https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
    },
    {
        Title: "The Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
       Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        Title: "Avengers: Infinity War",
        Year: "2018",
        imdbID: "tt4154756",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
        Title: "Avengers: Age of Ultron",
        Year: "2015",
       imdbID: "tt2395427",
       Type: "movie",
       Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
    },
    {
       Title: "Avengers: Endgame",
       Year: "2019",
       imdbID: "tt4154796",
       Type: "movie",
       Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    }
 ]

 console.log("\n----------EXERCISE 12---------\n")
 /* EXERCISE 12
 Write a function called oldestMovie which finds the oldest movie in the provided movies array.
 */

 function oldestMovie(movies){
    let oldest = movies[0].Year
    for(let i = 0; i < movies.length; i++){
        if(movies[i].Year < oldest){
            oldest = movies[i].Year;
        }
    }
    return oldest;
 }

 let oldestMovies = oldestMovie(movies);
 console.log("The oldest movie year:", oldestMovies);

 console.log("\n----------EXERCISE 13---------\n")
 /* EXERCISE 13
 Write a function called countMovies which returns the number of movies contained in the provided movies array.
 */

 function countMovies(movies){
    let lengthOfArray = movies.length;
    return lengthOfArray;
 }

 let totalMovies = countMovies(movies);
 console.log("Number of Movies:", totalMovies);

 console.log("\n----------EXERCISE 14---------\n")
 /* EXERCISE 14
 Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the 
 provided movies array.
 */

 function onlyTheTitles(movies){
    let movieTitle = []
     for(let i =0; i< movies.length;i++){
        movieTitle.push(movies[i].Title)
     }
     return movieTitle;
 }

 let movieTitles = onlyTheTitles(movies);
 console.log("Movie Title:",movieTitles);

 console.log("\n----------EXERCISE 15---------\n")
 /* EXERCISE 15
 Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from 
 the provided movies array.
 */

 function onlyInThisMillennium(movies){
    let twoKMovies = []
    for (let i = 0; i < movies.length; i++){
    if(movies[i].Year >= 2000){
        twoKMovies.push(movies[i])
    }
   }
   return twoKMovies
 }

 let millenniumMovies = onlyInThisMillennium(movies);
 console.log("Movies in this millennium from the provided movies", millenniumMovies)

 console.log("\n----------EXERCISE 16---------\n")
 /* EXERCISE 16
 Write a function called getMovieById which receives an id as a parameter and returns the movie with the 
 given id from the provided movies array.
 */

 function getMovieById(id){
    for(let i= 0; i< movies.length; i++){
        if(movies[i].imdbID === id){
            return movies[i]
        }   
    }
    return undefined;
 }

 let movieById = getMovieById("tt0399295");
 console.log("Movies by ID:", movieById)

 console.log("\n----------EXERCISE 17---------\n")
 /* EXERCISE 17
 Write a function called sumAllTheYears which returns the sum of all the years in which the movies 
 in the provided movies array have been produced.
 */

 function sumAllTheYears(movies){
    let yearSum = 0
    for(let i= 0; i< movies.length; i++){
        yearSum += parseInt(movies[i].Year);
    }
    return yearSum;
 }

 let yearTotal = sumAllTheYears(movies);
 console.log("Total of Year:", yearTotal)

 console.log("\n----------EXERCISE 18---------\n")
 /* EXERCISE 18
 Write a function called searchByTitle which receives a string as a parameter and returns all the movies in 
 the provided movies array which contain that string in the title.
 */

 function searchByTitle(string){
    let movieTitle1 = []
    for(let i= 0; i< movies.length; i++){
        if(movies[i].Title.includes(string)){
          movieTitle1.push(movies[i])
        }
    }
    return movieTitle1;
 }

 let movieByTitle = searchByTitle("Avengers");
 console.log("Movies by Title:", movieByTitle);

 console.log("\n----------EXERCISE 19---------\n")
 /* EXERCISE 19
 Write a function called searchAndDivide which receives a string as a parameter and returns an object;
 this object should contain an array called match, made by all the movies from the provided movies array which 
 contain the given string in the title, and another array unmatch with all the remaining ones.
 */

 function searchAndDivide(string){
    let match = []
    let unmatch = []
    for(let i= 0; i< movies.length; i++){
        if(movies[i].Title.includes(string)){
            match.push(movies[i])
        } else {
            unmatch.push(movies[i])
        }
    }
    let matchAndUnmatch = {
        match : match,
        unmatch : unmatch
    }

    return matchAndUnmatch
  
 }

 let matchAndUnmatchInObject = searchAndDivide("Avengers");
 console.log("Match and Unmatch:", matchAndUnmatchInObject);

 console.log("\n----------EXERCISE 20---------\n")
 /* EXERCISE 20
 Write a function called "removeIndex" which receives a number as a parameter and returns the 
 provided movies array without the element in the given position.
 */

 function removeIndex(number){
    let removedIndex = []
    for(let i= 0; i< movies.length; i++){
        if(i !== number){
            removedIndex.push(movies[i]);
        }
    }
    return removedIndex;
 }

 let removedIndexMovie = removeIndex(8);
 console.log("Array with removed movie with index:", removedIndexMovie);

 console.log("\n----------[EXTRAS] JS Advanced---------\n")
 console.log("\n----------EXERCISE 21---------\n")
 /* EXERCISE 21
 Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree 
 with the given height.
 Example:
 halfTree(3)
 *
 **
 ***
 */

 function halfTree(number){
  let tree = ""
  for(let i = 0; i < number; i++){
    for(let j = 1; j < i; j++){
        tree += "*"
    }
    tree = tree + "\n"
  }
  return tree;
 }

 console.log("Let half tree:", halfTree(10))

 console.log("\n----------EXERCISE 22---------\n")
 /* EXERCISE 22
 Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
 Example:
 tree(3)
 *
 ***
 *****
 */

 function tree(number){
    let tree = "\n"
    for(let i = 0; i < number; i++){
        for(let j = 0; j <(number-i-1); j++) {
            tree += " ";
        }
        for(let k = 1; k <= 2*i+1; k++){
          tree += "*"
        }
      tree = tree + "\n"
    }
    return tree;
   }

   let fullTree = tree(10);
   console.log("Full tree:", fullTree) 
 

 
 console.log("\n----------EXERCISE 23---------\n")
 /* EXERCISE 23
 Create a function called "isItPrime" that receives a number as a parameter and returns true if the given 
 number is a prime number.
 */

 function isItPrime(number){
    let isPrime = true;
    if(number === 1){
        return false
    }
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            isPrime = false;
        }
    }
    return isPrime;
 }

 let checkPrime = isItPrime(22);
 console.log("Is it a Prime Number? 22", checkPrime);
 let checkPrime1 = isItPrime(13);
 console.log("Is it a Prime Number? 13", checkPrime1);
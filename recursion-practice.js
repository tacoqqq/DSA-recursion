//1. Counting Sheep
const countSheep = function(n){
    // base case: no more sheep left
    if (n === 0){
        console.log(`All sheep jumped over the fence`)
        return;
    } 

    // general case
    console.log(`${n}: Another sheep jumps over the fence`)
    countSheep(n-1)
    return;
}


//2. Power Calculator
const powerCalculator = function(base, exponent){

    //base case
    if (exponent < 0){
        return `exponent should be >= 0`
    } else if (exponent === 1){
        return base
    } else if (exponent === 0){
        return 1
    }
    //general case
    return base * powerCalculator(base,exponent-1)
}


//3. Reverse String
const stringReverser = function(str){
    let strArr = str.split('') // ['g','i','r','l']

    //base case
    if (strArr.length == 0) {
        return ''
    }

    let lastChar = strArr.pop()

    //general case
    return lastChar + stringReverser(strArr.join(''))
}


//4. nth Triangular Number
const triCalculator = function(n){
    //base case 
    if (n == 0){
        return 0
    } 

    //general case
    return n + triCalculator(n-1)
}

let number = 5
triCalculator(5)

//5. String Splitter

const splitter = function(symbol,str,answer,temp){
    //base case
    //if str.length = 0 , stop
    if (str.length == 0 && temp.length !==0){
        answer.push(temp)
        return 
    }
    //general case
    if (str[0] == symbol){
        answer.push(temp)
        temp = ''
        splitter(symbol,str.substring(1,str.length),answer,temp)
    } else {
        temp = temp + str[0]
        splitter(symbol,str.substring(1,str.length),answer,temp)
    }
    return
}

let answer = []
let symbol = '/'
let str = '20/20/2020'
let temp = ''
splitter(symbol,str,answer,temp)
console.log(answer)


//6. Fibonacci
const fibonacci = function(n, memo){
    //base case
    if (n == 1){
        memo[0] = 1;
        return 1
    }
    if (n == 2){
        memo[0] = 1;
        memo[1] = 1;
        return 1;
    }
    //general case
    //console.log(fibonacci(n-1) + fibonacci(n-2));
    return memo[n - 1] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}
let memo = []
fibonacci(5, memo);
console.log(memo);

/*
fibonacci(5, memo)
memo[4] = fibonacci(4, memo) + fibonacci(3, memo) // memo = [ , , , , ]
        = fibonacci(3, memo) + fibonacci(2, memo) + fibonacci(2, memo) + fibonacci(1, memo)
        = fibonacci(2, memo) + fibonacci(1, memo) + fibonacci(2, memo) + fibonacci(2, memo) + fibonacci(1, memo)
*/


//7. Factorial
const factorialCalculator = function(n){
    //base case
    if (n == 0 || n == 1){
        return 1
    }

    //general case
    return n * factorialCalculator(n-1)
}


//8. Find a way out of the maze
const mazeRunner = function(maze,route,i,j){
    //baes case
    if (maze[i][j] == 'e'){
        return route
    } else if (deadEnd(maze, i, j)){
        return false
    }

    //general case

    //cell already taken
    maze[i][j] = '*';
    if (isValid(maze, i + 1, j)){
        route.push('D');
        let res = mazeRunner(maze, route, i + 1, j);
        if (res) return res;
        route.pop();
    }
    if (isValid(maze, i - 1, j)){
        route.push('U');
        let res = mazeRunner(maze, route, i - 1, j);
        if (res) return res;
        route.pop();
    }
    if (isValid(maze, i , j + 1)){
        route.push('R');
        let res = mazeRunner(maze, route, i, j + 1);
        if (res) return res;
        route.pop();
    }
    if (isValid(maze, i, j - 1)){
        route.push('L');
        let res = mazeRunner(maze, route, i, j - 1);
        if (res) return res;
        route.pop();
    }
    maze[i][j] = ' ';
    return false;
}

const isValid = function(maze, i, j){
    if(i < 0 || j < 0) return false;
    if(i >= maze.length || j >= maze[0].length) return false;
    if(maze[i][j] == '*') return false;
    return true;
}

const deadEnd = function(maze, i, j){
    return !isValid(maze, i+1, j) && !isValid(maze, i-1, j)
        && !isValid(maze, i, j+1) && !isValid(maze, i, j-1);
}

let i = 0;
let j = 0; 
let route = [];

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(mazeRunner(mySmallMaze,route,i,j))



//9. Find ALL the ways out of the maze
const mazeRunner = function(maze,ans,route,i,j){
    //baes case
    if (maze[i][j] == 'e'){
        let dupRoute = [...route];
        ans.push(dupRoute);
        return
    } else if (deadEnd(maze, i, j)){
        return
    }

    //general case

    //cell already taken
    maze[i][j] = '*';

    if (isValid(maze, i + 1, j)){
        route.push('D');
        mazeRunner(maze, ans, route, i + 1, j);
        //if (res) return res;
        route.pop();
    }
    if (isValid(maze, i - 1, j)){
        route.push('U');
        mazeRunner(maze, ans, route, i - 1, j);
        //if (res) return res;
        route.pop();
    }
    if (isValid(maze, i , j + 1)){
        route.push('R');
        mazeRunner(maze, ans, route, i, j + 1);
        //if (res) return res;
        route.pop();
    }
    if (isValid(maze, i, j - 1)){
        route.push('L');
        mazeRunner(maze, ans, route, i, j - 1);
        //if (res) return res;
        route.pop();
    }
    maze[i][j] = ' ';
    return;
}

const isValid = function(maze, i, j){
    if(i < 0 || j < 0) return false;
    if(i >= maze.length || j >= maze[0].length) return false;
    if(maze[i][j] == '*') return false;
    return true;
}

const deadEnd = function(maze, i, j){
    return !isValid(maze, i+1, j) && !isValid(maze, i-1, j)
        && !isValid(maze, i, j+1) && !isValid(maze, i, j-1);
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

ans = []
route = []
mazeRunner(mySmallMaze, ans, route, 0, 0);
console.log(ans);

//11. Organization Chart

const printTree = function(key, value, level){
    if (typeof value != 'object'){
        console.log("\t".repeat(level) + key + ": " + value)
    }
    else{
        console.log("\t".repeat(level) + key)

        for (let [k, v] of Object.entries(value)){
            printTree(k, v, level + 1)
        }
    }    
}

let root = { 
    House:{
        Steven: {
            Height:"5'-10\"",
            Weight:"180 lbs"
        }, 
        Daphne:{
            Height:"5'-6\"",
            Weight:"120 lbs"
        }
    }
}
printTree("root", root, 0)


//12. Binary Represenation
const binaryRepresenter = function(num, ans){
    //base case
    if (num == 0){
        ans = [0]
        return 
    } 

    if (num == 1){
        ans.unshift(1)
        return
    }

    //general case
    if (num % 2 == 1){
        ans.unshift(1)
        binaryRepresenter(Math.floor(num/2), ans)
    } else {
        ans.unshift(0)
        binaryRepresenter(Math.floor(num/2), ans)
    }
} 
num = 15;
ans = [];
binaryRepresenter(num,ans)
finalAns = Number(ans.join(''))
console.log(finalAns)
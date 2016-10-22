// 7 Days of JavaScript
// Day 6: The Connected Cell in a Grid
// https://www.hackerrank.com/contests/7days-javascript/challenges/connected-cell-in-a-grid-3-js-only
/*
Submissions will no longer be placed on the leaderboard. You may still attempt this problem for practice.
You are given a matrix with m rows and n columns of cells, each of which contains either 1 or 0. Two cells
are said to be connected if they are adjacent to each other horizontally, vertically, or diagonally.
The connected and filled (i.e. cells that contain a 1) cells form a region. There may be several regions in the matrix.
Find the number of cells in the largest region in the matrix.

Input Format
There will be three parts of t input:
The first line will contain m, the number of rows in the matrix.
The second line will contain n, the number of columns in the matrix.
This will be followed by the matrix grid: the list of numbers that make up the matrix.

Output Format
Print the length of the largest region in the given matrix.

Constraints



Sample Input:

4
4
1 1 0 0
0 1 1 0
0 0 1 0
1 0 0 0
Sample Output:

5
Task: 
Write the complete program to find the number of cells in the largest region.

Explanation

X X 0 0
0 X X 0
0 0 X 0
1 0 0 0  
*/

function processData(input) {
    //Enter your code here
    input = input.split(/\r?\n/);
    x = input.shift();
    y = input.shift();
    

    for (e in input) {
        input[e] = input[e].split(" ");
    }
    matrix = input;
    
    //count = step(0,0,matrix);
    areas = [];
    for (i = 0; i < x; i++){
        for( j = 0; j < y; j++){
            areas.push(step(i,j,matrix));
            //console.log(count);    
            //console.log("*********************************");
        }
    }
    areas.sort(function(a,b){return b - a;});
    
    console.log(areas[0]);
    
} 


function step(x,y,matrix){
    xlen = matrix.length;
    ylen = matrix[0].length
    //console.log(x + "," + y);
    //console.log(x >= 0);
    //console.log(x < matrix[0].length);
    //console.log(y >= 0);
    //console.log(y < matrix.length);

    if( x >= 0 && x < xlen && y >= 0 && y < ylen && matrix[x][y] === '1'){
        //console.log(":" + matrix[x][y]);
        matrix[x][y] = 'X';
        //console.log(x + "," + y);
        //console.log(matrix);
        return 1 
        + step(x - 1,y    ,matrix) 
        + step(x + 1,y    ,matrix) 
        + step(x    ,y - 1,matrix) 
        + step(x    ,y + 1,matrix)
        + step(x - 1,y - 1,matrix) 
        + step(x + 1,y - 1,matrix) 
        + step(x - 1,y + 1,matrix) 
        + step(x + 1,y + 1,matrix);
        
        
    }else{
        return 0;
    }
    
}
/*
function check(x,y,matrix){
    left = x - 1;
    right = x + 1;
    up = y - 1;
    down = y + 1;
    console.log(x);
    console.log(y);
    console.log(matrix);
    result = false;
    if(matrix[x][y] == 1){
        if(     left >= 0                   && matrix[left][y] == 1){    result = true;}
        else if(right < matrix[0].length    && matrix[right][y] == 1){   result = true;}
        else if(up >= 0                     && matrix[x][up] == 1){      result = true;}
        else if(down < matrix.length        && matrix[x][down] == 1){    result = true;}        
    }
    console.log(result);
    return result;
}
*/
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

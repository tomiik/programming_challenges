// Code Astra Programming Challenge of day
// from the form of Hackerrank
// Game of Thrones - I
function processData(input) {
    //Enter your code here
    var obj = {};

    // convert input data to obj
    for(var i = 0; i < input.length; i += 1){
        if(obj[input[i]]){
            obj[input[i]] += 1;
        }
        else {
            obj[input[i]] = 1;
        }
    }

    // count the odd character
    var odd = 0;
    for(var e in obj){
        if(obj[e] % 2 == 1){
            odd += 1;
            if(odd > 1){
                console.log("NO");
                return "NO";
            }
        }
    }
    console.log("YES");
    return "YES";
}

process.stdin.resume();
process.stdin.setEncoding("utf8");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});


function gcd(a, b){
    var t;
    while (b != 0){
        t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a, b){
    return (a * b / gcd(a, b));
}

function lcm_multiple(args){
    // The args variable will contain all the arguments passed in the arrayRecursively iterate through pairs of arguments

    if(args.length == 2){
        return lcm(args[0], args[1]);
    } else {
        var arg0 = args[0];
        args.shift();
        return lcm(arg0, lcm_multiple(args));
    }
}
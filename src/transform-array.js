module.exports = function transform(arr) {
    const rez = [];
    if(!Array.isArray(arr))
        throw "error";
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case "--double-next":
                if(i <= arr.length - 2)
                    rez.push(arr[i + 1]);
                break;
            case "--double-prev":
                if(i > 0)
                    rez.push(arr[i - 1]);
                break;
            case "--discard-next":
                i++;
                break;
            case "--discard-prev":
                rez.pop();
                break;
            default:
                rez.push(arr[i]);
                break;
        }
    }
    return rez;
};

class VigenereCipheringMachine {

    constructor(mod = true) {
        this.mod = mod;
    }

    alfavit = 'abcdefghijklmnopqrstuvwxyz'

    sum(a, b) {
        let rez = this.alfavit.indexOf(a) + this.alfavit.indexOf(b);
        if(rez > this.alfavit.length - 1)
            rez -= this.alfavit.length;
        return this.alfavit[rez];
    }

    substriction(a, b) {
        let rez = this.alfavit.indexOf(a) - this.alfavit.indexOf(b);
        if(rez < 0)
            rez += this.alfavit.length;
        return this.alfavit[rez];
    }

    encrypt(str, key) {
        str = str.toLowerCase();
        key = key.toLowerCase().repeat(Math.ceil(str.replace(/[^a-z]/g, "").length / key.length)).substr(0, str.replace(/[^a-z]/g, "").length);
        let shifroText = "";
        let j = 0;
        for(let i of str)
            shifroText += (this.alfavit.includes(i))? this.sum(i, key[j++]) : i;
        return (this.mod)? shifroText.toUpperCase() : shifroText.toUpperCase().split("").reverse().join("");
    }

    decrypt(str, key) {
        str = str.toLowerCase();
        key = key.toLowerCase().repeat(Math.ceil(str.replace(/[^a-z]/g, "").length / key.length)).substr(0, str.replace(/[^a-z]/g, "").length);
        let shifroText = "";
        let j = 0;
        for(let i of str)
            shifroText += (this.alfavit.includes(i))? this.substriction(i, key[j++]) : i;
        return (this.mod)? shifroText.toUpperCase() : shifroText.toUpperCase().split("").reverse().join("");
    }
}

module.exports = VigenereCipheringMachine;

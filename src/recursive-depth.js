module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(!this.rez) this.rez = 1;
        if(arr.some(el => Array.isArray(el))) {
            this.rez++;
            return this.calculateDepth(arr.flat());
        }
        else {
            let a = this.rez;
            this.rez = 1;
            return a;
        }
    };
}
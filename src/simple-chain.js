const chainMaker = {
  chain: [],
  getLength () {
    return this.chain.length;
  },
  addLink (value) {
    this.chain.push(value);
    return this;
  },
  removeLink (position) {
    const realPos = position - 1;
    if(position === `${position}` || realPos < 0 || realPos >= this.chain.length) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(realPos, 1);
    return this;
  },
  reverseChain () {
    this.chain.reverse();
    return this;
  },
  finishChain () {
    const rez = this.chain.map(el => el = `( ${el} )`).join("~~");
    this.chain = [];
    return rez;
  }
};

module.exports = chainMaker;
module.exports = function repeater(str, options) {
    const addition = (options.hasOwnProperty("additionRepeatTimes"))? (options.additionRepeatTimes)? Array(options.additionRepeatTimes).fill(String(options.addition)).join((options.additionSeparator !== undefined)? String(options.additionSeparator) : "|") : options.addition : "";
    return Array(options.repeatTimes).fill(str + addition).join((options.separator)? options.separator : "+");

}
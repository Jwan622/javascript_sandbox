module.exports = function(string) {
  return string.split("").map(function(ch) {
    console.log(ch);
    console.log(ch.charCodeAt(0));
    return String.fromCharCode(ch.charCodeAt(0) + 5);
  }).join("");
};

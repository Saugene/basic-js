const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let s = "", n = "";
  let k = 0;
  for (let i = 0; i < members.length; i++) {
    n = members[i];
    if (typeof n !== "string") continue;
    while (n[k] == " ") {
      k++;
    }
    s += n[k];
    k = 0;
  }

  s = s.toUpperCase().split("").sort().join("");
  return s;
};

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members))
    return false;
  let rez = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) === "string") {
      rez += members[i].trim().toUpperCase()[0];
    }
  }
  return (rez.length)? rez.split("").sort().join("") : false;
};
const data = require("./source");

const companyTypes = {};

data.forEach(function (item) {
  companyTypes[item.companyType] = companyTypes[item.companyType]
    ? companyTypes[item.companyType] + 1
    : 1;
});

console.log(JSON.stringify(companyTypes, null, " "));

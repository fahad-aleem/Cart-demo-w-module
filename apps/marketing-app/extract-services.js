const data = require("./source");

const services = {};

data.forEach(function (item) {
  item.services.forEach(function (service) {
    services[service] = services[service] ? services[service] + 1 : 1;
  });
});

console.log(JSON.stringify(services, null, " "));

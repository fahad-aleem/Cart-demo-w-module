const data = require("./source");

let citystate = [];
const states = [...new Set(data.map(x => x.contact.state))];

states.filter(p1 =>
  data.map(p2 =>
    p1 === p2.contact.state
      ? citystate.push(
          p2.contact.city + "," + p2.contact.state + "," + p2.contact.country
        )
      : null
  )
);
const locations = {};

citystate.map(p => {
  locations[p] = locations[p] ? locations[p] + 1 : 1;
});

console.log(JSON.stringify(locations, null, " "));

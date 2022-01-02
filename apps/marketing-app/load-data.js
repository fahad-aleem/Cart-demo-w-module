const firebase = require("firebase");
const slugify = require("slugify");
const randomstring = require("randomstring");

// Required for side-effects

require("firebase/firestore");
const suppliers = require("./source");

const extractKeywords = input => {
  return input.flatMap(service =>
    service
      .split(" ")
      .filter(value => !remove.includes(value))
      .map(keyword => keyword.toLowerCase())
  );
};
// Initialize Cloud Firestore through Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

firebase.initializeApp(config);

var db = firebase.firestore();

if (process.env.USE_EMULATOR == "true") {
  console.log("using emulator");
  db.useEmulator("localhost", 4044);
} else {
  console.log("not using emulator");
}

const remove = ["And", "and", "Of", "of", undefined, "&"];

suppliers.forEach(supplier => {
  const allKeywords = new Set();

  extractKeywords(supplier.services).forEach(keyword =>
    allKeywords.add(keyword)
  );
  extractKeywords([supplier.companyType]).forEach(keyword =>
    allKeywords.add(keyword)
  );
  extractKeywords([supplier.contact.city]).forEach(keyword =>
    allKeywords.add(keyword)
  );
  extractKeywords([supplier.contact.state]).forEach(keyword =>
    allKeywords.add(keyword)
  );
  extractKeywords([supplier.name]).forEach(keyword => allKeywords.add(keyword));
  supplier.keywords = Array.from(allKeywords);
  const KeyWord = [];

  let ary = supplier.keywords;
  let newsomething = [];

  for (let i = 0; i < supplier.keywords.length; i++) {
    for (let j = 0; j < supplier.keywords.length; j++) {
      if (supplier.keywords[i] !== supplier.keywords[j]) {
        let NewValue = supplier.keywords[i] + " " + supplier.keywords[j];

        KeyWord.push(NewValue);
        NewValue = supplier.keywords[i] + "" + supplier.keywords[j];
        KeyWord.push(NewValue);
        newsomething = ary.concat(KeyWord);
      }
    }
  }
  [...new Set(newsomething)];
  supplier.keywords = Array.from(newsomething);
  console.log(newsomething.length);
  supplier.slug = slugify(supplier.name) + randomstring.generate(7);
  supplier.CompanyTypeSlug =
    slugify(supplier.companyType) + randomstring.generate(7);

  db.collection("suppliers")
    .add(supplier)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});

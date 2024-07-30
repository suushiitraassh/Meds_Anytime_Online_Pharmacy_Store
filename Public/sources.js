// 2] headlines sources
// according to the countries
const countries = ["","ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il","in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];
//india = 23

const category = [
    "",
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

// const sou_url = `https://newsapi.org/v2/top-headlines/sources?country=${countries[0]}&apiKey=79d09d8d1c3740d88b78bed931a2528a`;
// let p = [];
// fetch(sou_url)
//     .then((data) => data.json())
//     .then((l) => {
//         let i = 0;
//         Object.values(l.sources).map((d) => {
//             p.push(d.id);
//         });
//     });
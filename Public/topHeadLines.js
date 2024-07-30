//in work

const countries = ["","ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il","in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];
//india = 24
//index 0 cannot be used with top_hl_countries

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
//index 0 cannot be used with top_hl_sources

//1] top-headlines according to countries
const top_hl_countries = () => {
    const api_url = `https://newsapi.org/v2/top-headlines?country=${countries[24]}&apiKey=79d09d8d1c3740d88b78bed931a2528a`;

    fetch(api_url)
      .then((data) => data.json())
      .then((l) => {
        let i = 0;
        Object.values(l.articles).map((d) => {
          console.log(d);
          i++;
        });
          console.log(`article count ${i}`);
          console.log("\n********************************************\n");
      });
}

//2] top headlines according to sources
//contains sources ,,source-id,,source-name,,source lang,,source-country
//holds an array of sources

const top_hl_sources = () => {
    const sou_url = `https://newsapi.org/v2/top-headlines/sources?apiKey=79d09d8d1c3740d88b78bed931a2528a`;

    let sources = [];
    fetch(sou_url)
      .then((data) => data.json())
      .then((l) => {
        Object.values(l.sources).map((d) => {
          sources.push(d.id);
        });
      })
      .catch((err) => {
        console.log("there was an error while fetching " + err);
      })
      .finally(() => {
        //total source array length 128* may vary according to headlines
        //47] google-news-in
        fetch(
          `https://newsapi.org/v2/top-headlines?sources=${sources[47]}&apiKey=79d09d8d1c3740d88b78bed931a2528a`
        )
          .then((data) => data.json())
          .then((item) => {
            console.log(item);
            console.log("\n********************************************\n");
          })
          .catch((err) => {
            console.log(`there was an error while fetching this data`);
          });
      });
}

//3]top headlines according to countries and categories
//contains 2 params
//and only one param can stay empty at a time 
//**unfinished */
const top_hl_counties_categ = () => {
  const new_url = `https://newsapi.org/v2/top-headlines?country=${countries[24]}&category=${category[1]}&apiKey=79d09d8d1c3740d88b78bed931a2528a`;
    fetch(new_url)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("there was an error while fetchin the data : " + err);
      });
}

//4]assign q with something else it will throw an no paramether error
//unfinished,` to to be done

const top_hl_q = () => {
  const q_url = `https://newsapi.org/v2/top-headlines?q=cricket&apiKey=79d09d8d1c3740d88b78bed931a2528a`;
  fetch(q_url)
    .then((data) => data.json())
    .then((el) => {
      console.log(el);
    })
    .catch((err) => {
      console.log("ther's nothing to search");
    });
}


// top_hl_sources();
// top_hl_countries();
// top_hl_counties_categ();
// top_hl_q();





















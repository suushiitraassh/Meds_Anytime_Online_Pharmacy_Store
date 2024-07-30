//in work
//1] everything
//for inbox

let new_key = 'a9e83c2cbf3347b19a97c4d115b1b7f4';//default
let old_key = '79d09d8d1c3740d88b78bed931a2528a';

let page = 1;
let pageSize = 30;

const for_input = () => {
  let input = "index";
  const api_url = `https://newsapi.org/v2/everything?apiKey=${old_key}&q=${input}&page=${page}&pageSize=${pageSize}`;

  // const removeDuplicates = (src) => {
  //   return src.filter((item, index) => src.indexOf(item) === index);
  // };
  fetch(api_url)
    .then(async (data) => {
      if (!data.ok) {
        const error = await data.json();
        throw new Error(error.message);
      }
      return data.json();
    })
    .then((l) => {
      Object.values(l.articles).map(el => {
        console.log(el);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

const handleParameterMissing = () => {
  let err_msg = `input field is empty`;
  console.log(err_msg);
};

for_input();

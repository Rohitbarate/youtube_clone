const BASE_URL = "https://youtube138.p.rapidapi.com/home/?hl=en&gl=US";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "735956370emsh0761641ab760fa5p174ff5jsnc1d492735400",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await fetch(BASE_URL, options);
    const result = await response.json();
    console.log({result:result.contents});
    return result.contents;
  } catch (error) {
    console.error(error);
  }
};

const BASE_URL = "https://youtube138.p.rapidapi.com/";

const api_key = "33d7cf35d2mshf3763e2fcf3d611p1ecfcejsn58330c59295a"
// 735956370emsh0761641ab760fa5p174ff5jsnc1d492735400

export const fetchFromAPI = async () => {
  const options = {
    method: "GET",
    headers: {
      // "X-RapidAPI-Key": "735956370emsh0761641ab760fa5p174ff5jsnc1d492735400",
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(BASE_URL + "home/?hl=en&gl=US", options);
    const result = await response.json();
    console.log({ result: result.contents });
    return result.contents;
  } catch (error) {
    console.error(error);
  }
};

export const getVideoDetails = async (videoId) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(
      BASE_URL + `video/details/?id=${videoId}&hl=en&gl=US`,
      options
    );
    const result = await response.json();
    console.log({VD:result});
    return result
  } catch (error) {
    console.error(error);
  }
};
export const getRelatedVideos = async (videoId) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(
      BASE_URL + `video/related-contents/?id=${videoId}&hl=en&gl=US`,
      options
    );
    const result = await response.json();
    console.log({RVs:result});
    return result
  } catch (error) {
    console.error(error);
  }
};



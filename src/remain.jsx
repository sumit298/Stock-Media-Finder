const getVideos = async () => {
    const response = await fetch(
      `${videoApi}/search?query=${search}&per_page=${select}`,
      {
        headers: {
          Authorization: videoApiKey,
        },
      }
    );
    const data = await response.json();
    console.log(data.videos);
    setVideos(data.videos);
  };



  const videoApi = "https://api.pexels.com/videos";
  const videoApiKey =
    "563492ad6f9170000100000187702e85a8f343e1b8736ce70216b419";
const CacheAsset = require('@11ty/eleventy-cache-assets');

module.exports = async () => {
  const data = await CacheAsset(
    'https://api.github.com/search/repositories?q=topic:11ty&per_page=10000',
    {
      duration: '1d',
      type: 'json',
    }
  );

  let returnedContent = [];

  for (result of data.items) {
    returnedContent.push({
      name: result.full_name,
      url: result.homepage,
      gh: result.full_name,
      ghLink: result.url,
      ghStars: result.stargazers_count,
    });
  }

  return returnedContent;
};

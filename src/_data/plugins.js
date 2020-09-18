const CacheAsset = require('@11ty/eleventy-cache-assets');

module.exports = async () => {
  const data = await CacheAsset(
    'https://api.npms.io/v2/search?q=11ty-plugin+not:deprecated,insecure&size=250',
    {
      duration: '1d',
      type: 'json',
    }
  );
  let returnedContent = [];
  for (result of data.results) {
    let package = result.package;
    if (package.links.repository) {
      var githubInfo = {
        gh: package.links.repository.replace('https://github.com/', ''),
        ghLink: package.links.repository,
        ghStars: 10000,
      };
    } else {
      var githubInfo = null;
    }
    returnedContent.push({
      name: package.name,
      ...githubInfo,
      npm: package.name,
      npmLink: package.links.npm,
      npmDownloads: 10000,
    });
  }
  return returnedContent;
};

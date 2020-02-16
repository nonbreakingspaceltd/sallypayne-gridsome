const WPAPI = require("wpapi");
const wp = new WPAPI({
  endpoint: "http://sallypayne-cms.spacedawwwg.com/wp-json"
});

(async () => {
  try {
    // Sample code to list posts
    const posts = await wp.posts();
    console.log(posts.map(i => i.title));
  } catch (error) {
    console.log(error);
  }
})();

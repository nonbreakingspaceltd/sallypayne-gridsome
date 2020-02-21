const WPAPI = require("wpapi");
const axios = require("axios");
require("dotenv").config();

// Note this password is an 'app password', i have noticed that it seems to expire or something
const { WP_PASSWORD } = process.env;
const posts = require("./data/types.json");
// set up WP API
const wp = new WPAPI({
  endpoint: "http://sallypayne-cms.spacedawwwg.com/wp-json",
  username: "dhoulker",
  password: WP_PASSWORD
});
wp.workPosts = wp.registerRoute("wp/v2", "/work/(?P<id>)");

// Uploads image to WP media and returns the ID
async function uploadMediaToWordpess(url, title) {
  const response = await axios.get(url, {
    responseType: "arraybuffer"
  });
  const buffer = Buffer.from(response.data);
  const res = await wp
    .media()
    .file(buffer, `${title}.jpg`)
    .create({ title, alt_text: title });
  return res.id;
}

async function processBatchOfPosts(posts, typeid) {
  for (const item of posts.items.slice(0, 1)) {
    const { href, title } = item;
    // process image
    const mediaId = await uploadMediaToWordpess(href, title);
    console.log(mediaId);

    const result = await wp.workPosts().create({
      title,
      type: [typeid],
      featured_media: mediaId,
      status: "publish"
    });
    console.log(result.id, result.title);
  }
}

(async () => {
  try {
    // illustration posts
    // const illustrationPosts = posts[0];
    // await processBatchOfPosts(illustrationPosts, 108);

    // surface pattern posts
    // const surfacePatternPosts = posts[1];
    // await processBatchOfPosts(surfacePatternPosts, 109);

    // work projects
    const workProjectPosts = posts[2];
    await processBatchOfPosts(workProjectPosts, 110);
  } catch (error) {
    console.log(error);
  }
})();

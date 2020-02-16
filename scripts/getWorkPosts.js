const playwright = require("playwright");
const fs = require("fs");

async function getItemsForType(page, type) {
  await page.goto(`https://sallypayne.com/${type}/`);
  const workItems = await page.$$(".et_pb_gallery_image");
  console.log(`${workItems.length} items found for ${type}`);
  const items = [];
  for (const workItem of workItems) {
    const title = await workItem.$eval("a", node => node.title);
    const href = await workItem.$eval("a", node => node.href);
    items.push({ title, href });
  }
  return items;
}

(async () => {
  try {
    const types = ["illustration", "surface-pattern-design", "work-projects"];
    const browser = await playwright["chromium"].launch();
    const context = await browser.newContext();
    const results = [];
    for (const type of types) {
      const page = await context.newPage();
      const items = await getItemsForType(page, type);
      results.push({ type, items });
    }
    fs.writeFileSync("data/types.json", JSON.stringify(results, null, 2));
    await browser.close();
  } catch (err) {
    console.log(err);
  }
})();

const keywordmap = [
  ["online marketing company nagpur", "about.html"],
  ["digital marketing agency in nagpur", "blog.html"],
  ["social media marketing agency in nagpur", "branding.html"],
  ["social media marketing nagpur", "career.html"],
  ["full service digital marketing agency", "contact.html"],
  ["digital marketing services", "eventmarketing.html"],
  ["performance marketing agency in nagpur", "influencer.html"],
  ["online marketing solutions", "ourwork.html"],
  ["top seo company in nagpur", "paidads.html"],
  ["Best Digital Marketing Company In Nagpur", "printmedia.html"],
  ["Best Digital Marketing Services In Nagpur", "production.html"],
  ["Best Digital Marketing Agency In Nagpur", "searchengine.html"],
  ["digital marketing companies in nagpur", "shopify.html"],
  ["digital marketing in nagpur", "socialmedia.html"],
  ["real estate specialist marketing agency in nagpur", "team.html"],
  ["Digital Advertising agency in nagpur", "webdevelopment.html"],
];

keywordmap.forEach(([keyword, filename]) => {
  const slug = keyword
    .toLowerCase()
    .replace(/[^a-z0-9 ]/gi, "") // remove special chars
    .replace(/\s+/g, "-"); // replace spaces with dashes

  console.log(
    `RewriteRule ^${filename.slice(
      -filename.length,
      -5
    )}-${slug}/?$ ${filename} [L]`
  );
});

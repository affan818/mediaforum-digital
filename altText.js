document.addEventListener("DOMContentLoaded", () => {
  const altText = [
    "online marketing company nagpur",
    "digital marketing agency in nagpur",
    "social media marketing agency in nagpur",
    "social media marketing nagpur",
    "full service digital marketing agency",
    "digital marketing services",
    "performance marketing agency in nagpur",
    "online marketing solutions",
    "seo services",
    "top seo company in nagpur",
    "Best Digital Marketing Company In Nagpur",
    "Best Digital Marketing Services In Nagpur",
    "Best Digital Marketing Agency In Nagpur",
    "digital marketing companies in nagpur",
    "digital marketing in nagpur",
    "seo company in nagpur",
    "seo company in nagpur",
    "Social Media Marketing Services In Nagpur",
    "online ad agency in nagpur",
    "real estate specialist marketing agency in nagpur",
    "website design agency in nagpur",
    "digital agency in nagpur",
    "PPC Advertising agency in nagpur",
    "Digital Advertising agency in nagpur",
    "Ecommerce Marketing agency in nagpur",
    "Internet Marketing agency in nagpur",
    "Digital Marketing Services provider in nagpur",
    "Paid Media Services provider in nagpur",
    "online Advertising Solutions in nagpur",
    "top advertising agencies in nagpur",
    "Influencer Marketing agency in nagpur",
    "social media marketing services india",
    "social media agency india",
    "Leading Digital Marketing Agency in nagpur",
    "youtube marketing agency in nagpur",
    "Best SEO Service in nagpur",
    "Local SEO Company in nagpur",
    "E-Commerce SEO Services in nagpur",
    "360-degree digital marketing solutions",
  ];
  const images = document.querySelectorAll("img");

  images.forEach((img, index) => {
    const text =
      altText[index] || altText[Math.floor(Math.random() * altText.length)];

    if (img.title) {
      img.alt = img.title;
    } else if (text) {
      img.alt = text;
      img.title = text;
    }

    img.loading = "lazy";
  });
});

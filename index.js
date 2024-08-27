import axios from "axios";
import * as cheerio from "cheerio";

async function webScraping() {
  const response = await axios.get("https://www.bewakoof.com/topselling-bottomwear");

  const html = response.data;

  const $ = cheerio.load(html);

  const productData = $(".productCardBox");
  const result = [];

  for (const product of productData) {
    result.push({
      productname: $(product).find(".productCardDetail .productNaming h2").text(),
      price: $(product).find(".productCardDetail .productPriceBox .discountedPriceText").text(),
      productRating: $(product).find(".clr-shade-3").text(),
    });
  }
  console.log(result);
}

webScraping();

// Product Name
// Price
// Availability (In Stock/Out of Stock)
// Product Rating (if available)

import puppeteer from "puppeteer";
import fs from "fs-extra";
import hbs from "handlebars";
import path from "path";

const generatePDFFromHTML = async function (data, requestNumber) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(data.html);
    await page.emulateMediaType("screen");
    await page.pdf({
      path: "pdf" + requestNumber + ".pdf",
      format: "A4",
      printBackground: true,
    });

    console.log("done");
    await browser.close();
  } catch (e) {
    console.log("error", e);
  }
};

export { generatePDFFromHTML };

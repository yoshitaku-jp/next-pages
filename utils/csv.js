import csv from "csv-parser";
import fs from "fs";

export function readCsvFile(file) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(file)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

import { readCsvFile } from "./csv";

export async function getStaticProps() {
  const data = await readCsvFile("./data/conferences.csv");
  return { props: { items: data } };
}

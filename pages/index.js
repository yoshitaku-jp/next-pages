import Head from "next/head";
import { readCsvFile } from "../utils/csv";

export async function getStaticProps() {
  const conferences = await readCsvFile("../data/conferences.csv");
  return { props: { conferences } };
}

export default function Conferences({ conferences }) {
  return (
    <>
      <Head>
        <title>Conferences</title>
      </Head>
      <h1>Conferences</h1>
      <ul>
        {conferences.map((conference, index) => (
          <li key={index}>
            <h2>{conference.title}</h2>
            <p>
              開催日: {conference["開催開始日"]} ~ {conference["開催終了日"]}
            </p>
            <a href={conference.HP}>公式サイト</a>
          </li>
        ))}
      </ul>
    </>
  );
}

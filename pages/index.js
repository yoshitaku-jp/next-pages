// pages/index.js

import Link from "next/link";
import { getStaticProps } from "../utils/getStaticProps";

function Home({ items }) {
  return (
    <div className="bg-gray-100 min-h-screen px-6 md:px-12 lg:px-24 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        カンファレンスタイムテーブル
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.url}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover object-center"
              />
              <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white py-1 px-4">
                {item.開催開始日} - {item.開催終了日}
              </div>
            </div>
            <div className="px-4 py-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm mb-6">
                {item.カンファレンスタイトル}
              </p>
              <div className="flex justify-end">
                <Link href={item.HP}>
                  <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition-colors duration-300">
                    公式サイトを見る
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { getStaticProps };
export default Home;

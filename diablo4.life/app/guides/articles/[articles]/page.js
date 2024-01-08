'use client';
import Image from 'next/image';
import data from '../../data.json';

export default function Slug({ params }) {
  const article = data.find((item) => item.link === params);

  return (
    <div className="text-[#bcbcbc]">
      {/* <h1>{article.heading}</h1>
      <Image alt={article.title} src={article.url} width={300} height={300} />
      <p>{article.article}</p> */}
    </div>
  );
}

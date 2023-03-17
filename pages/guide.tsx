import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';

type GUIDE_LIST = [
  {
    id: number;
    name: string;
  },
];

type Props = {
  data: GUIDE_LIST;
};

const GuidePage: NextPage<Props> = ({ data }: Props) => {
  useEffect(() => {
    const stVideo = document.getElementById('stvideo');
    if (stVideo != undefined) {
      stVideo.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    }
  });

  return (
    <>
      <Head>
        <title>
          はじめての方へ - ワンセルフ歯科医院 - Osaka Metro御堂筋線
          西中島南方駅より徒歩3分
        </title>
      </Head>
      <ol>
        {data.map((d) => (
          <div key={d.id}>
            <li>
              {d.id} {d.name}
            </li>
          </div>
        ))}
      </ol>
      <video
        id="stvideo"
        src={'YWine-train.mp4'}
        preload="metadata"
        controls
        controlsList="nodownload"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      ></video>
    </>
  );
};

export default GuidePage;

export const getStaticProps: GetStaticProps = async (_context) => {
  // clinicId
  const DATA = [
    {
      id: 1,
      name: 'name1',
    },
    {
      id: 2,
      name: 'name2',
    },
  ];

  return {
    props: {
      data: DATA,
    },
  };
};

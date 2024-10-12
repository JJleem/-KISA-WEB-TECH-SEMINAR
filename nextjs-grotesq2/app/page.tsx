/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
//params로 동적라우팅하기?
// 1. query string / search params ex) 주소?key=value&key2=value2 (url encoded / encoded url)
// 2. url params

import NextButton from "@/components/NextButton";
import PrevButton from "@/components/PrevButton";
import dayjs from "dayjs";

// ex ) localhost:3000/?targetDt=20241009

type Props = {
  searchParams: {
    targetDt?: string;
  };
};

const today = dayjs().subtract(1, "day").format("YYYYMMDD");

export default async function Home({
  searchParams: { targetDt = today },
}: Props) {
  //데이터 로드
  const key = "44bd7c5e85b382136af9cb1327195be6";

  const baseUrl =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
  const url = `${baseUrl}?key=${key}&targetDt=${targetDt}`;
  //요청
  const response = await fetch(url);
  //json 파싱
  const json: ResponseType = await response.json();

  const char = "a"; // string
  const chars = ["a", "b", "c"]; // string[]

  //return 할 수 있는 유형
  //1. Primitive 타입 데이터 ( number, string, boolean 등)
  //2. JSX Node
  //3. 1 혹은 2 로 구성된 배열
  //Array.map
  return (
    <div className="w-[500px] mx-auto mt-40">
      <div className="flex justify-between">
        <PrevButton targetDt={targetDt} />
        {dayjs(targetDt).format("YYYY년 MM월 DD일")}
        <NextButton targetDt={targetDt} />
      </div>
      <ol className="divide-y *:py-4 mt-4">
        {json.boxOfficeResult.dailyBoxOfficeList.length > 0 ? (
          json.boxOfficeResult.dailyBoxOfficeList.map((item: ItemType) => (
            <li key={item.rnum}>
              {item.rank}위 - {item.movieNm}{" "}
              <span className="text-xs">({item.rankOldAndNew})</span>
            </li>
          ))
        ) : (
          <div className="flex justify-center font-bold">정보 없음</div>
        )}
      </ol>
      <pre>
        <code>{JSON.stringify(json, null, 2)}</code>
      </pre>
    </div>
  );
}

type ResponseType = {
  boxOfficeResult: {
    boxofficeType: string;
    showRange: string;
    dailyBoxOfficeList: ItemType[];
  };
};

type ItemType = {
  rnum: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
  salesAmt: string;
  salesShare: string;
  salesInten: string;
  salesChange: string;
  salesAcc: string;
  audiCnt: string;
  audiInten: string;
  audiChange: string;
  audiAcc: string;
  scrnCnt: string;
  showCnt: string;
};

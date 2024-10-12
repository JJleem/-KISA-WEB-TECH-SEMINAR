/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
//params로 동적라우팅하기?
// 1. query string / search params ex) 주소?key=value&key2=value2 (url encoded / encoded url)
// 2. url params

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
  const json = await response.json();

  const char = "a"; // string
  const chars = ["a", "b", "c"]; // string[]

  //return 할 수 있는 유형
  //1. Primitive 타입 데이터 ( number, string, boolean 등)
  //2. JSX Node
  //3. 1 혹은 2 로 구성된 배열
  //Array.map
  return (
    <div className="">
      <ol>
        {json.boxOfficeResult.dailyBoxOfficeList.map((item: any) => (
          <li key={item.rnum}>
            {item.rank}위 - {item.movieNm}
          </li>
        ))}
      </ol>
      {/* <pre>
        <code>{JSON.stringify(json, null, 2)}</code>
      </pre> */}
    </div>
  );
}

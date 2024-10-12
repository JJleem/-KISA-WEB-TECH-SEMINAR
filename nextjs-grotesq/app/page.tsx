import Image from "next/image";
import NewComponent from "./NewComponent";

export default async function Home() {
  console.log("home component");
  // 자바스크립트 파트
  const inlineStyle = { textDecoration: "underline" };

  // XML 파트
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={inlineStyle}
    >
      <div>접속시각 : {new Date().toISOString()}</div>
      <NewComponent />
    </main>
  );
}

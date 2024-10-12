"use client";

// import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname(); //react hook은 클라이언트 에서만 사용됨 // react 19에서 변할수도있음
  useEffect(() => {
    //클라이언트 단에서 앱 초기화 시점에 실행해야할내용
    //axios.defaults
  }, []);
  return <>{children}</>;
}

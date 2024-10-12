"use client";

import dayjs from "dayjs";

import { useRouter } from "next/navigation";

type Props = {
  targetDt: string;
};

export default function PrevButton({ targetDt }: Props) {
  const router = useRouter();
  // const searchParams = useSearchParams();
  return (
    <button
      onClick={() => {
        // const date = searchParams.get("targetDt");
        router.push(
          `?targetDt=${dayjs(targetDt).subtract(1, "day").format("YYYYMMDD")}`
        );
      }}
    >
      이전
    </button>
  );
}

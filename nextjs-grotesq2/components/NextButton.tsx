"use client";

import dayjs from "dayjs";

import { useRouter } from "next/navigation";

type Props = {
  targetDt: string;
};

export default function NextButton({ targetDt }: Props) {
  const router = useRouter();

  // const searchParams = useSearchParams();
  return (
    <button
      onClick={() => {
        // const date = searchParams.get("targetDt");
        router.push(
          `?targetDt=${dayjs(targetDt).add(1, "day").format("YYYYMMDD")}`
        );
      }}
    >
      다음
    </button>
  );
}

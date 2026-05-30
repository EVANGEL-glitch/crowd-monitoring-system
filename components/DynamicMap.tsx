"use client";

import dynamic from "next/dynamic";

const CrowdMapNoSSR = dynamic(
  () => import("./CrowdMap"),
  {
    ssr: false,
  }
);

export default function DynamicMap(props: any) {
  return <CrowdMapNoSSR {...props} />;
}
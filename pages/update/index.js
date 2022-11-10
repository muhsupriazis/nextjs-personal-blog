import { useRouter } from "next/router";
import { useEffect } from "react";

export default function () {
  const route = useRouter();
  useEffect(() => {
    route.push("/menage");
  });
}

import { useSearchParams } from "next/navigation";

export const useHiddenInIframe = () => {
  const searchParams = useSearchParams();
  const isIframe = searchParams.get("embed") === "true";

  return { isIframe };
};

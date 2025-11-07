import type { Metadata } from "next";
import { PrivacyPage } from "@/page/PrivacyPage";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: {
    index: false,
    follow: true,
  },
};

export default PrivacyPage;
import Introduction from "@/components/introduction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <Introduction />;
}

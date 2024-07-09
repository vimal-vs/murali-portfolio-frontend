import DownloadCard from "@/components/DownloadCard";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <TestimonialCard />
      <DownloadCard />
    </main>
  );
}

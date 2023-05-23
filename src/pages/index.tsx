import Hero from "@/components/Sections/Hero";
import HeadData from "@/components/Head";

export default function Home() {
  return (
    <>
      <HeadData
        title={"Oasis Marketplace | Home"} />
        {/* Hero Section */}
        <main>
          <Hero />
        </main>
    </>
  );
}

import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 max-w-full md:max-w-3xl">
        <About />
        <Projects />
      </div>
    </>
  );
}

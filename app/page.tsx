import { UpdatedPill } from "@/components/UpdatedPill";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 max-w-full md:max-w-2xl">
      <p className="fade-in [--i:2]">
        Mostly self taught software engineer. Frontend and Backend. Still a
        student.
      </p>
      <p className="fade-in [--i:3]">
        Currently learning more of backend, working on creating a personal brand showcase website,
        brushing up my skills by creating other smaller websites and apps, and
        previously worked on designing a website for 447 Studio.
      </p>
      <p className="fade-in [--i:4]">
        I dabble into some IT stuff in my free time if possible. If I'm not doing that, you'd usually find me in my linux install ricing my setup and working on it.
      </p>
      {/* <UpdatedPill /> */}
    </div>
  );
}

import Marquee from "@/components/Marquee"

export default function Home() {
  return (
    <>
      {/* <Marquee /> */}
      <div className="flex flex-col gap-16 max-w-full md:max-w-3xl text-justify">
        <section className="flex flex-col gap-4 text-justify">
          <p className="fade-in [--i:2]">
            Mostly self taught software engineer. Frontend and Backend. Still a
            student.
          </p>
          <p className="fade-in [--i:3]">
            Currently learning more of backend, working on creating a personal
            brand showcase website, brushing up my skills by creating other
            smaller websites and apps, and previously worked on designing a
            website for <span className="link-text">447 Studio</span>.
          </p>
          <p className="fade-in [--i:4]">
            I also dabble into some IT stuff if possible. If I&apos;m not doing
            that, you&apos;d usually find me in my linux install ricing my setup
            and working on it.
          </p>
          <p className="fade-in [--i:5]">
            In my free time, I would usually be playing some music or watching
            something. As for my favourite anime, it would be{" "}
            <a
              href="https://grokipedia.com/page/Legend_of_the_Galactic_Heroes"
              target="_blank"
              rel="noopener noreferrer"
              className="link-text"
            >
              Legend of the Galactic Heroes ↗
            </a>{" "}
            by far. Those who have seen it know ball.
          </p>
          {/* <div className="flex flex-row gap-4">
          {links.map(({ label, href, external }) => (
            <a
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="link-text"
            >
              {label}
            </a>
          ))}
        </div> */}
        </section>

        {/* <section className="fade-in flex flex-col gap-4 [--i:6]">
        <h2>Links</h2>

      </section> */}

        <section className="fade-in flex flex-col gap-4 [--i:7]">
          <h2>Projects</h2>
        </section>
      </div>
    </>
  );
}

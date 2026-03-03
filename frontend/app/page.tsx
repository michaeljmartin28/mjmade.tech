import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypingWords from "./components/TypingWords";
import Link from "next/link";
import Agent from "./components/agent/Agent";

export default function Home() {
  return (
    <div className="min-h-full bg-bg text-text">
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h1 className="text-6xl font-bold tracking-tight text-primary">
            Hi, my name is Michael Martin. <br />
            I&apos;m a <TypingWords />
          </h1>

          <p className="text-xl text-textMuted max-w-2xl leading-relaxed">
            I&apos;m a software engineer with a passion for building robust,
            secure systems. With a background in offensive security, I have a
            unique perspective on how to design and implement software that can
            withstand real-world attacks. I enjoy working on projects that
            challenge me to think critically and creatively about engineering
            problems.
            <br /> <br />I believe in continuous learning and growth, both
            personally and professionally, and I&apos;m always looking for
            opportunities to connect with like-minded individuals and
            collaborate on interesting projects.
            <br />
            <br />
            When I&apos;m not coding, you can find me exploring new technologies
            or spending time with my family. I enjoy 3D printing, chess, and
            getting lost in worlds like Gielinor, Night City, the Continent, and
            Tamriel, just to name a few. This site is a collection of my
            projects, skills, and thoughts. Feel free to explore and reach out
            if you would like to connect!
          </p>
        </div>
        <div className="max-w-4xl mt-8 mx-auto px-6 flex">
          <a
            className="mx-auto text-4xl text-textMuted hover:text-primary transition-colors"
            href="https://github.com/michaeljmartin28"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="mx-auto text-4xl text-textMuted hover:text-primary transition-colors"
            href="https://www.linkedin.com/in/michael-martin-95a26611a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>

      <section className="">
        <p className="text-center text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
          Want to learn more? Check out my projects, skills, and blog for deep
          dives into my work and thoughts on software engineering and security.
        </p>

        <div className="flex mx-auto mt-8 gap-6">
          <Link
            className="mx-auto block bg-primary text-text px-6 py-3 rounded-lg animation-flowGradient"
            href="/skills"
          >
            Explore My Skills
          </Link>
          <Link
            className="mx-auto block bg-primary text-text px-6 py-3 rounded-lg animation-flowGradient"
            href="/blog"
          >
            Read My Blog
          </Link>
        </div>
      </section>
    </div>
  );
}

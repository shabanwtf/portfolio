import Link from "next/link";
import { MY_HANDLE } from "@/config/site";

const START_YEAR = 2023;

const works = [
  {
    title: "Efferd",
    tagline: "leatest one",
    description:
      "A collection of components/blocks build using shadcn/ui for building modern web applications.",
    url: "https://ui.efferd.com",
  },
  {
    title: "Ambassador at 21st Dev",
    tagline: "joind in Fed 2025",
    description:
      "I am an ambassador at 21st.dev. I contribute to the community by sharing my components and knowledge with others.",
    url: `https://21st.dev/community/${MY_HANDLE}`,
  },
  {
    title: "Ilhaf",
    tagline: "acquired",
    description:
      "Ilhaf is an online diary for reciters. where reciters can find all the content they need to recite.",
    url: "https://ilhaf.com",
  },
  {
    title: "Shhaz",
    tagline: "built when I was 15",
    description:
      "shhaz.com - Explore millions of names with their origin, meaning, gender, pronunciation, lucky number, and more.",
    url: "https://shhaz.com",
  },
];

export default function Home() {
  const birthDate = new Date("2007-02-09");
  const today = new Date();
  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
      ? 1
      : 0);

  const yearsOfExperience = new Date().getFullYear() - START_YEAR; // Started coding in 2020

  return (
    <div className="flex h-full flex-col">
      <div className="cpx flex flex-1 flex-col justify-center space-y-4 py-16">
        <h1 className="font-heading font-medium tracking-tight">
          Shaban Haider
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          A {age}-year-old self-made full-stack developer with{" "}
          {yearsOfExperience}+ years of hands-on experience building sleek,
          high-performance web applications. I focus on creating fast,
          accessible, and human-centered digital experiences that simply feel
          right.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Currently focused on mastering the latest web technologies and
          contributing to open-source projects that solve real-world problems.
        </p>
      </div>

      <div className="cpx border-y border-dashed py-2">
        <h2 className="font-heading font-medium tracking-tight">Works</h2>
      </div>
      <div className="cpx flex-1 space-y-4 py-12">
        {works.map((work) => (
          <Link
            className="relative flex w-full flex-col gap-2 rounded-md border border-dashed p-4 hover:bg-accent dark:hover:bg-accent/60"
            href={work.url}
            key={work.title}
            target="_blank"
          >
            <div className="flex w-full items-center justify-between">
              <h3 className="font-heading font-medium text-lg tracking-wider">
                {work.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                ( {work.tagline})
              </p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {work.description}
            </p>
          </Link>
        ))}
      </div>
      <div className="cpx border-y border-dashed py-2">
        <h2 className="font-heading font-medium tracking-tight">Contact</h2>
      </div>
      <div className="cpx flex-1 space-y-4 py-12 text-muted-foreground leading-relaxed">
        <p>
          You can reach me via email at{" "}
          <a
            className="text-primary hover:underline"
            href="mailto:sshahaider@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            sshahaider@gmail.com
          </a>
          .
        </p>
        <p>
          I’m also active on{" "}
          <a
            className="text-primary hover:underline"
            href={`https://x.com/${MY_HANDLE}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            X (Twitter)
          </a>{" "}
          — feel free to DM me anytime.
        </p>
        <p>
          Or, if you’d like to chat, you can{" "}
          <a
            className="text-primary hover:underline"
            href={`https://cal.com/${MY_HANDLE}/10min`}
            rel="noopener noreferrer"
            target="_blank"
          >
            schedule a quick call
          </a>{" "}
          with me on Cal.com.
        </p>
        <p>
          you can also Follow me on{" "}
          <a
            className="text-primary hover:underline"
            href={`https://www.youtube.com/@${MY_HANDLE}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            YouTube
          </a>
        </p>
      </div>
    </div>
  );
}

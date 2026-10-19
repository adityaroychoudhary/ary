// components/sections/ReachOut.tsx
import ExternalLink from "@/components/ui/ExternalLink";
import { contact } from "@/lib/data";

const display = (href: string) => href.replace(/^https?:\/\//, "");

export default function Afield({ order }: { order: number }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Reach out</h2>

      <p>
        Best reached by{" "}
        <a
          href={`mailto:${contact.email}`}
          className="italic underline underline-offset-2 opacity-70 transition-opacity hover:opacity-100"
        >
          email
        </a>
        .
      </p>

      <ul className="flex flex-col gap-2">
        {contact.socials.map(({ label, href }) => (
          <li key={label} className="flex flex-wrap gap-x-2">
            <ExternalLink href={href}>
              {display(href)}
            </ExternalLink>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

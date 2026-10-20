import ExternalLink from "@/components/ui/ExternalLink";
import Reveal, { sectionOrder } from "@/components/ui/Reveal";
import { contact } from "@/lib/data";

const display = (href: string) => href.replace(/^https?:\/\//, "");

export default function Afield({ order }: { order: number }) {
  return (
    <section className="flex flex-col gap-8" style={sectionOrder(order)}>
      <Reveal className="flex flex-col gap-2">
        <h1>Afield</h1>
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
      </Reveal>

      <ul className="flex flex-col space-y-2">
        {contact.socials.map(({ label, href }) => (
          <li key={label} className="flex flex-wrap">
            <ExternalLink href={href}>{display(href)}</ExternalLink>
            <span className="ml-3">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

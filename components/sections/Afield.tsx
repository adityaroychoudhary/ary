// components/sections/ReachOut.tsx
import ExternalLink from "@/components/ui/ExternalLink";
import { contact } from "@/lib/data";
import Reveal, { sectionOrder } from "../ui/Reveal";

export default function Afield({ order }: { order: number }) {
  return (
    <section className="flex flex-col gap-8" style={sectionOrder(order)}>
      <Reveal className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Afield</h2>

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
      <Reveal>
        <ul className="flex flex-col gap-2">
          {contact.socials.map(({ label, href }) => (
            <li key={label}>
              <ExternalLink href={href}>
                {label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

import "./contact.css";

const CONTACT_LINKS = [
  {
    label: "Email",
    href: "mailto:okaekwukemdy@gmail.com",
    icon: "mail-outline",
    note: "okaekwukemdy@gmail.com",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2349019419639",
    icon: "logo-whatsapp",
    note: "Chat on WhatsApp",
  },
  {
    label: "GitHub",
    href: "https://github.com/OsmondJnr",
    icon: "logo-github",
    note: "View repositories",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kemdy-osmond-okaekwu-52b280381",
    icon: "logo-linkedin",
    note: "Connect professionally",
  },
  {
    label: "X",
    href: "https://x.com/Osmond_Jnr",
    icon: "logo-x",
    note: "Follow updates",
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact_header">
        <span className="section_tag">Contact</span>
        <h2>Let&apos;s build something together</h2>
        <p>
          If you want to collaborate, hire me, or just say hello, use any of the
          links below to reach me quickly.
        </p>
      </div>

      <div className="contact_grid">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            className="contact_card"
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={link.label}
          >
            <span className="contact_icon" aria-hidden="true">
              <ion-icon name={link.icon}></ion-icon>
            </span>
            <span className="contact_copy">
              <strong>{link.label}</strong>
              <small>{link.note}</small>
            </span>
            <span className="contact_arrow" aria-hidden="true">
              <ion-icon name="arrow-up-outline"></ion-icon>
            </span>
          </a>
        ))}
      </div>

      <div className="contact_direct">
        <a className="contact_mailto" href="mailto:okaekwukemdy@gmail.com">
          <ion-icon name="mail-open-outline"></ion-icon>
          Send a mail
        </a>
      </div>
    </section>
  );
}

export default Contact;
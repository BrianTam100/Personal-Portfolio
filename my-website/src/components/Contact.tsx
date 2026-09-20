export default function Contact() {
  return (
    <div className="contact-layout">
      <div>
        <p className="eyebrow">05 / Get in touch</p>
        <h2 id="contact-heading">Let’s talk.</h2>
        <p>I’m looking for a Summer 2027 software engineering internship. Contact me if you think I’d be a good fit for your team.</p>
      </div>
      <div className="contact-actions">
        <a className="button button-accent" href="mailto:briantam100@gmail.com">briantam100@gmail.com <span aria-hidden="true">↗</span></a>
        <a className="contact-phone" href="tel:+13477668865">347-766-8865</a>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/brian-tam1/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/BrianTam100" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">Résumé ↗</a>
        </div>
      </div>
    </div>
  );
}

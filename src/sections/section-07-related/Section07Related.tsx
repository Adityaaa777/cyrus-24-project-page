import { useRelatedCarousel } from "./useRelatedCarousel"
import "./section07-related.css"

const projects = [
  {
    title: "Nzcu",
    description: "Book cars, scooters, e-rickshaws, and loaders—all from one platform.",
    category: "Mobile App Design",
    image: "/assets/related-covers/related-nzcu.webp",
    href: "https://adityaaa777.github.io/nzcu-project-page/",
  },
  {
    title: "Cabzo",
    description: "A smart ride booking app designed for fast, convenient, and reliable travel.",
    category: "Mobile App Design",
    image: "/assets/related-covers/related-cabzo.webp",
    href: "https://adityaaa777.github.io/cabzo-project-page/",
  },
  {
    title: "Safe 2 Destination",
    description: "Book safe daily or monthly rides with a seamless travel experience.",
    category: "Mobile App Design",
    image: "/assets/related-covers/related-safe2destination.webp",
    href: "https://adityaaa777.github.io/safe2destination-project-page/",
  },
  {
    title: "Attach App",
    description: "Connect with caring listeners anytime, anywhere in a safe, supportive space.",
    category: "Mobile App Design",
    image: "/assets/related-covers/related-attach-app.webp",
    href: "https://adityaaa777.github.io/attach-app-project-page/",
  },
  {
    title: "Attach Website",
    description: "Explore a welcoming space for open conversations and support.",
    category: "Web Design",
    image: "/assets/related-covers/related-attach-website.webp",
    href: "https://adityaaa777.github.io/attach-website-project-page/",
  },
]

/** Standalone related project carousel from Figma node 67:3793. */
export default function Section07Related() {
  const { track, move } = useRelatedCarousel()

  return (
    <section className="cyrus-section-08" id="related-projects" aria-labelledby="cyrus-related-title" data-node-id="67:3793">
      <div className="cyrus-related-content">
        <header className="cyrus-related-header">
          <h2 id="cyrus-related-title">Related Projects</h2>
          <nav className="cyrus-related-controls" aria-label="Related project carousel">
            <button type="button" onClick={() => move(-1)} aria-label="Previous projects"><img src="/assets/arrow-left.svg" alt="" /></button>
            <button type="button" onClick={() => move(1)} aria-label="Next projects"><img src="/assets/arrow-left.svg" alt="" /></button>
          </nav>
        </header>
        <div className="cyrus-related-track" ref={track}>
          {projects.map((project) => (
            <a className="cyrus-related-card" href={project.href} key={project.title} aria-label={`View ${project.title} project`}>
              <img className="cyrus-related-cover" src={project.image} alt={`${project.title} project cover`} />
              <div className="cyrus-related-card-content">
                <div className="cyrus-related-meta">
                  <span>{project.category}</span>
                  <span className="cyrus-related-card-arrow" aria-hidden="true">
                    <img src="/assets/section-08-related/project-arrow-alt.svg" alt="" />
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

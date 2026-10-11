import { useRef } from "react"
import "./section07-related.css"

const projects = [
  {
    title: "Nzcu",
    description:
      "Book cars, scooters, e-rickshaws, and\nloaders—all from one platform.",
    image: "/assets/section-07-related/nzcu.png",
    imageAlt: "Nzcu mobile application project cover",
  },
  {
    title: "Corezap",
    description:
      "Manage rides and fleet operations from one\nintelligent platform.",
    image: "/assets/section-07-related/corezap.png",
    imageAlt: "Corezap fleet platform project cover",
  },
  {
    title: "Cabzo",
    description:
      "A smart ride booking app designed for fast,\nconvenient, and reliable travel.",
    image: "/assets/section-07-related/cabzo.png",
    imageAlt: "Cabzo ride booking project cover",
  },
]

/** Standalone related project carousel from Figma node 67:3793. */
export default function Section07Related() {
  const track = useRef<HTMLDivElement>(null)
  const move = (direction: -1 | 1) => {
    const element = track.current
    if (!element) return
    const card = element.querySelector<HTMLElement>(".cyrus-related-card")
    element.scrollBy({ left: direction * (card?.offsetWidth ?? 400) + direction * 32, behavior: "smooth" })
  }

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
            <article className="cyrus-related-card" key={project.title}>
              <img className="cyrus-related-cover" src={project.image} alt={`${project.title} project cover`} />
              <div className="cyrus-related-card-content">
                <div className="cyrus-related-meta">
                  <span>Mobile App Design</span>
                  <a className="cyrus-related-card-arrow" href={project.title === "Nzcu" ? "../NZCU_PROJECT_PAGE/" : project.title === "Corezap" ? "#corezap" : "../CABZO_PROJECT_PAGE/v1/"} aria-label={`Open ${project.title} project`}>
                    <img src="/assets/section-08-related/project-arrow-alt.svg" alt="" />
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

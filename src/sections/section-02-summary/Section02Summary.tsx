import './section02-summary.css'

type ProjectTypeGroupProps = {
  items: string[]
}

function ProjectTypeGroup({ items }: ProjectTypeGroupProps) {
  return (
    <section className="project-type-group">
      <h3>PROJECT TYPE :</h3>
      <div className="project-type-list">
        {items.map((item, index) => (
          <span className="project-type-pill" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

/** Project summary from Figma node 1:475. */
export function ProjectSummarySection() {
  return (
    <section
      className="project-summary"
      aria-labelledby="project-summary-title"
      data-node-id="1:475"
    >
      <h1 id="project-summary-title">Cyrus 24 Taxi Service App UI</h1>

      <section
        className="project-introduction"
        aria-labelledby="introduction-title"
      >
        <h2 id="introduction-title">INTRODUCTION :</h2>
        <div className="project-copy">
          <p>
            Cyrus 24 was designed as a taxi service app that makes{" "}
            <br className="desktop-break" />
            every ride simple and comfortable. <br className="desktop-break" />
            The rider experience brings together destination search,{" "}
            <br className="desktop-break" />
            vehicle selection, ride scheduling, and clear trip updates{" "}
            <br className="desktop-break" />
            in an easy-to-use booking flow.
          </p>

          <p>
            From choosing a vehicle to confirming a ride,{" "}
            <br className="desktop-break" />
            each screen helps riders move confidently from{" "}
            <br className="desktop-break" />
            booking to arrival.
          </p>

          <p>
            A companion driver app covers onboarding, trip details,{" "}
            <br className="desktop-break" />
            ride history, earnings, and payments.
          </p>
        </div>
      </section>

      <aside className="project-metadata" aria-label="Project metadata">
        <ProjectTypeGroup items={["Mobile App Design"]} />
        <ProjectTypeGroup items={["Mobile App Design", "Mobile App Design"]} />
      </aside>
    </section>
  )
}


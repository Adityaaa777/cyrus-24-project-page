import { DetailImage } from "../../components/DetailImage"
import "./section04-app-showcase.css"

const phones = [
  { src: "/assets/section-04-app-showcase/user-onboarding.png", alt: "Cyrus rider onboarding screen", x: 30 },
  { src: "/assets/section-04-app-showcase/user-home.png", alt: "Cyrus rider home screen", x: 332 },
  { src: "/assets/section-04-app-showcase/driver-onboarding.png", alt: "Cyrus driver onboarding screen", x: 661 },
  { src: "/assets/section-04-app-showcase/driver-home.png", alt: "Cyrus driver home screen", x: 963 },
]

export default function Section04AppShowcase() {
  return (
    <section className="cyrus-app-showcase" aria-label="Rider and driver apps" data-node-id="1:450">
      <div className="cyrus-app-showcase__panel" data-node-id="1:451">
        <div className="cyrus-app-showcase__heading cyrus-app-showcase__heading--user">
          <h2>User App</h2>
          <p>Onboarding &amp; Home Experience</p>
        </div>
        <div className="cyrus-app-showcase__heading cyrus-app-showcase__heading--driver">
          <h2>Driver App</h2>
          <p>Onboarding &amp; Home Dashboard</p>
        </div>
        {phones.map((phone) => (
          <div className="cyrus-app-showcase__phone" key={phone.src} style={{ left: `${(phone.x / 1270) * 100}%` }}>
            <DetailImage src={phone.src} alt={phone.alt} draggable="false" />
          </div>
        ))}
      </div>
    </section>
  )
}

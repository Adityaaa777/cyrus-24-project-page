import type { CSSProperties } from "react"
import { DetailImage } from "../../components/DetailImage"
import "./section05-driver-gallery.css"

type Screen = { id: string; file: string; alt: string; x: number; y: number; w: number; h: number }

// The order follows Figma's layer stack, front to back.
const screens: Screen[] = [
  { id: "1:449", file: "add-upi.png", alt: "Add UPI screen", x: 1076, y: 512, w: 249, h: 539 },
  { id: "1:448", file: "onboarding.png", alt: "Driver onboarding screen", x: 1076, y: -112, w: 277, h: 600 },
  { id: "1:447", file: "ride-history.png", alt: "Ride history screen", x: 530, y: 557, w: 249, h: 617 },
  { id: "1:446", file: "vehicle-preference.png", alt: "Vehicle preference screen", x: 803, y: 330, w: 249, h: 539 },
  { id: "1:445", file: "home-c-5.png", alt: "Driver home screen", x: 803, y: -233, w: 249, h: 539 },
  { id: "1:444", file: "earning.png", alt: "Driver earnings screen", x: 530, y: -81, w: 249, h: 614 },
  { id: "1:443", file: "payment-detail.png", alt: "Payment detail screen", x: 257, y: 330, w: 249, h: 539 },
  { id: "1:442", file: "arriving-client.png", alt: "Arriving at client screen", x: 257, y: -233, w: 249, h: 539 },
  { id: "1:441", file: "home-regular.png", alt: "Driver ride screen", x: 257, y: -291, w: 249, h: 539 },
  { id: "1:440", file: "home-c-4.png", alt: "Driver dashboard screen", x: -16, y: 486, w: 249, h: 539 },
  { id: "1:439", file: "signup.png", alt: "Driver signup screen", x: -16, y: -77, w: 249, h: 539 },
]

function placement(screen: Screen): CSSProperties {
  return {
    left: `${(screen.x / 1270) * 100}%`,
    top: `${(screen.y / 855) * 100}%`,
    width: `${(screen.w / 1270) * 100}%`,
    height: `${(screen.h / 855) * 100}%`,
  }
}

export default function Section05DriverGallery() {
  return (
    <section className="cyrus-driver-gallery-section" aria-label="Cyrus driver app screen gallery" data-node-id="1:437">
      <div className="cyrus-driver-gallery-panel" data-node-id="1:438">
        {screens.slice().reverse().map((screen) => (
          <div className="cyrus-driver-gallery-screen" key={screen.id} data-node-id={screen.id} style={placement(screen)}>
            <DetailImage src={`/assets/section-05-driver-gallery/${screen.file}`} alt={screen.alt} draggable="false" />
          </div>
        ))}
      </div>
    </section>
  )
}

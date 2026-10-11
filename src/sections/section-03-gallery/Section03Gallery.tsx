import type { CSSProperties } from "react"
import { DetailImage } from "../../components/DetailImage"
import "./section03-gallery.css"

type Screen = {
  id: string
  label: string
  file: string
  x: number
  y: number
  width: number
  height: number
}

const screens: Screen[] = [
  { id: "1:474", label: "Cyrus home screen", file: "home-c-3.png", x: 1051, y: -178, width: 249, height: 761 },
  { id: "1:473", label: "Cyrus favorites screen", file: "favorites-c-1.png", x: 1051, y: 607, width: 249, height: 539 },
  { id: "1:472", label: "Cyrus rides screen", file: "my-ride-c-2.png", x: 778, y: 441, width: 249, height: 539 },
  { id: "1:471", label: "Money added screen", file: "money-added-c-1.png", x: 778, y: -122, width: 249, height: 539 },
  { id: "1:470", label: "Ride scheduled screen", file: "ride-scheduled-c-1.png", x: 505, y: 552, width: 249, height: 539 },
  { id: "1:469", label: "Reviews and ratings screen", file: "review-rating-c-1.png", x: 505, y: -11, width: 249, height: 539 },
  { id: "1:468", label: "Ride completed screen", file: "ride-completed-c-1.png", x: 232, y: 417, width: 249, height: 539 },
  { id: "1:467", label: "Add to favorites screen", file: "add-favorites-c-1.png", x: 232, y: -147, width: 249, height: 540 },
  { id: "1:466", label: "Cyrus home screen", file: "home-c-2.png", x: -41, y: 528, width: 249, height: 761 },
  { id: "1:465", label: "Cyrus onboarding screen", file: "onboarding-c-1.png", x: -41, y: -35, width: 249, height: 539 },
]

function placement(screen: Screen): CSSProperties {
  return {
    left: `${(screen.x / 1270) * 100}%`,
    top: `${(screen.y / 855) * 100}%`,
    width: `${(screen.width / 1270) * 100}%`,
    height: `${(screen.height / 855) * 100}%`,
  }
}

export default function Section03Gallery() {
  return (
    <section className="cyrus-gallery-section" aria-label="Cyrus mobile screen gallery" data-node-id="1:463">
      <div className="cyrus-gallery-panel" data-node-id="1:464">
        {screens.map((screen) => (
          <div className="cyrus-gallery-screen" data-node-id={screen.id} key={screen.id} style={placement(screen)}>
            <DetailImage alt={screen.label} src={`/assets/section-03-gallery/${screen.file}`} draggable="false" />
          </div>
        ))}
      </div>
    </section>
  )
}

import { DetailImage } from "../../components/DetailImage"
import "./section01-cover.css"

const assetBase = "/assets/section-01-cover"

export type Section01CoverProps = {
  backHref?: string
  nextHref?: string
}

/** Cyrus-24 cover from Figma node 1:497. Original source images remain unmodified. */
export default function Section01Cover({
  backHref = "#back",
  nextHref = "#next-project",
}: Section01CoverProps) {
  return (
    <section className="cyrus-cover" aria-label="Cyrus-24 taxi service cover" data-node-id="1:497">
      <div className="cyrus-cover__circle" data-node-id="1:505">
        <div className="cyrus-cover__phone cyrus-cover__phone--right" data-node-id="1:506">
          <DetailImage src={`${assetBase}/phone-right.png`} alt="Cyrus-24 ride booking home screen" />
        </div>
      </div>

      <nav className="cyrus-cover__navigation" aria-label="Project navigation" data-node-id="1:507">
        <a href={backHref} className="cyrus-cover__nav-link" data-node-id="1:508">
          <img src={`${assetBase}/arrow-left.svg`} alt="" aria-hidden="true" />
          <span>Go Back</span>
        </a>
        <a href={nextHref} className="cyrus-cover__nav-link" data-node-id="1:512">
          <span>Next Project</span>
          <img src={`${assetBase}/arrow-right.svg`} alt="" aria-hidden="true" />
        </a>
      </nav>

      <img className="cyrus-cover__logo" src={`${assetBase}/logo.png`} alt="" data-node-id="1:500" />
      <h1 className="cyrus-cover__title" data-node-id="1:499">Cyrus 24</h1>
      <p className="cyrus-cover__service" data-node-id="1:517">(Taxi Service)</p>

      <div className="cyrus-cover__copy" data-node-id="1:501">
        <p className="cyrus-cover__tagline" data-node-id="1:502">Tap. Ride. Relax.</p>
        <p className="cyrus-cover__description" data-node-id="1:503">
          Cyrus 24 takes you wherever life goes.
        </p>
      </div>

      <div className="cyrus-cover__car" data-node-id="1:504">
        <img src={`${assetBase}/green-car.png`} alt="Green Cyrus-24 taxi" />
      </div>

      <div className="cyrus-cover__phone cyrus-cover__phone--center" data-node-id="1:516">
        <DetailImage src={`${assetBase}/phone-center.png`} alt="Cyrus-24 app welcome screen" />
      </div>
    </section>
  )
}

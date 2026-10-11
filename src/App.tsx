import Section01Cover from "./sections/section-01-cover/Section01Cover"
import { ProjectSummarySection as Section02Summary } from "./sections/section-02-summary/Section02Summary"
import Section03Gallery from "./sections/section-03-gallery/Section03Gallery"
import Section04AppShowcase from "./sections/section-04-app-showcase/Section04AppShowcase"
import Section05DriverGallery from "./sections/section-05-driver-gallery/Section05DriverGallery"
import Section06DesignSystem from "./sections/section-06-design-system/Section06DesignSystem"
import Section07Related from "./sections/section-07-related/Section07Related"
import Section08Footer from "./sections/section-08-footer/Section08Footer"

const sectionPreviews = {
  "1": <Section01Cover />,
  "2": <Section02Summary />,
  "3": <Section03Gallery />,
  "4": <Section04AppShowcase />,
  "5": <Section05DriverGallery />,
  "6": <Section06DesignSystem />,
  "7": <Section07Related />,
  "8": <Section08Footer />,
}

/** Cyrus-24 case study, assembled in the supplied Figma order. */
function FullProjectPage() {
  return <main className="cyrus-project-page"><Section01Cover /><Section02Summary /><Section03Gallery /><Section04AppShowcase /><Section05DriverGallery /><Section06DesignSystem /><Section07Related /><Section08Footer /></main>
}

export default function App() {
  const section = new URLSearchParams(window.location.search).get("section")
  const preview = sectionPreviews[section as keyof typeof sectionPreviews]

  if (preview) {
    return <main className="cyrus-project-page">{preview}</main>
  }

  return <FullProjectPage />
}

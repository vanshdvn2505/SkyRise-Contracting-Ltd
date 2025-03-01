import ProjectCapabilities from "../components/home/ProjectCapabilities"
import HeroSection from "../components/home/HeroSection"
import DedicationSection from "../components/home/DedicationSection"
import ManagementServices from "../components/home/ManagementServices"
import MissionSection from "../components/home/MissionSection"
import QuoteSection from "../components/home/QuoteSection"
import BuildingDreams from "../components/home/BuildingDreams"
import ContactSection from "../components/home/ContactSection"

function HomePage() {
  return (
    <div className="relative min-h-screen bg-fixed bg-no-repeat bg-cover" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <HeroSection />
      <MissionSection />
      <ProjectCapabilities />
      {/* <ProjectCategories /> */}
      {/* <QualitySection /> */}
      {/* <TrustedPartners /> */}
      {/* <VisionSection /> */}
      <DedicationSection />
      {/* <BuildingVision /> */}
      <QuoteSection />
      <ManagementServices />
      {/* <PartnersSection /> */}
      <BuildingDreams />
      <ContactSection />
      {/* <SubscribeSection /> */}
    </div>
  )
}

export default HomePage


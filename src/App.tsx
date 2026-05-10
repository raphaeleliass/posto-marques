import { AboutSection } from "./layout/about-section";
import { ContactSection } from "./layout/contact-section";
import { ConvenienceSection } from "./layout/convenience-section";
import { Footer } from "./layout/footer";
import { Header } from "./layout/header";
import { HeroSection } from "./layout/hero-section";
import { LocationSection } from "./layout/location-section";
import { ServicesSection } from "./layout/services-section";
import { useSectionReveals } from "./lib/use-section-reveals";

export default function App() {
	useSectionReveals();

	return (
		<div className="min-h-screen overflow-hidden bg-pm-bg text-pm-text selection:bg-pm-neon selection:text-pm-bg">
			<div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_10%,rgb(34_255_90_/_0.12),transparent_24%),radial-gradient(circle_at_8%_32%,rgb(255_106_0_/_0.09),transparent_22%)]" />
			<Header />

			<main id="topo">
				<HeroSection />
				<AboutSection />
				<ServicesSection />
				<ConvenienceSection />
				<LocationSection />
				<ContactSection />
			</main>

			<Footer />
		</div>
	);
}

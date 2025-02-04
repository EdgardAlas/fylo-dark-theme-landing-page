import { Features } from '@containers/features';
import { Footer } from '@containers/footer';
import { Header } from '@containers/header';
import { HeroBanner } from '@containers/hero-banner';
import { StayProductive } from '@containers/stay-productive';
import { Testimonials } from '@containers/testimonials';

export default function Home() {
	return (
		<main>
			<Header />
			<HeroBanner />
			<Features />
			<StayProductive />
			<Testimonials />
			<Footer />
		</main>
	);
}

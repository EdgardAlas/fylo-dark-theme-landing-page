import { Features } from '@containers/features';
import { Header } from '@containers/header';
import { HeroBanner } from '@containers/hero-banner';
import { StayProductive } from '@containers/stay-productive';

export default function Home() {
	return (
		<main>
			<Header />
			<HeroBanner />
			<Features />
			<StayProductive />
		</main>
	);
}

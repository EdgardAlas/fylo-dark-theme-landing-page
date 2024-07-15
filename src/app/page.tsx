import { Features } from '@containers/features';
import { Header } from '@containers/header';
import { HeroBanner } from '@containers/hero-banner';

export default function Home() {
	return (
		<main>
			<Header />
			<HeroBanner />
			<Features />
		</main>
	);
}

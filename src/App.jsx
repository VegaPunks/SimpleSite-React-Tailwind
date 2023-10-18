import { Header } from "./components/header";
import { MainSetion } from "./components/main-section/main-setion";
import { Wrapper } from "./components/wrapper";

export default function App() {
	return (
		<Wrapper>
			<Header />
			<MainSetion />
		</Wrapper>
	);
}

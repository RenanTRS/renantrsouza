import { Header } from "../src/components/Header";
import { Heading } from "../src/components/Heading";
import { Main } from "../src/screens/Main";

export default function Home() {
  return (
    <div className="body">
      <main className="main">
        <Header />

        <div className="container">
          <Main />
        </div>
      </main>
    </div>
  );
}

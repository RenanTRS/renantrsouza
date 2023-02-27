import { Header } from "../src/components/Header";
import { Main } from "../src/screens/Main";

import { Roboto } from "@next/font/google";
import { About } from "../src/screens/About";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
});

export default function Home() {
  return (
    <div className={`${roboto.className} body`}>
      <main className="main">
        <Header />

        <div className="container">
          <Main />
          <About />
        </div>
      </main>
    </div>
  );
}

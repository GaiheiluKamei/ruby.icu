import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>Ruby.icu</title>
      </Head>
      <header>
        <a href="/">
          <img src="/banner.svg" alt="Ruby.icu — make ruby great again" />
        </a>
      </header>
      <main>
      </main>
      <footer>
        <p>© ruby.icu</p>
      </footer>
    </>
  );
});

import "./style.css";
import { setupEncrypt } from "./encrypt";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Secret Message</h1>
    <section id="encrypt"></section>
    <section id="decrypt"></section>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setupEncrypt(document.querySelector<HTMLDivElement>("#encrypt")!);

import jwt from "jsonwebtoken";

export function setupEncrypt(element: HTMLDivElement) {
  const form = `
        <div id="encrypt-form">
            <label for="message">
            Your secret message
                <textarea name="message" id="message" required></textarea>
            </label>

            <p> Pick an expiration date</p>
            <ul>
                <li>
                    <input type="radio" name="expiration" id="1 hour" value="1 hour" checked/>
                    <label for="1 hour">1 hour</label>
                </li>
                <li>
                    <input type="radio" name="expiration" id="1 day" value="1 day" />
                    <label for="1 day"> 1 day</label>
                </li>
                <li>
                    <input type="radio" name="expiration" id="1 week" value="1 week" />
                    <label for="1 week">1 week</label>
                </li>

            </ul>

            <label for="password">
            Choose a password. (If left empty, a password will be generated)
                <input name="password" id="password" required></textarea>
            </label>

            <button id="encrypt-button">Encrypt</button>
        </div>
        `;

  element.innerHTML = form;

  document
    .querySelector("#encrypt-button")
    ?.addEventListener("click", (e) => encryptMessage(e));

  const encrypt = (payload: any, secret: string, opts: any = {}) => {
    const options = { expiresIn: 0, ...opts };
    return jwt.sign(payload, secret, options);
  };
  /*
  function decrypt(token: any, secret: any) {
    const message = jwt.verify(token, secret);
    return message;
  }

  function createLink(token: any) {
    const base_url = "http://127.0.0.1:5500/";
    console.log(base_url + "/" + token);
    return base_url + "/" + token;
  } */

  function encryptMessage(event: Event) {
    event.preventDefault();
    const form = element?.querySelector("#encrypt-form");
    const message: string = form?.querySelector(
      "textarea[name='message']"
    )?.value;
    const exp: string = form?.querySelector(
      "input[name='expiration']:checked"
    )?.value;
    const password: string =
      form?.querySelector("input[name='password']")?.value || "hello-world";

    console.log({ form, message, exp, password });

    const token = encrypt({ message }, password, { expriresIn: exp });

    console.log({ token });
    /*
    const link = createLink(token);
    console.log({ token, password, link });
    return { token, password, link }; */
  }
}

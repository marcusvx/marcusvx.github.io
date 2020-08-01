import style from "./style";
import classNames from "classnames";
import SectionHeader from "../sectionHeader";
import { useState } from "preact/hooks";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table([name, email, message]);
  };

  return (
    <section class={style.contact} id="contact_me">
      <div class={style.container}>
        <SectionHeader
          title="Get in touch"
          subTitle="Want to hire me? Leave a message!"
        />

        <div class={style.form_wrapper}>
          <div data-aos="fade-in" data-aos-offset="200" data-aos-duration="500">
            <form data-toggle="validator" role="form" id="contact-form">
              <div class={style.form_group}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class={classNames(
                    style.form_control,
                    name ? style.has_value : ""
                  )}
                  data-error="Please, Enter Your Name."
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label for="name">Your Name</label>
                <span class="help-block with-errors"></span>
              </div>

              <div class={style.form_group}>
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  class={classNames(
                    style.form_control,
                    email ? style.has_value : ""
                  )}
                  pattern="[a-z0-9._%+-]+@@[a-z0-9.-]+\.[a-z]{2,4}$"
                  data-error="Your E-mail isn't correct"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="mail">Your E-mail</label>
                <span class="help-block with-errors"></span>
              </div>
              <div class={style.form_group}>
                <textarea
                  name="message"
                  id="message"
                  class={classNames(
                    style.form_control,
                    message ? style.has_value : ""
                  )}
                  data-error="Please, Type Your Message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
                <label for="message">Your Message Here</label>
                <span class="help-block with-errors"></span>
              </div>
              <div>
                <button
                  type="submit"
                  class={style.submit_button}
                  onClick={handleSubmit}
                >
                  Send Your Message
                </button>
              </div>
              <p class="form-response"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

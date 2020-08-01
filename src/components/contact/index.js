import style from "./style";
import classNames from "classnames";
import SectionHeader from "../sectionHeader";

const Contact = () => {
  return (
    <div class={classNames(style.contact, "center")} id="contact_me">
      <div class="container">
        <SectionHeader
          title="Get in touch"
          subTitle="Want to hire me? Leave a message!"
        />

        <div class="row form-wrapper">
          <div
            class="col-md-8 col-md-offset-2"
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-duration="500"
          >
            <form data-toggle="validator" role="form" id="contact-form">
              <div class={classNames(style.formGroup, "has-feedback")}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  data-error="Please, Enter Your Name."
                  required
                />
                <label for="name">Your Name</label>
                <span class="help-block with-errors"></span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  data-error="Please, Enter Your Name."
                  required
                />
                <label for="name">Your Name</label>
                <span class="help-block with-errors"></span>
              </div>

              <div class="form-group has-feedback">
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  class="form-control"
                  pattern="[a-z0-9._%+-]+@@[a-z0-9.-]+\.[a-z]{2,4}$"
                  data-error="Your E-mail isn't correct"
                  required
                />
                <label for="mail">Your E-mail</label>
                <span class="help-block with-errors"></span>
              </div>
              <div class="form-group has-feedback">
                <textarea
                  name="message"
                  id="message"
                  class="form-control"
                  data-error="Please, Type Your Message"
                  required
                ></textarea>
                <label for="message">Your Message Here</label>
                <span class="help-block with-errors"></span>
              </div>
              <div class="submit-container">
                <button type="submit" class="btn submit-btn">
                  Send Your Message
                </button>
              </div>
              <p class="form-response"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

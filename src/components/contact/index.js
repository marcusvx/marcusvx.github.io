import style from "./style";
import classNames from "classnames";
import SectionHeader from "../sectionHeader";
import { Component } from "preact";

const MIN_LENGTH = 3;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MIN_WORDS = 3;

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      nameValid: false,
      emailValid: false,
      messageValid: false,
      disableSubmit: true,
      errorMsg: {
        name: "",
        email: "",
        message: "",
      },
    };
  }

  validateForm = () => {
    const { nameValid, emailValid, messageValid } = this.state;
    this.setState({
      disableSubmit: !nameValid || !emailValid || !messageValid,
    });
  };

  updateName = (name) => {
    this.setState({ name }, this.validateName);
  };

  validateName = () => {
    const { name } = this.state;
    let nameValid = true;
    let errorMsg = { ...this.state.errorMsg, name: "" };

    if (name.length < MIN_LENGTH) {
      nameValid = false;
      errorMsg.name = "Must be at least 3 characters long";
    }

    this.setState({ nameValid, errorMsg }, this.validateForm);
  };

  updateEmail = (email) => {
    this.setState({ email }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg, email: "" };

    if (!EMAIL_PATTERN.test(email)) {
      emailValid = false;
      errorMsg.email = "Invalid email format";
    }

    this.setState({ emailValid, errorMsg }, this.validateForm);
  };

  updateMessage = (message) => {
    this.setState({ message }, this.validateMessage);
  };

  validateMessage = () => {
    const { message } = this.state;
    let messageValid = true;
    let errorMsg = { ...this.state.errorMsg, message: "" };

    if (message.trim().split(" ").length < MESSAGE_MIN_WORDS) {
      messageValid = false;
      errorMsg.message = "Invalid message";
    }

    this.setState({ messageValid, errorMsg }, this.validateForm);
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <section class={style.contact} id="contact_me">
        <div class={style.container}>
          <SectionHeader
            title="Get in touch"
            subTitle="Want to hire me? Leave a message!"
          />

          <div class={style.form_wrapper}>
            <div
              class={style.formCol}
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-duration="500"
            >
              <form data-toggle="validator" role="form" id="contact-form">
                <div class={style.form_group}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class={classNames(
                      style.form_control,
                      this.state.name ? style.has_value : ""
                    )}
                    required
                    value={this.state.name}
                    onChange={(e) => this.updateName(e.target.value)}
                  />
                  <label for="name">Your Name</label>
                  {this.state.errorMsg.name && (
                    <span class={style.errorHelper}>
                      {this.state.errorMsg.name}
                    </span>
                  )}
                </div>

                <div class={style.form_group}>
                  <input
                    type="email"
                    name="mail"
                    id="mail"
                    class={classNames(
                      style.form_control,
                      this.state.email ? style.has_value : ""
                    )}
                    pattern="[a-z0-9._%+-]+@@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                    value={this.state.email}
                    onChange={(e) => this.updateEmail(e.target.value)}
                  />
                  <label for="mail">Your E-mail</label>
                  {this.state.errorMsg.email && (
                    <span class={style.errorHelper}>
                      {this.state.errorMsg.email}
                    </span>
                  )}{" "}
                </div>
                <div class={style.form_group}>
                  <textarea
                    name="message"
                    id="message"
                    class={classNames(
                      style.form_control,
                      this.state.message ? style.has_value : ""
                    )}
                    required
                    onChange={(e) => this.updateMessage(e.target.value)}
                    value={this.state.message}
                  ></textarea>
                  <label for="message">Your Message Here</label>
                  {this.state.errorMsg.message && (
                    <span class={style.errorHelper}>
                      {this.state.errorMsg.message}
                    </span>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    class={style.submit_button}
                    onClick={this.handleSubmit}
                    disabled={this.state.disableSubmit}
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
  }
}

export default Contact;

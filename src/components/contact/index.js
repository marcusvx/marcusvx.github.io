import style from './style.less';
import classNames from 'classnames';
import SectionHeader from '../sectionHeader';
import { useForm } from 'react-hook-form';
import { useState } from 'preact/hooks';
import axios from 'axios';
import Typewriter from 'typewriter-effect';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [formResponse, setFormResponse] = useState({ message: '', success: true });
  const [submitting, setSubmitting] = useState(false);
  const values = watch();

  const submitHandler = handleSubmit(data => {
    setSubmitting(true);
    // const data = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   message: this.state.message,
    // };

    axios
      .post('https://marcusvinicius.info/api/contact', data)
      .then(() => {
        setFormResponse({ message: 'Message sent', success: true });
        reset();
      })
      .catch(() => {
        setFormResponse({ message: 'Error sending message', success: false });
      })
      .finally(() => {
        setSubmitting(false);
      });
  });

  return (
    <section className={style.contact} id="contact_me">
      <div className={style.container}>
        <SectionHeader title="Get in touch" subTitle="Want to hire me? Leave a message!" />

        <div className={style.form_wrapper}>
          <div className={style.formCol}>
            <form role="form" id="contact-form" onSubmit={submitHandler}>
              <div className={style.form_group}>
                <input
                  type="text"
                  className={classNames(style.form_control, values.name ? style.has_value : '')}
                  {...register('name', { required: true })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                <label htmlFor="name">Your Name</label>
                {errors.name?.type === 'required' && <span className={style.errorHelper}>Please enter your name</span>}
              </div>

              <div className={style.form_group}>
                <input
                  type="text"
                  className={classNames(style.form_control, values.email ? style.has_value : '')}
                  {...register('email', {
                    required: 'Please inform the email',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Enter a valid email',
                    },
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                <label htmlFor="mail">Your E-mail</label>
                {errors.email && <span className={style.errorHelper}>{errors.email.message}</span>}
              </div>
              <div className={style.form_group}>
                <textarea
                  className={classNames(style.form_control, values.message ? style.has_value : '')}
                  {...register('message', { required: true, min: 5, max: 500 })}
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                <label htmlFor="message">Your Message Here</label>
                {errors.message && <span className={style.errorHelper}>Enter a message</span>}
              </div>
              <div>
                <button type="submit" className={style.submit_button} disabled={submitting}>
                  {submitting ? (
                    <>
                      Sending <i class="fas fa-circle-notch fa-spin" />
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
              <div
                className={classNames(
                  style.formResponse,
                  formResponse.success ? 'alert-success text-success' : 'alert-danger text-danger',
                )}
              >
                {formResponse.message && (
                  <Typewriter
                    onInit={typewriter => {
                      typewriter
                        .typeString(formResponse.message)
                        .pauseFor(4000)
                        .start()
                        .deleteChars(formResponse.message.length)
                        .callFunction(() => setFormResponse({ message: '', success: true }));
                    }}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

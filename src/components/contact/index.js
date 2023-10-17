import style from './style.scss';
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
    <section id="contact_me" className={style.contact}>
      <div className={style.container}>
        <SectionHeader title="Get in touch" subTitle="Want to hire me? Leave a message!" />

        <form role="form" id="contact-form" onSubmit={submitHandler}>
          <div className={style.field}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              className={errors.name ? style.error : ''}
              {...register('name', { required: true })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />

            {errors.name?.type === 'required' && <p className={style.errorHelper}>Please enter your name</p>}
          </div>

          <div className={style.field}>
            <label htmlFor="mail">Your E-mail</label>
            <input
              type="text"
              className={errors.email ? style.error : ''}
              {...register('email', {
                required: 'Please inform the email',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Enter a valid email',
                },
              })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />

            {errors.email && <p className={style.errorHelper}>{errors.email.message}</p>}
          </div>
          <div className={style.field}>
            <label htmlFor="message">Your Message Here</label>
            <textarea
              className={errors.message ? style.error : ''}
              {...register('message', { required: true, min: 5, max: 500 })}
              aria-invalid={errors.message ? 'true' : 'false'}
            />

            {errors.message && <p className={style.errorHelper}>Enter a message</p>}
          </div>
          <div>
            <button type="submit" disabled={submitting}>
              {submitting ? (
                <>
                  Sending <i class="fas fa-circle-notch fa-spin" />
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
          <div className={classNames(style.formResponse, formResponse.success ? style.success : style.error)}>
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
    </section>
  );
}

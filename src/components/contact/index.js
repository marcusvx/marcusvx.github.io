import style from './style.scss';
import classNames from 'classnames';
import SectionHeader from '../sectionHeader';
import { useForm } from 'react-hook-form';
import { useState } from 'preact/hooks';
import axios from 'axios';
import { TypedText } from '../typedText';
import { Text } from 'preact-i18n';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    set,
  } = useForm();
  const [formResult, setFormResult] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const submitHandler = handleSubmit(data => {
    setSubmitting(true);

    axios
      .post('https://marcusvinicius.info/api/contact', data)
      .then(() => {
        setFormResult('contact.result_success');
        reset();
      })
      .catch(() => {
        setFormResult('contact.result_error');
      })
      .finally(() => {
        setSubmitting(false);
      });
  });

  return (
    <section id="contact_me" className={style.contact}>
      <div className={style.container}>
        <SectionHeader>
          <SectionHeader.Title>
            <Text id="contact.title">Get in touch</Text>
          </SectionHeader.Title>
        </SectionHeader>

        <form role="form" id="contact-form" onSubmit={submitHandler}>
          <div className={style.field}>
            <label htmlFor="name">
              <Text id="contact.name">Your Name</Text>
            </label>
            <input
              type="text"
              className={errors.name ? style.error : ''}
              {...register('name', { required: true })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />

            {errors.name?.type === 'required' && (
              <p className={style.errorHelper}>
                <Text id="contact.name_error">Please enter your name</Text>
              </p>
            )}
          </div>

          <div className={style.field}>
            <label htmlFor="mail">
              <Text id="contact.email">Your E-mail</Text>
            </label>
            <input
              type="text"
              className={errors.email ? style.error : ''}
              {...register('email', {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                },
              })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />

            {!!errors.email && (
              <p className={style.errorHelper}>
                <Text id="contact.email_error">Please inform a valid email</Text>
              </p>
            )}
          </div>
          <div className={style.field}>
            <label htmlFor="message">
              <Text id="contact.message">Your Message Here</Text>
            </label>
            <textarea
              className={errors.message ? style.error : ''}
              {...register('message', { required: true, min: 5, max: 500 })}
              aria-invalid={errors.message ? 'true' : 'false'}
            />

            {errors.message && (
              <p className={style.errorHelper}>
                <Text id="contact.message_error">Enter a message</Text>
              </p>
            )}
          </div>
          <div>
            <button type="submit" disabled={submitting}>
              {submitting ? (
                <>
                  <Text id="contact.submitting">Sending </Text> <i class="fas fa-circle-notch fa-spin" />
                </>
              ) : (
                <Text id="contact.submit">Send Message</Text>
              )}
            </button>
          </div>
          <div className={classNames(style.formResponse, formResult ? style.success : style.error)}>
            {formResult && <TypedText translationId={formResult}></TypedText>}
          </div>
        </form>
      </div>
    </section>
  );
}

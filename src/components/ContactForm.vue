<script setup>
import SectionHeader from './SectionHeader.vue'
import { reactive, ref } from 'vue'
import axios from 'axios'

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
const formData = reactive({
  name: '',
  email: '',
  message: ''
})
const errors = reactive({})
const formResult = ref({ message: '', success: false })
const submitting = ref(false)

function validateRequired(inputName) {
  if (!formData[inputName] || formData[inputName].length < 4) {
    errors[inputName] = { type: 'required' }
    return
  }
  errors[inputName] = null
}

function validateEmail(inputName) {
  if (EMAIL_REGEX.test(formData[inputName])) {
    errors[inputName] = null
    return
  }

  errors[inputName] = { type: 'required' }
}

const submitHandler = async () => {
  validateRequired('name')
  validateEmail('email', EMAIL_REGEX)
  validateRequired('message')
  if (errors.name || errors.email || errors.message) {
    return
  }

  submitting.value = true
  console.log(import.meta.env.VITE_CONTACT_POST_URL)
  try {
    await axios.post(import.meta.env.VITE_CONTACT_POST_URL, formData)
    formResult.value = { success: true, message: 'contact.result_success' }
    resetForm()
  } catch (error) {
    formResult.value = { success: false, message: 'contact.result_error' }
  } finally {
    submitting.value = false
  }
}

const resetForm = () => {
  formData.name = ''
  formData.email = ''
  formData.message = ''
  errors.name = false
  errors.email = false
  errors.message = false
}
</script>
<template>
  <section id="contact" class="contact">
    <div class="container">
      <SectionHeader>
        <template #title>
          {{ $t('contact.title') }}
        </template>
      </SectionHeader>

      <form role="form" id="contact-form" @submit.prevent="submitHandler">
        <div class="field">
          <label for="name">
            {{ $t('contact.name') }}
          </label>
          <input
            type="text"
            :class="errors.name ? 'error' : ''"
            v-model="formData.name"
            @change="() => validateRequired('name')"
          />
          <p v-if="!!errors.name" class="error-helper">
            {{ $t('contact.name_error') }}
          </p>
        </div>

        <div class="field">
          <label for="mail">
            {{ $t('contact.email') }}
          </label>
          <input
            type="text"
            :class="errors.email ? 'error' : ''"
            v-model="formData.email"
            @change="() => validateEmail('email')"
          />
          <p v-if="!!errors.email" class="error-helper">
            {{ $t('contact.email_error') }}
          </p>
        </div>

        <div class="field">
          <label for="message">
            {{ $t('contact.message') }}
          </label>
          <textarea
            :class="errors.message ? 'error' : ''"
            v-model="formData.message"
            @change="() => validateRequired('message')"
          />
          <p v-if="!!errors.message" class="error-helper">
            {{ $t('contact.message_error') }}
          </p>
        </div>

        <div>
          <button type="submit" class="submit" :disabled="submitting">
            <span v-if="submitting">
              {{ $t('contact.submitting') }}
              <i class="fas fa-circle-notch fa-spin" />
            </span>
            <span v-else>
              {{ $t('contact.submit') }}
            </span>
          </button>
        </div>

        <div
          class="form-response"
          v-if="formResult.message"
          :class="formResult.success ? 'success' : 'error'"
        >
          {{ $t(formResult.message) }}
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/index.scss';
@import 'bulma/sass/elements/container';
@import 'bulma/sass/utilities/initial-variables';
@import 'bulma/sass/form/all';
@import 'bulma/sass/grid/columns';

.contact {
  @extend .section;

  .container {
    @extend .container;

    form {
      width: 60%;
      margin: 0 auto;

      @include mobile {
        width: 80%;
      }

      .submit {
        background-color: $dark;
        color: $white;
        border-color: $white;
        padding: 8px 0;
        cursor: pointer;
        @extend .dark-btn;
        width: 100%;
      }

      .form-response {
        padding: 8px 0;
        text-align: left;

        &.error {
          color: $danger;
        }

        &.success {
          color: $success;
        }
      }
    }

    .field {
      @extend .field;

      label {
        margin-bottom: 0.5em;
        display: block;
        text-align: left;
      }

      input[type='text'] {
        @extend .input;
        box-sizing: border-box;
      }

      textarea {
        @extend .textarea;
        box-sizing: border-box;
      }

      .error-helper {
        @extend .help;
        @extend .is-danger;
        text-align: left;
      }
    }
  }
}
</style>

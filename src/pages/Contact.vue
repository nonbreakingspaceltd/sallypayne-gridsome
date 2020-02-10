<template>
  <Layout>
    <div class="sp-l-page sp-l-page--contact">
      <div class="sp-l-page__section sp-l-page__section--0">
        <g-image
          src="~/assets/images/contact-pattern.jpg"
          alt="Animal pattern"
        />
      </div>
      <div class="sp-l-page__section sp-l-page__section--1">
        <h1 class="sp-o-pagetitle" v-html="$page.wordPressPage.title" />
        <form
          v-on:submit.prevent="handleSubmit"
          action="/contact/success/"
          class="c-form"
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Ingnore this field if you're human:
              <input name="bot-field" />
            </label>
          </p>
          <div class="c-form__item">
            <label for="formName">Full Name</label>
            <input
              type="text"
              name="name"
              id="formName"
              v-model="formData.name"
              required
            />
          </div>
          <div class="c-form__item">
            <label for="formEmail">Email Address</label>
            <input
              type="email"
              name="email"
              id="formEmail"
              v-model="formData.email"
              required
            />
          </div>
          <div class="c-form__item">
            <label for="formMessage">What would you like to say?</label>
            <textarea
              name="message"
              id="formMessage"
              required
              v-model="formData.message"
            ></textarea>
          </div>
          <div class="c-form__actions">
            <button type="submit" class="sp-c-btn sp-c-btn--color-e" :disabled="submitting">
              Send your message
            </button>
          </div>
        </form>
        <p>
          &hellip;or simply email me at:
          <a href="mailto:sallypaynedesign@gmail.com"
            >sallypaynedesign@gmail.com</a
          >
        </p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Contact {
  wordPressPage (id: "30040") {
    title
  }
}
</page-query>

<script>
  export default {
    metaInfo: {
      title: `Contact`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Contact Sally Payne about work, collaborations and projects you may have in mind.`
        }
      ]
    },
    data() {
      return {
        formData: {},
        submitting: false
      };
    },
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
          )
          .join('&');
      },
      handleSubmit(e) {
        this.submitting = true;
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': e.target.getAttribute('name'),
            ...this.formData
          })
        })
          .then(() => {
            this.submitting = false;
            this.$router.push('/contact/success/')
          })
          .catch(error => alert(error));
      }
    }
  };
</script>

<template>
  <Layout>
    <div class="sp-l-page sp-l-page--contact">
      <div class="sp-l-page__section sp-l-page__section--0">
        <g-image src="~/assets/images/contact-pattern.jpg" alt="Animal pattern" />
      </div>
      <div class="sp-l-page__section sp-l-page__section--1">
        <h1 class="sp-o-pagetitle">
          Say "Hello"
        </h1>
        <form class="c-form" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <label class="sp-u-sronly">Ingnore this field if you're human: <input name="bot-field" /></label>
          <div class="c-form__item">
            <label for="formName">Full Name</label>
            <input type="text" name="name" id="formName" required />
          </div>
          <div class="c-form__item">
            <label for="formEmail">Email Address</label>
            <input type="email" name="email" id="formEmail" required />
          </div>
          <div class="c-form__item">
            <label for="">What would you like to say?</label>
            <textarea name="message" id="formMessage" required></textarea>
          </div>
          <div class="c-form__actions">
            <button type="submit" class="sp-c-btn sp-c-btn--color-e">
              Send your message
            </button>
          </div>
        </form>
        <p>&hellip;or simply email me at: <a href="mailto:sallypaynedesign@gmail.com">sallypaynedesign@gmail.com</a></p>
      </div>
    </div>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: `Contact`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Contact Sally Payne`
        }
      ]
    }
  };
</script>

<template>
  <div class="contact-container">
    <h2>Contact Us</h2>
    <p>If you have any questions, please do not hesitate to contact us at:</p>
    <ul>
      <li>Email: info@example.com</li>
      <li>Phone: +48 123 456 789</li>
      <li>Address: Example Street 12, City, Country</li>
    </ul>
    <iframe
      class="google-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.8800538658!2d-74.25819354858982!3d40.70583163823913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2spl!4v1655301862276!5m2!1sen!2spl"
      width="100%"
      height="300px"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</template>

<style scoped>
.contact-container {
  text-align: center;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-container h2 {
  font-size: 28px;
  margin-bottom: 16px;
  color: #a6a6a6;
}

.contact-container p {
  font-size: 16px;
  margin-bottom: 12px;
}

.contact-container ul {
  font-size: 16px;
  margin-bottom: 12px;
  color: #ffffff;
}

.contact-container ul {
  list-style-type: none;
  padding: 0;
}

.contact-container li {
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
}

.google-map {
  border-radius: 8px;
  margin-top: 16px;
}
</style>

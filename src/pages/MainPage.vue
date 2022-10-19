<template>
  <section class="main-page">
    <div class="top">
      <vs-alert
        color="#89D345"
        :hidden-content="hidden"
        @click.native="hidden = !hidden"
        style="font-size: 18px"
      >
        <template #title> Что нужно сделать? </template>
        Вам надо ввести логин пользователя, это же <b>ID</b>, после чего
        генератор выдаст хэш пароль от аккаунта пользователя.
      </vs-alert>
    </div>
    <vs-input
      v-model="login"
      class="main-page-input"
      color="#53C95A"
      placeholder="Логин"
    >
      <template #icon>
        <img src="@/assets/user.svg" alt="" width="16" />
      </template>
    </vs-input>
    <vs-dialog prevent-close blur v-model="active">
      <template #header>
        <h4 class="not-margin">Пароль</h4>
      </template>
      <div class="dialog-center">
        {{ password }}
      </div>
      <template #footer>
        <vs-button color="#53C95A" @click="copy">Скопировать</vs-button>
      </template></vs-dialog
    >
    <vs-button
      class="main-page-btn"
      square
      color="#53C95A"
      @click="generateHash"
      >Сгенерировать</vs-button
    >
  </section>
</template>

<script>
const cryptoJS = require("crypto-js");

export default {
  name: "MainPage",
  data: () => ({
    hidden: false,
    login: "",
    password: "",
    salt: "6b8f7e2ce3d07d668d3906d16ea54893faceee9b4713ba7b980c74e6f6102009",
    active: false,
  }),
  watch: {
    login() {
      if (this.login === "") {
        this.password = "";
      }
    },
  },
  methods: {
    generateHash() {
      if (this.login !== "") {
        this.password = cryptoJS.algo.SHA256.create()
          .update(this.login, "utf-8")
          .update(this.salt, "utf-8")
          .finalize()
          .toString(cryptoJS.enc.Base64);
        this.active = true;
      } else {
        this.openNotification(false);
      }
    },
    copy() {
      navigator.clipboard.writeText(this.password);
      this.openNotification(true);
    },
    openNotification(success) {
      if (success) {
        this.$vs.notification({
          duration: 1000,
          square: true,
          color: "#53C95A",
          position: "bottom-center",
          title: "Скопировано",
        });
      } else {
        this.$vs.notification({
          duration: 1000,
          square: true,
          color: "#FD4438",
          position: "bottom-center",
          title: "Введите данные",
        });
      }
    },
  },
};
</script>

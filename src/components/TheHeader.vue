<template>
  <vs-navbar color="#53C95A" not-line text-white :active="true">
    <vs-navbar-item :active="true" id="main" style="font-size: 18px">
      Пароль пользователя от
      <a
        href="https://bpm.arbuz.team/"
        target="_blank"
        style="all: unset; text-decoration: underline"
        >BPM Arbuz</a
      >
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<template>
  <div class="t-contrast1">
    <q-btn flat label="FI" no-caps dense @click="selectFi()" />
    <q-btn flat label="EN" no-caps dense @click="selectEn()" />
  </div>
</template>

<script>
/**
 * Lisää mahdollisuuden vaihtaa eri kieliin.
 */
export default{
  methods: {
    selectFi() {
      this.$i18n.locale = 'fin'
    },
    selectEn() {
      this.$i18n.locale = 'en'
    }
  }
}
</script>

<style lang="scss">
</style>

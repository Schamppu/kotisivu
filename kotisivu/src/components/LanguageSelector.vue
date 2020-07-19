<template>
  <div class="t-contrast1">
    <q-btn flat label="FI" no-caps dense @click="selectFi()" v-if="langEng()" />
    <q-btn flat label="EN" no-caps dense @click="selectEn()" v-if="langFin()" />
  </div>
</template>

<script>
/**
 * Lisää mahdollisuuden vaihtaa eri kieliin.
 */
export default {
  methods: {
    selectFi() {
      this.$i18n.locale = 'fin'
    },
    selectEn() {
      this.$i18n.locale = 'en'
    },
    langEng() {
      if(this.$i18n.locale == 'en') {
        return true
      } else {
        return false
      }
    },
    langFin() {
      if(this.$i18n.locale == 'fin') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
</style>

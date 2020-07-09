<template>
  <!--
  <q-select
    v-model="lang"
    :options="langOptions"
    dense
    borderless
    emit-value
    map-options
    options-dense
    class="language-selector"
    label-color="white"
    dark
  >
    <template v-slot:prepend>
    </template>
  </q-select>
-->
  <div>
    <q-btn flat color="white" label="FI" no-caps dense @click="selectFi()" />
    <q-btn flat color="white" label="EN" no-caps dense @click="selectEn()" />
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
      this.$i18n.locale = 'en-us'
    }
  }
}
</script>

<style lang="scss">
  .language-selector {
    color: white !important;
  }
</style>

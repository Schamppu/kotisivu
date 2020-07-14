<template>
  <div class="fullscreen notfound text-white text-center q-pa-md flex flex-center">
    <div>

      <transition-group
        appear
        enter-active-class="animated slideInDown "
      >
        <div style="font-size: 30vh" key="sad-face">
          :(
        </div>

        <div class="text-h2" style="opacity:.8" key="text-itself">
          Voi ei. Täällä ei ole mitään.
        </div>
      </transition-group>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Palaa aloitussivulle..."
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from "vue-property-decorator"
import Profile from "pages/Profile.vue";
import TitleSeparator from "pages/TitleSeparator.vue";
import Synopsis from "pages/Synopsis.vue";

@Component({
  meta: {
    title: "Spentti.fi - 404",
    meta: {
      description: { name: 'description', content: 'Not found.' },
      keywords: { name: 'keywords', content: 'Sami Pentti' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
    }
  }
})
export default class NotFound extends Vue {
  // Tyhjä.
}
</script>

<style lang="scss">

  .notfound {
    background-color: $tausta;
  }

</style>

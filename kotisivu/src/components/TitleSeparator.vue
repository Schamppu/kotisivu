<template>
  <div class="row justify-center q-ma-lg">

    <q-img
      src="~assets/splash.svg"
      class="koti-separator-back"
    >
    </q-img>

    <h3 class="q-ma-md t-tausta" style="z-index: 1000; position: absolute; font-family: 'acme';">
      {{ this.title }}
    </h3>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Component
export default class TitleSeparator extends Vue {
  // Tyhjä toistaiseksi.
  @Prop({ type: String, required: true }) title!: string;
}
</script>

<style lang="scss">

  .koti-separator-back {
    filter: invert(68%) sepia(96%) saturate(1664%) hue-rotate(324deg) brightness(87%) contrast(94%);
    height: 100%;
    width: 35em;
  }

</style>

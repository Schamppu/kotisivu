<template>
  <div class="row justify-center q-ma-lg">

    <q-img
      src="~assets/splash.svg"
      class="koti-separator-back"
    >
    </q-img>

    <div class="koti-separator-text">
      {{ this.title }}
    </div>

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

  .koti-separator-text {
    z-index: 1000;
    position: absolute;
    font-family: 'acme';
    color: $tausta;
    @media (min-width: $breakpoint-md) { // Iso
      font-size: 40px;
      padding-top: 12px;
    }
    @media (max-width: $breakpoint-md) { // Pieni
      font-size: 24px;
      padding-top: 6px;
    }
  }

</style>

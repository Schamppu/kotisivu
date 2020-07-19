<template>
  <div>
    <div class="q-px-xl hide-for-phones">
      <div class="t-contrast1 row q-mb-xs" style="font-style: italic; font-size: 16px">
        <q-space />
        Pssst... laita kursori alla olevan laatikon päälle pysäyttääksesi sen<q-icon name="fas fa-smile-wink" class="q-pl-md " size="22px" />
      </div>

      <!-- Desktop parallax versio -->
      <q-card class="koti-box-color2" bordered style="border-width: 2px;">
        <q-card-section horizontal>
          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            swipeable
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            class="koti-profile-parallax"
          >
            <q-carousel-slide :name="1" img-src="/profile1.png" />
            <q-carousel-slide :name="2" img-src="/profile2.png" />
            <q-carousel-slide :name="3" img-src="/profile3.png" />
            <q-carousel-slide :name="4" img-src="/profile4.png" />
          </q-carousel>

            <q-carousel
              animated
              v-model="slide"
              infinite
              :autoplay="autoplay"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
              transition-prev="slide-right"
              transition-next="slide-left"
              style="width: 100%; color: white; background-color: rgba(0,0,0,0.1)"
              class="q-ma-none q-pa-none"
            >
                <q-carousel-slide :name="1" class="fit">
                  <h4 class="q-pl-lg" v-html="fixTitle($t('profile.title.1'))"></h4>
                  <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div class="q-pl-lg" v-html="fixText($t('profile.text.1'))" /></span>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="fit">
                  <h4 class="q-pl-lg" v-html="fixTitle($t('profile.title.2'))"></h4>
                  <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div class="q-pl-lg" v-html="fixText($t('profile.text.2'))" /></span>
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="fit">
                  <h4 class="q-pl-lg" v-html="fixTitle($t('profile.title.3'))"></h4>
                  <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div class="q-pl-lg" v-html="fixText($t('profile.text.3'))" /></span>
                </q-carousel-slide>
                <q-carousel-slide :name="4" class="fit">
                  <h4 class="q-pl-lg" v-html="fixTitle($t('profile.title.4'))"></h4>
                  <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div class="q-pl-lg" v-html="fixText($t('profile.text.4'))" /></span>
                </q-carousel-slide>
            </q-carousel>

        </q-card-section>
      </q-card>
    </div>

    <div class="q-px-xs show-only-phones">
      <!-- Mobile parallax versio -->
      <q-card class="koti-box-color2" bordered style="border-width: 2px;">
          <q-carousel
            animated
            v-model="slidePhone"
            infinite
            swipeable
            transition-prev="slide-right"
            transition-next="slide-left"
            class="koti-profile-parallax q-pa-none q-ma-none"
            style="width: 100%; color: white; background-color: rgba(0,0,0,0.1); height: 100%"
            ref="carousel"
            control
          >

            <template v-slot:control>
              <q-carousel-control
                position="bottom-right"
                :offset="[5, 0]"
              >
                <q-btn
                  flat square dense text-color="white" label="Seuraava" no-caps icon-right="arrow_right"
                  @click="$refs.carousel.next()"
                />
              </q-carousel-control>

              <q-carousel-control
                position="bottom-left"
                :offset="[5, 0]"
              >
                <q-btn
                  flat square dense text-color="white" label="Edellinen" no-caps icon="arrow_left"
                  @click="$refs.carousel.previous()"
                />
              </q-carousel-control>
            </template>

            <q-carousel-slide :name="1" class="q-px-lg">
              <q-img src="/profile1.png" />
              <div class="koti-parallax-title q-mt-md" v-html="fixTitle($t('profile.title.1'))"></div>
              <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div v-html="fixText($t('profile.text.1')) + '\n\n' " /></span>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="">
              <q-img src="/profile2.png" />
              <div class="koti-parallax-title q-mt-md" v-html="fixTitle($t('profile.title.2'))"></div>
              <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div v-html="fixText($t('profile.text.2')) + '\n\n'" /></span>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="">
              <q-img src="/profile3.png" />
              <div class="koti-parallax-title q-mt-md" v-html="fixTitle($t('profile.title.3'))"></div>
              <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div v-html="fixText($t('profile.text.3')) + '\n\n'" /></span>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="">
              <q-img src="/profile4.png" />
              <div class="koti-parallax-title q-mt-md" v-html="fixTitle($t('profile.title.4'))"></div>
              <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div v-html="fixText($t('profile.text.4')) + '\n\n'" /></span>
            </q-carousel-slide>
          </q-carousel>W
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
    import {Vue} from "vue-property-decorator";
    import Component from "vue-class-component";

    @Component
    export default class Profile extends Vue {
      data () {
        return {
          slide: 1,
          slidePhone: 1,
          autoplay: true
        }
      }

      fixText(teksti: string): string {
        return teksti.split("<<").join('<span class=\'e1\'>').split(">>").join('</span>')
      }

      fixTitle(teksti: string): string {
        return teksti.split("<<").join('<span class=\'et1\'>').split(">>").join('</span>')
      }

    }

    class TextObject {
      id: string
      title: string
      text: string
      constructor(id: string, title: string, text: string) {
        this.id = id
        this.title = title
        this.text = text
      }
    }
</script>

<style lang="scss">
  .koti-profile-parallax {
    @media (min-width: $breakpoint-md) { // Iso
      width: 50%;
    }
    @media (max-width: $breakpoint-md) { // Pieni
      width: 100%;
      height: 15rem;
    }
  }

  .koti-parallax-title {
    @media (min-width: $breakpoint-md) { // Iso

    }
    @media (max-width: $breakpoint-md) { // Pieni
      font-size: 20px;
    }
  }

</style>

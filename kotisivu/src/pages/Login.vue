<template>
  <q-page>
    <div class="row justify-center">
      <q-card flat bordered class="koti-box-color3" style="color: white">
        <q-card-section>
          <div class="text-h6">Sisäänkirjautuminen</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Tältä sivulta on mahdollista kirjautua sisään järjestelmänvalvojan tunnuksilla. Jos eksyit tänne, niin täältä ei ikävä kyllä löydy mitään.
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-form
            @submit="onSubmit(formData.email, formData.password)"
            @reset="onReset(formData)"
            class="q-gutter-md"
          >
            <q-input
              filled
              dark
              v-model="formData.email"
              label="Sähköposti"
              lazy-rules
            />

            <q-input
              filled
              dark
              v-model="formData.password"
              label="Salasana"
              lazy-rules
              type="password"
            />
            <div>
              <q-btn label="Kirjaudu sisään" type="submit" flat color="c-contrast2"/>
              <q-btn label="Tyhjennä" type="reset" flat color="c-contrast2" class="q-ml-sm" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

import { Component } from "vue-property-decorator"
import {Cookies} from "quasar";

/**
 * Sisältää aloitussivulla olevan datan.
 */
@Component({
  components: {
  },
  meta: {
    title: "Spentti.fi - Login",
    meta: {
      description: { name: 'description', content: 'My virtual portfolio. Login page.' },
      keywords: { name: 'keywords', content: 'Sami Pentti' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
    }
  },
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  }
})
export default class StartPage extends Vue {

  onSubmit(email: string, password: string) {
    this.$store.dispatch('auth/loginUser', {
      email: email,
      password: password
    })
  }

  onReset(data: any) {
    data.email = null
    data.password = null
  }


}
</script>

<style lang="scss">

</style>

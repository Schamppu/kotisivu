<template>
  <q-list padding>
    <div v-for="obj in getMenu()">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon :name="obj.icon"/>
        </q-item-section>

        <q-item-section>
          {{ obj.name }}
        </q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script lang="ts">
  import { Prop, Vue } from "vue-property-decorator";

  export default class LeftDrawer extends Vue {
    getMenu(): MenuObject[] {
      const list: MenuObject[] = []
      list.push(new MenuObject('Minä', 'fas fa-user'))
      list.push(new MenuObject('Työni', 'fas fa-briefcase'))
      list.push(new MenuObject('Yhteistietoni', 'fas fa-envelope'))
      return list
    }
  }

  /** MenuObject sisältää muuttujat liittyen "lipastoon" */
  class MenuObject {
    name: string
    icon: string

    constructor(name: string, icon: string) {
      this.name = name
      this.icon = icon
    }
  }



</script>

<style scoped>

</style>

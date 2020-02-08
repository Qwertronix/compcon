<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-y>
    <template v-slot:activator="{ on }">
      <v-icon size="18" icon :dark="dark" class="fadeSelect" v-on="on">mdi-circle-edit-outline</v-icon>
    </template>

    <v-card tile min-width="50vw">
      <v-card-text class="pa-2">
        <slot />
      </v-card-text>
      <v-divider />
      <v-card-actions class="px-2 py-1">
        <v-btn text @click="menu = false">Cancel</v-btn>
        <cc-btn class="ml-auto" color="success" text @click="save()">Save</cc-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component({ 
  name: 'cc-string-edit',
})
export default class EditButton extends Vue {

  @Prop({ type: Boolean, required: false, })
  dark?: boolean

  menu = false
  
  @Emit()
  save() {
    this.menu = false
  }
}
</script>
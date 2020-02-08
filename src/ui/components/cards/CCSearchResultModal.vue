<template>
  <v-dialog v-model="dialog" width="90vw">
    <v-card tile>
      <cc-titlebar
        :icon="'cci-' + $_.kebabCase(item.ItemType)"
        :color="$_.kebabCase(item.ItemType)"
      >{{ item.Source }} {{ item.Name }}</cc-titlebar>
      <v-card-text>
        <cc-item-card :item="item" />
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="dialog = false">dismiss</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { CompendiumItem } from '@/class'

@Component({ 
  name: 'cc-search-result-modal',
})
export default class CCSearchResultModal extends Vue {

  @Prop({ type: Object, required: true, })
  item: CompendiumItem
  
  dialog = false
  show() {
    this.dialog = true
  }
}
</script>

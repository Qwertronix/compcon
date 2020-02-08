<template>
  <v-container fluid>
    <v-row class="mx-2 mt-n2 mb-2" no-gutters align="center">
      <v-col>
        <slot />
      </v-col>
      <v-col cols="auto" class="ml-auto mr-5">
        <slot name="extra-item" />
      </v-col>
      <v-col cols="3" class="ml-auto mr-5">
        <v-text-field
          v-model="search"
          class="search-field"
          prepend-icon="search"
          flat
          hide-actions
          single-line
          placeholder="Search"
          clearable
          persistent-hint
          :hint="`${fItems.length} Items`"
        />
      </v-col>
      <cc-filter-panel v-if="!noFilter" :item-type="itemType" @set-filters="setFilters" />
    </v-row>
    <v-data-table
      v-resize="onResize"
      :headers="headers"
      :items="fItems"
      :custom-sort="customSort"
      item-key="ID"
      :height="tableHeight"
      hide-default-footer
      disable-pagination
      class="elevation-0 flavor-text"
      calculate-widths
      fixed-header
      show-select
      single-select
      style="text-transform: uppercase; background-color: transparent"
    >
      <template v-slot:item.data-table-select="{ item }">
        <cc-tooltip simple inline :content="`Equip ${item.Name}`">
          <v-btn icon color="primary" dark @click="$emit('equip', item)">
            <v-icon large>cci-accuracy</v-icon>
          </v-btn>
        </cc-tooltip>
      </template>
      <template v-slot:item.Name="{ item }">
        <span class="stat-text">{{ item.Name }}</span>
      </template>
      <template v-slot:item.Damage[0].Max="{ item }">
        <cc-damage-element small :damage="item.Damage" />
      </template>
      <template v-slot:item.Range[0].Max="{ item }">
        <cc-range-element small :range="item.Range" />
      </template>
      <template v-slot:item.Detail="{ item }">
        <v-icon color="primary" @click="getModalRef(item.ID).show()">
          mdi-information-outline
        </v-icon>
        <cc-search-result-modal :ref="`modal_${item.ID}`" :item="item" />
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import ItemFilter from '@/classes/utility/ItemFilter'
import { accentInclude } from '@/classes/utility/accent_fold'
import { CompendiumItem } from '@/class'
import CCSearchResultModal from '../cards/CCSearchResultModal.vue'

@Component({ 
  name: 'cc-selector-table',
})
export default class CCSelectorTable extends Vue {
  
  @Prop({ type: Array, required: true, })
  headers!: any[]

  @Prop({ type: Array, required: true, })
  items!: CompendiumItem[]

  @Prop({ type: Boolean, required: false, })
  noFilter?: boolean

  @Prop({ type: String, required: false, default: '', })
  itemTypeFallback: string

  get itemType() {
    if (!this.items.length) return this.itemTypeFallback
    return this.items[0].ItemType
  }

  getModalRef(id) {
    return this.$refs[`modal_${id}`] as CCSearchResultModal
  }

  get fItems() {
    // var vm = this as any
    let i = this.items

    if (this.search) i = i.filter(x => accentInclude(x.Name, this.search))

    if (Object.keys(this.filters).length) {
      i = ItemFilter.Filter(i, this.filters)
    }

    return i
  }

  search = ''
  filters = {}
  customSort(items, index, descending) {
    const desc = descending[0]
    items.sort((a, b) => {
      if (index[0] === 'Damage[0].Max') {
        return desc ? b.Damage[0].Max - a.Damage[0].Max : a.Damage[0].Max - b.Damage[0].Max
      } else if (index[0] === 'Range[0].Max') {
        return desc ? b.Range[0].Max - a.Range[0].Max : a.Range[0].Max - b.Range[0].Max
      } else {
        return desc ? (a[index[0]] < b[index[0]] ? -1 : 1) : b[index[0]] < a[index[0]] ? -1 : 1
      }
    })
    return items
  }
  setFilters(newFilter) {
    this.filters = newFilter
  }

  tableHeight = 500
  onResize() {
    this.tableHeight = window.innerHeight - 250
  }
  mounted() {
    this.onResize()
  }
}
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col cols="5" class="ml-auto mr-auto">
        <v-alert
          :value="true"
          :type="pilot.IsMissingHASE ? 'info' : 'success'"
          outlined
          class="stat-text"
        >{{ pilot.CurrentHASEPoints }}/{{ pilot.MaxHASEPoints }} Mech Skills selected</v-alert>
      </v-col>
    </v-row>

    <cc-title>HULL</cc-title>
    <span class="flavor-text">
      Your HULL skill describes your ability to build and pilot durable, heavy mechs that can
      take punches and keep going
    </span>
    <v-row dense>
      <v-col cols="auto" class="ml-auto mr-auto">
        <v-btn
          color="secondary"
          :disabled="!pilot.MechSkills.Hull"
          fab
          x-small
          left
          bottom
          class="d-inline elevation-0"
          @click="remove(HASE.H)"
        >
          <v-icon>remove</v-icon>
        </v-btn>
        <cc-rating :model="pilot.MechSkills.Hull" />
        <v-btn
          :disabled="!pilot.IsMissingHASE"
          color="secondary"
          fab
          x-small
          right
          bottom
          class="d-inline elevation-0"
          @click="add(HASE.H)"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row dense class="mt-n3 mb-6">
      <v-col cols="auto" class="ml-auto mr-auto">
        <span class="heading h3">
          MECH HP
          <span class="primary--text">+{{ pilot.MechSkills.Hull * 2 }}</span>
        </span>
        <cc-slashes class="ml-1 mr-1" />
        <span class="heading h3">
          REPAIR CAPACITY
          <span class="primary--text">+{{ Math.floor(pilot.MechSkills.Hull / 2) }}</span>
        </span>
      </v-col>
    </v-row>

    <cc-title>AGILITY</cc-title>
    <span
      class="flavor-text"
    >Your AGILITY skill describes your ability to build and pilot fast, evasive mechs</span>
    <v-row dense>
      <v-col cols="auto" class="ml-auto mr-auto">
        <v-btn
          color="secondary"
          :disabled="!pilot.MechSkills.Agi"
          fab
          x-small
          left
          bottom
          class="d-inline elevation-0"
          @click="remove(HASE.A)"
        >
          <v-icon>remove</v-icon>
        </v-btn>
        <cc-rating :model="pilot.MechSkills.Agi" />
        <v-btn
          :disabled="!pilot.IsMissingHASE"
          color="secondary"
          class="d-inline elevation-0"
          fab
          x-small
          right
          bottom
          @click="add(HASE.A)"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row dense class="mt-n3 mb-6">
      <v-col cols="auto" class="ml-auto mr-auto">
        <span class="heading h3">EVASION</span>
        <span class="heading h3 primary--text">+{{ pilot.MechSkills.Agi }}</span>
        <cc-slashes class="ml-1 mr-1" />
        <span class="heading h3">SPEED</span>
        <span class="heading h3 primary--text">+{{ Math.floor(pilot.MechSkills.Agi / 2) }}</span>
      </v-col>
    </v-row>

    <cc-title>SYSTEMS</cc-title>
    <span class="flavor-text">
      Your SYSTEMS skill describes your ability to build and pilot technical mechs with powerful
      electronic warfare tools
    </span>
    <v-row dense>
      <v-col cols="auto" class="ml-auto mr-auto">
        <v-btn
          color="secondary"
          :disabled="!pilot.MechSkills.Sys"
          fab
          x-small
          left
          bottom
          class="d-inline elevation-0"
          @click="remove(HASE.S)"
        >
          <v-icon>remove</v-icon>
        </v-btn>
        <cc-rating :model="pilot.MechSkills.Sys" />
        <v-btn
          class="d-inline elevation-0"
          color="secondary"
          :disabled="!pilot.IsMissingHASE"
          fab
          x-small
          right
          bottom
          @click="add(HASE.S)"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row dense class="mt-n3 mb-6">
      <v-col cols="auto" class="ml-auto mr-auto">
        <span class="heading h3">ELECTRONIC DEFENSE</span>
        <span class="heading h3 primary--text">+{{ pilot.MechSkills.Sys }}</span>
        <cc-slashes class="ml-1 mr-1" />
        <span class="heading h3">TECH ATTACK</span>
        <span class="heading h3 primary--text">+{{ pilot.MechSkills.Sys }}</span>
        <cc-slashes class="ml-1 mr-1" />
        <span class="heading h3">SP</span>
        <span class="heading h3 primary--text">+{{ Math.floor(pilot.MechSkills.Sys / 2) }}</span>
      </v-col>
    </v-row>

    <cc-title>Engineering</cc-title>
    <span class="flavor-text">
      Your ENGINEERING skill describes your ability to build and pilot mechs with powerful
      reactors, supplies and support systems
    </span>
    <v-row dense>
      <v-col cols="auto" class="ml-auto mr-auto">
        <v-btn
          color="secondary"
          :disabled="!pilot.MechSkills.Eng"
          fab
          x-small
          left
          bottom
          class="d-inline elevation-0"
          @click="remove(HASE.E)"
        >
          <v-icon>remove</v-icon>
        </v-btn>
        <cc-rating :model="pilot.MechSkills.Eng" />
        <v-btn
          class="d-inline elevation-0"
          color="secondary"
          :disabled="!pilot.IsMissingHASE"
          fab
          x-small
          right
          bottom
          @click="add(HASE.E)"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row dense class="mt-n3 mb-6">
      <v-col cols="auto" class="ml-auto mr-auto">
        <span class="heading h3">HEAT CAPACITY</span>
        <span class="heading h3 primary--text">+{{ pilot.MechSkills.Eng }}</span>

        <cc-slashes class="ml-1 mr-1" />

        <span class="heading h3">LIMITED SYSTEMS BONUS</span>
        <span class="heading h3 primary--text">+{{ Math.floor(pilot.MechSkills.Eng / 2) }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'
import { Pilot, HASE } from '@/class'

@Component({ 
  name: 'cc-mech-skills-selector',
})
export default class CCMechSkillsSelector extends Vue {
  
  @Prop({ type: Object, required: true})
  pilot!: Pilot

  @Watch('pilot.IsMissingHASE') missingHASEHandler(newVal) {
    if (newVal === false) window.scrollTo(0, document.body.scrollHeight)
  }

  get HASE() { return HASE }
  add(field: HASE) {
    this.pilot.MechSkills.Increment(field)
  }
  remove(field: HASE) {
    this.pilot.MechSkills.Decrement(field)
  }

  @Emit() close() {}
}
</script>

<style scoped>
.bonus-text {
  position: relative;
  bottom: 20px;
}
</style>

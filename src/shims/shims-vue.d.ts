import Vue from 'vue'
import { LoDashStatic } from 'lodash';

declare module 'vue/types/vue' {
  interface Vue {
    $appVersion: string
    $lancerVersion: string
    $_: LoDashStatic
    $platform: string
    $notify: (text: string, type?: string, onClick?: () => void) => void
  }

}
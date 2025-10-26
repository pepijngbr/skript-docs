import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/app.css'
import './styles/syntax-colors.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createPinia } from 'pinia'
import { useThemeStore } from '@/stores/theme'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.use(router)

const themeStore = useThemeStore()
themeStore.initTheme()

import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'
hljs.registerLanguage('skript', (hljs) => {
  return {
    name: 'Skript',
    case_insensitive: true,
    keywords:
      'if else loop while for in return function -> :: returns break continue stop exit switch case try catch do command ' +
      'set add remove delete clear on cancel event',
    contains: [
      {
        scope: 'comment',
        begin: /#/,
        end: /$/,
      },
      {
        className: 'function',
        begin: /[a-zA-Z_0-9]+\(.*?\)/,
      },
      {
        scope: 'trigger',
        begin: /^(?:on|function|command) .*:$/,
      },
      {
        scope: 'optional',
        begin: /\[/,
        end: /\]/,
        contains: [
          {
            scope: 'choice',
            begin: /\(/,
            end: /\)/,
          },
          {
            scope: 'optional',
            begin: /\[/,
            end: /\]/,
          },
        ],
      },
      {
        scope: 'choice',
        begin: /\(/,
        end: /\)/,
        contains: [
          {
            scope: 'choice',
            begin: /\(/,
            end: /\)/,
          },
          {
            scope: 'optional',
            begin: /\[.*?\]/,
          },
        ],
      },
      {
        scope: 'variable',
        begin: /\{[^}]*\}/,
      },
      {
        scope: 'string',
        begin: /"/,
        end: /"/,
      },
      {
        scope: 'number',
        begin: /\b\d+(?:\.\d+)?\b/,
      },
      {
        scope: 'type',
        begin: /%[^%:]+%/,
      },
      {
        className: 'literal',
        begin: /\b(?:true|false|yes|no|on|off)\b/,
      },
      {
        className: 'evalue',
        begin:
          /\b(?:event(-| ))?(?:player|world|block|item([ ]stack|)|location|(living[ ])?entit(y[ ]type|y|ie)|number|int|long|double|inventor(y|ie|y[ ]type)|time([ ]span)?|loop(-| )[^ ]*?)[s]?\b/,
      },
    ],
  }
})
app.use(hljsVuePlugin)

import { VueMarkdownItPlugin } from '@f3ve/vue-markdown-it'
app.use(VueMarkdownItPlugin)

app.mount('#app')

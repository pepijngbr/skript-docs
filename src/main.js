import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/app.css'
import './styles/syntax-colors.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router)

import hljs from 'highlight.js/lib/core';
import hljsVuePlugin from "@highlightjs/vue-plugin";
hljs.registerLanguage('skript', (hljs) => {
    return {
        name: 'Skript',
        case_insensitive: true,
        keywords: 'if else loop while for in return function -> :: returns break continue stop exit switch case try catch do command ' +
            'set add remove delete clear on',
        contains: [
            {
                scope: 'comment',
                begin: /#/, end: /$/
            },
            {
                scope: 'optional',
                begin : /\[.*?\]/
            },
            {
                scope: 'choice',
                begin : /\(/, end: /\)/,
                contains: [
                    {
                        scope: 'choice',
                        begin : /\(/, end: /\)/,
                    },
                   {
                        scope: 'optional',
                        begin : /\[.*?\]/
                    },
                ]
            },
            {
                scope: 'variable',
                begin: /\{[^}]*\}/
            },
            {
                scope: 'string',
                begin: /"/, end: /"/
            },
            {
                scope: 'number',
                begin: /\b\d+(\.\d+)?\b/
            },
            {
                scope: 'type',
                begin: /%[^%]+%/
            },
            {
                className: 'literal',
                begin: /\b(true|false|yes|no|on|off)\b/
            }
        ]       
    }
});
app.use(hljsVuePlugin)

import { VueMarkdownItPlugin } from '@f3ve/vue-markdown-it';
app.use(VueMarkdownItPlugin);

app.mount('#app')

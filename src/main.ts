import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/base16/tomorrow.css'
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import hhButton from './components/buttons/hhButton.vue'
import hhTextarea from './components/textareas/hhTextarea.vue'
import hhModal from './components/modals/hhModals.vue'
import hhEcharts from './components/echarts/hhEcharts.vue'
import hhSwiper from './components/swipers/hhSwiper.vue'

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);

const app = createApp(App)
app.component('hhButton', hhButton).component('hhTextarea', hhTextarea).component('hhModal', hhModal).component('hhEcharts', hhEcharts).component('hhSwiper', hhSwiper)
app.use(router).use(hljsVuePlugin).mount('#app')

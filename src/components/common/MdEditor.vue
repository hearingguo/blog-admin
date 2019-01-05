<template>
  <MdEditor
    v-model="content" 
    ref="mdEditor"
    :configs="configs"
    :highlight="true"
    preview-class="markdown-body">
  </MdEditor>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import MdEditor from 'vue-simplemde/src/markdown-editor'
import 'simplemde/dist/simplemde.min.css'
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js'
(window as any).hljs = hljs

@Component({
  components: {
    MdEditor
  }
})
export default class Editor extends Vue {

  private content: string = ''

  private configs: IMdEditorConfig = {
    status: false,
    indentWithTabs: false,
    spellChecker: false
  }
  
}

</script>

<style lang="less" scoped>

</style>

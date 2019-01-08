<template>
  <MdEditor
    v-model="mdContent" 
    ref="mdEditor"
    :configs="configs"
    :highlight="true"
    preview-class="markdown-body">
  </MdEditor>
</template>

<script lang="ts">

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import MdEditor from 'vue-simplemde/src/markdown-editor'
import 'simplemde/dist/simplemde.min.css'
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js'

window.hljs = hljs

@Component({
  components: {
    MdEditor
  }
})
export default class Editor extends Vue {

  private mdContent: string = ''

  @Prop()
  private content: string

  @Watch('content')
  onContentChange(nVal: string){
    this.mdContent = nVal
  }

  @Watch('mdContent')
  onMDContentChange(nVal: string) {
    this.$emit('update:content', nVal)
  }

  private configs: IMdEditorConfig = {
    status: false,
    indentWithTabs: false,
    spellChecker: false
  }
  
}

</script>

<style lang="less" scoped>

</style>


interface Document {
  readonly mozFullScreenElement?: Element | null
  readonly fullScreen?: Element | null
  readonly mozFullScreen?: Element | null
  mozCancelFullScreen (): void
  msExitFullscreen (): void
}

interface HTMLElement {
  mozRequestFullScreen (): void
  msRequestFullscreen (): void
}

declare module 'element-ui'

declare module 'vue-simplemde/src/markdown-editor'

declare module 'highlight.js'

declare module '*.jpg'

declare interface IMdEditorConfig {
  status: boolean;
  indentWithTabs: boolean;
  spellChecker: boolean;
}

interface Window {
  hljs: any
}



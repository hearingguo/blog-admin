
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

declare module 'nprogress'

declare module 'vue-simplemde/src/markdown-editor'

declare module 'highlight.js'

declare module '*.jpg'



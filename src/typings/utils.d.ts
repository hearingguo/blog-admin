
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

declare module 'nprogress'

declare module '*.jpg'



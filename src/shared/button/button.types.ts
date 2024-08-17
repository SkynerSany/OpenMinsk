export interface IButton {
  text: string,
  type: 'button' | 'link',
  color: 'green' | 'white',
  link? : string,
  newClass?: string,
  callback?: () => void
}
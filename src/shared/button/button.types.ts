export interface IButton {
  text: 'string',
  type: 'button' | 'link',
  color: 'blue' | 'white',
  link? : string,
  newClass?: string,
  callback?: () => void
}
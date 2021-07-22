import { Message } from 'element-ui' //

// @message 报错文案   @type 'success''error'
export function message(message, type) {
  Message({
    message,
    type,
  })
}

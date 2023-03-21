module.exports = function (chatType) {
  return function (ctx, next) {
    console.log(ctx.chat.type)
    const message = ctx.message
    if (ctx.chat.type === chatType) {
      next()
    } else {
      console.log('Игнорирую команду, потому что она была отправлена не из группы.')
    }
  }
}

//chatType может быть 'group' или 'private'

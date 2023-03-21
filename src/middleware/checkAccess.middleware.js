module.exports = async function checkAccess(ctx, next) {
  const ctxApi = new Api()

  // const chatMember = await ctx.api.getChatMember(ctx.from.id)
  // if (chatMember.status === 'creator' || chatMember.status === 'administrator') {
  //   return next()
  // }
  // const isDeveloper = ctx.from.id === process.env.DEVELOPER_ID
  // if (!isDeveloper) {
  //   return ctx.reply('У вас нет прав для выполнения этой команды!', {})
  // }
}

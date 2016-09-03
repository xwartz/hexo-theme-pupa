/**
 * Helper: is_current_menu(menu)
 *
 * To be used as an alternative to the `is_current()` helper
 * with the layout "menu" configuration.
 *
 * https://github.com/hexojs/hexo/issues/743
 */
function isCurrentMenu (menu) {
  var _this = this
  menu = menu || ''

  // filter the input path and the current path
  var paths = [menu, this.path].map(function (p) {
    return _this.url_for(p)
      .replace(new RegExp('^' + hexo.config.root), '')
      .replace(/index.html$/, '')
      .replace(/\/$/, '')
      .replace(/^\//, '')
  })

  return paths[0] === paths[1] ||
    (paths[0].length && paths[1].substring(0, paths[0].length) === paths[0])
}

hexo.extend.helper.register('is_current_menu', isCurrentMenu)

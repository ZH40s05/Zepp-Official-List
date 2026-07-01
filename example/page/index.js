import { showToast } from '@zos/interaction'
import { createListPage, listWidget } from '../utils/zolist'

Page({
  build() {
    const list = createListPage({
      header: { text: '列表控件', text_i18n: { 'en-US': 'List Control', 'zh-CN': '列表控件' } },
      footer: { button: true, click_func: () => showToast({ content: '帮助' }) },
    })

    list.createWidget(listWidget.TEXT, {
      icon: 'icon.png', title: '单标题模板', clickable: true,
      click_func: () => list.push({ url: 'page/single' }),
    })
    list.createWidget(listWidget.TEXT, {
      icon: 'app_icon.png', title: '复合标题模板', clickable: true,
      click_func: () => list.push({ url: 'page/multiline' }),
    })
    list.createWidget(listWidget.TEXT, {
      icon: 'app_icon.png', title: '自动换行测试', clickable: true,
      click_func: () => list.push({ url: 'page/wrap' }),
    })
    list.createWidget(listWidget.TEXT, {
      icon: 'app_icon.png', title: '多层跳转测试', clickable: true,
      click_func: () => list.push({ url: 'page/level1' }),
    })
    list.createWidget(listWidget.TEXT, {
      icon: 'app_icon.png', title: '方屏页面测试', clickable: true,
      click_func: () => list.push({ url: 'page/square' }),
    })
    list.createWidget(listWidget.CATEGORY, { text: '点击进入查看各类列表行' })
    list.mount()
    this.list = list
  },
})

import { showToast } from '@zos/interaction'
import { createListPage, listWidget } from '../utils/zolist'

Page({
  build() {
    const list = createListPage({
      header: { text: '第 1 层' },
      footer: { button: true, click_func: () => showToast({ content: '第1层帮助' }) },
    })

    list.createWidget(listWidget.TEXT, {
      title: '进入第 2 层', clickable: true,
      click_func: () => list.push({ url: 'page/level2' }),
    })
    list.createWidget(listWidget.SWITCH, {
      title: '第 1 层开关', checked: true,
      checked_change_func: (checked) => showToast({ content: '第1层: ' + (checked ? '开' : '关') }),
    })
    list.createWidget(listWidget.TEXT, {
      title: '普通文本条目', subtitle: '用于确认副标题自动启用复合行',
    })

    list.mount()
    this.list = list
  },
})

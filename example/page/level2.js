import { showToast } from '@zos/interaction'
import { createListPage, listWidget } from '../utils/zolist'

Page({
  build() {
    const list = createListPage({
      header: { text: '第 2 层' },
      footer: { button: true, click_func: () => showToast({ content: '第2层帮助' }) },
    })

    list.createWidget(listWidget.TEXT, {
      title: '进入第 3 层', clickable: true,
      click_func: () => list.push({ url: 'page/level3' }),
    })
    list.createWidget(listWidget.CHECKBOX, {
      title: '第 2 层选择', checked: false,
      checked_change_func: (checked) => showToast({ content: '第2层选择: ' + (checked ? '√' : '×') }),
    })
    list.createWidget(listWidget.TEXT, {
      title: '复合文本条目', subtitle: '继续向下 push 后再返回测试 dispose/onKey',
    })

    list.mount()
    this.list = list
  },
})

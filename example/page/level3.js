import { showToast } from '@zos/interaction'
import { createListPage, listWidget, listProp } from '../utils/zolist'

Page({
  build() {
    const list = createListPage({
      header: { text: '第 3 层' },
      footer: { button: true, click_func: () => showToast({ content: '第3层帮助' }) },
    })

    const titleItem = list.createWidget(listWidget.TEXT, {
      title: '最深层文本', subtitle: '这是第三层页面',
    })
    list.createWidget(listWidget.RADIO, {
      title: '单选 A', group: 'deep', checked: true,
      checked_change_func: () => showToast({ content: '单选 A' }),
    })
    list.createWidget(listWidget.RADIO, {
      title: '单选 B', group: 'deep', checked: false,
      checked_change_func: () => showToast({ content: '单选 B' }),
    })
    list.createWidget(listWidget.TEXT, {
      title: '修改本页标题', clickable: true,
      click_func: () => {
        list.setProperty(listProp.HEADER_TEXT, '已修改')
        titleItem.setProperty(listProp.TITLE, '标题已更新')
      },
    })

    list.mount()
    this.list = list
  },
})

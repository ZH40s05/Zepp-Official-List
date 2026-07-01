import { showToast } from '@zos/interaction'
import { createListPage, listWidget, listProp } from '../utils/zolist'

Page({
  build() {
    const list = createListPage({
      header: { text: '单标题' },
      footer: { button: true, click_func: () => showToast({ content: '帮助' }) },
    })

    list.createWidget(listWidget.TEXT, {
      icon: 'app_icon.png', title: '图标条目', clickable: true,
      click_func: () => showToast({ content: '点击: 图标条目' }),
    })
    list.createWidget(listWidget.TEXT, { title: '纯文字条目' })
    list.createWidget(listWidget.TEXT, {
      title: '可点击文本条目', clickable: true,
      click_func: () => showToast({ content: '点击: 可点击文本条目' }),
    })

    this.switchItem = list.createWidget(listWidget.SWITCH, {
      title: '开关条目', checked: true,
      checked_change_func: (checked) => showToast({ content: '开关: ' + (checked ? '开' : '关') }),
    })

    list.createWidget(listWidget.CHECKBOX, {
      title: '选择条目 A', checked: true,
      checked_change_func: (checked) => showToast({ content: '选择A: ' + (checked ? '√' : '×') }),
    })
    list.createWidget(listWidget.CHECKBOX, {
      title: '选择条目 B', checked: false,
      checked_change_func: (checked) => showToast({ content: '选择B: ' + (checked ? '√' : '×') }),
    })

    list.createWidget(listWidget.RADIO, {
      title: '单选项 一', group: 'radio', checked: true,
      checked_change_func: () => showToast({ content: '单选: 一' }),
    })
    list.createWidget(listWidget.RADIO, {
      title: '单选项 二', group: 'radio', checked: false,
      checked_change_func: () => showToast({ content: '单选: 二' }),
    })

    list.createWidget(listWidget.CATEGORY, { text: '以上为单标题各类列表行' })
    list.mount()
    this.switchItem.setProperty(listProp.TITLE, '开关条目')
    this.list = list
  },
})

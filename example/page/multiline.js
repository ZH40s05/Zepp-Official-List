import { showToast } from '@zos/interaction'
import { createListPage, listWidget } from '../utils/zolist'

Page({
  build() {
    const list = createListPage({
      header: { text: '复合标题' },
    })

    list.createWidget(listWidget.TEXT, {
      icon: 'app_icon.png', title: '图标条目', subtitle: '附带说明文字', clickable: true,
      click_func: () => showToast({ content: '点击: 图标条目' }),
    })
    list.createWidget(listWidget.TEXT, {
      title: '纯文字条目', subtitle: '此行不可操作',
      title_i18n: { 'en-US': 'Text item', 'zh-CN': '纯文字条目' },
      subtitle_i18n: { 'en-US': 'Display only', 'zh-CN': '此行不可操作' },
    })
    list.createWidget(listWidget.TEXT, {
      title: '可点击文本条目', subtitle: '点击进入下一级', clickable: true,
      click_func: () => showToast({ content: '点击: 可点击文本条目' }),
    })

    list.createWidget(listWidget.SWITCH, {
      title: '开关条目', subtitle: '可切换开/关状态', checked: true,
      checked_change_func: (checked) => showToast({ content: '开关: ' + (checked ? '开' : '关') }),
    })

    list.createWidget(listWidget.CHECKBOX, {
      title: '选择条目 A', subtitle: '默认已选', checked: true,
      checked_change_func: (checked) => showToast({ content: '选择A: ' + (checked ? '√' : '×') }),
    })
    list.createWidget(listWidget.CHECKBOX, {
      title: '选择条目 B', subtitle: '默认未选', checked: false,
      checked_change_func: (checked) => showToast({ content: '选择B: ' + (checked ? '√' : '×') }),
    })

    list.createWidget(listWidget.RADIO, {
      title: '单选项 一', subtitle: '互斥单选组', group: 'radio', checked: true,
      checked_change_func: () => showToast({ content: '单选: 一' }),
    })
    list.createWidget(listWidget.RADIO, {
      title: '单选项 二', subtitle: '互斥单选组', group: 'radio', checked: false,
      checked_change_func: () => showToast({ content: '单选: 二' }),
    })

    list.mount()
    this.list = list
  },
})

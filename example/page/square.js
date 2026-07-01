import { showToast } from '@zos/interaction'
import { createListPage, listWidget } from '../utils/zolist'

Page({
  build() {
    const list = createListPage({
      hideStatusBar:false,
      header: false,
      footer: { button: true, click_func: () => showToast({ content: '方屏页脚' }) },
    })

    list.createWidget(listWidget.SPACER, {
      h: 64,
    })
    list.createWidget(listWidget.CATEGORY, { text: '方屏布局覆盖测试' })

    list.createWidget(listWidget.TEXT, {
      icon: 'app_icon.png',
      title: '带图标和箭头的文本',
      clickable: true,
      click_func: () => showToast({ content: '图标文本' }),
    })

    list.createWidget(listWidget.TEXT, {
      title: '不带图标的文本',
      clickable: true,
      click_func: () => showToast({ content: '纯文本' }),
    })

    list.createWidget(listWidget.TEXT, {
      title: '不可点击文本也可被选中',
    })

    list.createWidget(listWidget.SWITCH, {
      icon: 'app_icon.png',
      title: '开关条目',
      checked: true,
      checked_change_func: (checked) => showToast({ content: checked ? '开关已开' : '开关已关' }),
    })

    list.createWidget(listWidget.CHECKBOX, {
      icon: 'app_icon.png',
      title: '复选框条目',
      checked: true,
      checked_change_func: (checked) => showToast({ content: checked ? '已勾选' : '未勾选' }),
    })

    list.createWidget(listWidget.RADIO, {
      title: '单选项 选项1',
      subtitle: '方屏布局中的双行条目',
      group: 'square-radio',
      checked: true,
      checked_change_func: () => showToast({ content: '选项1' }),
    })

    list.createWidget(listWidget.RADIO, {
      title: '单选项 选项2',
      group: 'square-radio',
      checked: false,
      checked_change_func: () => showToast({ content: '选项2' }),
    })

    list.createWidget(listWidget.CATEGORY, { text: '方屏图片最大宽度 326px' })

    list.createWidget(listWidget.IMAGE, {
      src: 'figma_frame_126.png',
      radius: 78,
      click_func: () => showToast({ content: '原始比例图片' }),
    })

    list.createWidget(listWidget.IMAGE, {
      src: 'figma_frame_126_wide.png',
      w: 720,
      h: 360,
      radius: 61,
      click_func: () => showToast({ content: '宽图' }),
    })

    list.createWidget(listWidget.IMAGE, {
      src: 'figma_frame_126_round.png',
    })

    list.mount()
    this.list = list
  },
})

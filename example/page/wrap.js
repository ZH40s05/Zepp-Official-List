import { text_style } from '@zos/ui'
import { showToast } from '@zos/interaction'
import { createListPage, listWidget } from '../utils/zolist'

const LONG_TITLE = '这是一段很长的主标题文字,用于验证默认 text_style.WRAP 会自动换行并撑高当前列表行'
const LONG_SUBTITLE = '这是一段很长的副标题说明文字,用于验证复合标题行在主标题和副标题同时换行时仍能正确计算总高度、图标位置和焦点遮罩高度。'

Page({
  build() {
    const list = createListPage({
      header: {
        text: '自动换行测试',
        subtitle: 'Header subtitle 支持官方复合标题布局,也会自动换行并推进列表内容。',
      },
      footer: { button: true, click_func: () => showToast({ content: 'Wrap' }) },
    })

    list.createWidget(listWidget.CATEGORY, {
      text: '默认不传 text_style,应使用官方 text_style.WRAP 自动换行',
    })

    list.createWidget(listWidget.TEXT, {
      icon: 'app_icon.png',
      title: LONG_TITLE,
      clickable: true,
      click_func: () => showToast({ content: '默认 WRAP' }),
    })

    list.createWidget(listWidget.TEXT, {
      title: LONG_TITLE,
      subtitle: LONG_SUBTITLE,
    })

    list.createWidget(listWidget.SWITCH, {
      title: LONG_TITLE,
      subtitle: '开关行也应保留文字自动换行能力,右侧 switch 垂直居中。',
      checked: true,
      checked_change_func: (checked) => showToast({ content: checked ? '开' : '关' }),
    })

    list.createWidget(listWidget.CHECKBOX, {
      title: LONG_TITLE,
      subtitle: 'checkbox 行自动换行后,右侧选择框应垂直居中。',
      checked: true,
      checked_change_func: (checked) => showToast({ content: checked ? '选中' : '取消' }),
    })

    list.createWidget(listWidget.RADIO, {
      title: LONG_TITLE,
      subtitle: 'radio 行自动换行后,右侧单选框应垂直居中。',
      group: 'wrap',
      checked: true,
      checked_change_func: () => showToast({ content: '单选一' }),
    })

    list.createWidget(listWidget.CATEGORY, { text: '图片控件: Figma 素材、自动居中、最大 408px、圆角焦点' })

    list.createWidget(listWidget.IMAGE, {
      src: 'figma_frame_126.png',
      radius: 78,
      click_func: () => showToast({ content: 'Figma: 原始比例' }),
    })

    list.createWidget(listWidget.IMAGE, {
      src: 'figma_frame_126_wide.png',
      w: 720,
      h: 360,
      radius: 39,
      click_func: () => showToast({ content: 'Figma: 408×204' }),
    })

    list.createWidget(listWidget.IMAGE, {
      src: 'figma_frame_126_round.png',
      selectable: false,
    })

    list.createWidget(listWidget.CATEGORY, { text: '以下为官方其它 TEXT_STYLE 对照' })

    list.createWidget(listWidget.TEXT, {
      title: LONG_TITLE,
      text_style: text_style.ELLIPSIS,
      clickable: true,
      click_func: () => showToast({ content: 'ELLIPSIS' }),
    })

    list.createWidget(listWidget.TEXT, {
      title: LONG_TITLE,
      text_style: text_style.NONE,
      clickable: true,
      click_func: () => showToast({ content: 'NONE' }),
    })

    list.mount()
    this.list = list
  },
})

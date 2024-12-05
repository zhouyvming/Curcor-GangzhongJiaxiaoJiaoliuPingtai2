Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '#000000'
    },
    back: {
      type: Boolean,
      value: true
    },
    loading: {
      type: Boolean,
      value: false
    },
    animated: {
      type: Boolean,
      value: true
    },
    show: {
      type: Boolean,
      value: true,
      observer: '_showChange'
    },
    delta: {
      type: Number,
      value: 1
    }
  },

  data: {
    statusBarHeight: 0,
    navBarHeight: 44,
    displayStyle: ''
  },

  lifetimes: {
    attached() {
      const rect = wx.getMenuButtonBoundingClientRect()
      const systemInfo = wx.getWindowInfo()
      
      const isAndroid = systemInfo.platform === 'android'
      const isDevtools = systemInfo.platform === 'devtools'
      
      this.setData({
        statusBarHeight: systemInfo.statusBarHeight,
        navBarHeight: (rect.top - systemInfo.statusBarHeight) * 2 + rect.height,
        ios: !isAndroid,
        innerPaddingRight: `padding-right: ${systemInfo.windowWidth - rect.left}px`,
        leftWidth: `width: ${systemInfo.windowWidth - rect.left}px`,
        safeAreaTop: isDevtools || isAndroid ? 
          `height: ${this.data.navBarHeight + systemInfo.safeArea.top}px; padding-top: ${systemInfo.safeArea.top}px` : 
          ''
      })
    }
  },

  methods: {
    _showChange(show) {
      const animated = this.data.animated
      let displayStyle = ''
      if (animated) {
        displayStyle = `opacity: ${show ? '1' : '0'};transition:opacity 0.5s;`
      } else {
        displayStyle = `display: ${show ? '' : 'none'}`
      }
      this.setData({
        displayStyle
      })
    },

    back() {
      const data = this.data
      if (data.delta) {
        wx.navigateBack({
          delta: data.delta
        })
      }
      this.triggerEvent('back', { delta: data.delta }, {})
    }
  }
})

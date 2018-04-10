(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/common/prop_error_info.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '71d84sx7uBPEYQV97jT63Ze', 'prop_error_info', __filename);
// Script/common/prop_error_info.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    message: cc.Label,
    error_sprite: cc.Sprite
  },
  onLoad: function onLoad() {
    var self = this;
    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞没
      onTouchBegan: function onTouchBegan(touch, event) {
        return true;
      },
      onTouchMoved: function onTouchMoved(touch, event) {// 触摸移动时触发
      },
      onTouchEnded: function onTouchEnded(touch, event) {
        // 点击事件结束处理
        var target = event.getCurrentTarget();
        var local = target.convertToNodeSpace(touch.getLocation());
        var s = target.getContentSize();
        var rect = cc.rect(0, 0, s.width, s.height);
        if (cc.rectContainsPoint(rect, local)) {
          cc.log("ok touch in the region......");
        } else {
          cc.log("touch remove from parent");
          self.node.active = false;
        }
      }
    }, this.error_sprite);
  },
  show_error_info: function show_error_info(message) {
    this.message.string = message;
    this.node.runAction(cc.fadeOut(3));
  }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=prop_error_info.js.map
        
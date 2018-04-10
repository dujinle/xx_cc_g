(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/pop_set_scene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c1654vYXBxIRJSIRRdRbbW9', 'pop_set_scene', __filename);
// Script/pop_set_scene.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		choice_sprite: {
			type: cc.Sprite,
			default: []
		},
		callback: null
	},
	onLoad: function onLoad() {
		cc.log("start go into create game js");
		var self = this;
		this.init_back_info();
		self.node.on("pressed", self.switchRadio, self);
		var bg_sprite = self.node.getChildByName("bg_sprite");
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
		}, bg_sprite);
	},
	init_back_info: function init_back_info() {
		g_music_key = cc.sys.localStorage.getItem(MUSIC_KEY);
		g_sound_key = cc.sys.localStorage.getItem(SOUND_KEY);
		g_chat_key = cc.sys.localStorage.getItem(CHAT_KEY);
		var values = [g_music_key, g_sound_key, g_chat_key, 0];
		for (var i = 0; i < this.choice_sprite.length; i++) {
			var sprite = this.choice_sprite[i];
			if (values[i] == BOOL.NO) {
				sprite.spriteFrame = g_assets["set_close"];
			} else {
				sprite.spriteFrame = g_assets["set_open"];
			}
		}
	},
	set_callback: function set_callback(callback) {
		this.callback = callback;
	},

	buttonCloseCallback: function buttonCloseCallback() {
		console.log("running buttonCloseCallback:function()");
		this.node.active = false;
		this.destroy();
	},
	buttonMusicSettingCallback: function buttonMusicSettingCallback() {
		var sprite = this.choice_sprite[0];
		if (g_music_key == BOOL.NO) {
			g_music_key = BOOL.YES;
			cc.sys.localStorage.setItem(MUSIC_KEY, BOOL.YES);
			sprite.spriteFrame = g_assets["set_open"];
		} else {
			g_music_key = BOOL.NO;
			cc.sys.localStorage.setItem(MUSIC_KEY, BOOL.NO);
			sprite.spriteFrame = g_assets["set_close"];
		}
	},
	buttonSoundSettingCallback: function buttonSoundSettingCallback() {
		var sprite = this.choice_sprite[1];
		if (g_sound_key == BOOL.NO) {
			g_sound_key = BOOL.YES;
			cc.sys.localStorage.setItem(SOUND_KEY, BOOL.YES);
			sprite.spriteFrame = g_assets["set_open"];
		} else {
			g_sound_key = BOOL.NO;
			cc.sys.localStorage.setItem(SOUND_KEY, BOOL.NO);
			sprite.spriteFrame = g_assets["set_close"];
		}
	},
	buttonChatSettingCallback: function buttonChatSettingCallback() {
		var sprite = this.choice_sprite[2];
		if (g_chat_key == BOOL.NO) {
			g_chat_key = BOOL.YES;
			cc.sys.localStorage.setItem(CHAT_KEY, BOOL.YES);
			sprite.spriteFrame = g_assets["set_open"];
		} else {
			g_chat_key = BOOL.NO;
			cc.sys.localStorage.setItem(CHAT_KEY, BOOL.NO);
			sprite.spriteFrame = g_assets["set_close"];
		}
	},
	buttonShockSettingCallback: function buttonShockSettingCallback() {},
	switchRadio: function switchRadio(event) {
		var index = event.target.getComponent("one_choice").index;
		var type = event.target.getComponent("one_choice").type;
		cc.log("switchRadio : index:" + index + " type:" + type);
		if (index == 0) {
			this.buttonMusicSettingCallback();
		} else if (index == 1) {
			this.buttonSoundSettingCallback();
		} else if (index == 2) {
			this.buttonChatSettingCallback();
		} else if (index == 3) {
			this.buttonShockSettingCallback();
		}
		this.callback(index);
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
        //# sourceMappingURL=pop_set_scene.js.map
        
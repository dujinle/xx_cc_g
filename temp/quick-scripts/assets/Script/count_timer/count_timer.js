(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/count_timer/count_timer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '537707dxNpO1q1HV1x0DYFo', 'count_timer', __filename);
// Script/count_timer/count_timer.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
		extends: cc.Component,

		properties: {
				progress_bar_top: cc.ProgressBar,
				progress_bar_boom: cc.ProgressBar,
				top_precent: 0,
				boom_precent: 0,
				pid: 0,
				sumTime: 3
		},

		onLoad: function onLoad() {
				cc.log("load counter time progress", this.sumTime);
				this.sumTime = 3;
				this.progress_bar_top.progress = 0;
				this.progress_bar_boom.progress = 0;
				this.top_precent = 0;
				this.boom_precent = 0;
				cc.log(this.progress_bar_top.progress, this.progress_bar_boom.progress);
				//this.start_timer();
		},
		start_timer: function start_timer() {
				cc.log("start timer .......", this.sumTime);
				cc.log("start timer .......", this.progress_bar_top.progress, this.progress_bar_boom.progress);
				this.progress_bar_top.progress = 0;
				this.progress_bar_boom.progress = 0;
				this.top_precent = 0;
				this.boom_precent = 0;
				this.schedule(this.progress_bar, 0.1);
		},
		progress_bar: function progress_bar() {
				cc.log("top_precent:" + this.top_precent + " boom_precent" + this.boom_precent);
				cc.log("top:" + this.progress_bar_top.progress + " boom:" + this.progress_bar_boom.progress);
				if (this.progress_bar_boom.progress <= 1) {
						this.boom_precent = this.boom_precent + 0.2;
						this.progress_bar_boom.progress = this.boom_precent / this.sumTime;
						return;
				}
				if (this.progress_bar_top.progress <= 1) {
						this.top_precent = this.top_precent + 0.2;
						this.progress_bar_top.progress = this.top_precent / this.sumTime;
						return;
				}
				this.unschedule(this.progress_bar);
		},

		stop_timer: function stop_timer() {
				this.unschedule(this.progress_bar);
				this.progress_bar_top.progress = 0;
				this.progress_bar_boom.progress = 0;
				this.top_precent = 0;
				this.boom_precent = 0;
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
        //# sourceMappingURL=count_timer.js.map
        
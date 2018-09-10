
cc.Class({
    extends: cc.Component,

    properties: {
        message:cc.Label,
        error_sprite:cc.Sprite,
		cb:null,
    },
    onLoad () {
		this.updateTimer = 0;  
        this.updateInterval = 0.2;
		var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞没
            onTouchBegan: function (touch, event) {
                return true;
            },
            onTouchMoved: function (touch, event) {            // 触摸移动时触发
            },
            onTouchEnded: function (touch, event) {            // 点击事件结束处理
				var target = this.error_sprite;//event.getCurrentTarget();
				var local=target.convertToNodeSpace(touch.getLocation());
				var s = target.getContentSize();
				var rect = cc.rect(0, 0, s.width, s.height);
				if (cc.rectContainsPoint(rect, local)){
					cc.log("ok touch in the region......");
				}else{
					cc.log("touch remove from parent");
					//self.node.active = false;
				}
			}
         }, this.error_sprite);
    },
	show_error_info(message,cb){
		this.message.string = message;
		this.cb = cb;
	},
	update(dt){
		this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) {
            return; // we don't need to do the math every frame
        }
		this.updateTimer = 0;
		//获取底层的网络状态
		if(cc.sys.os == cc.sys.OS_ANDROID){
			var login_type = jsb.reflection.callStaticMethod("org.cocos2dx.javascript.AppActivity", "getNetType", "()I");
			if(login_type != -1){
				this.cb();
				this.node.active = false;
				this.node.destroy();
			}
		}else if(cc.sys.os == cc.sys.OS_IOS){
			var login_type = jsb.reflection.callStaticMethod("NativeOcClass", "getNetType");
			if(login_type != -1){
				this.cb();
				this.node.active = false;
				this.node.destroy();
			}
		}
	}
});

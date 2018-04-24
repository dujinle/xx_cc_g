cc.Class({
    extends: cc.Component,

    properties: {
    	game_bg:cc.Node,
    	max_type:1,
		fangka:1,
		wait_time:1,
		renshu:2,
		game_type:"PJ",
		choice_radios:{
			type:cc.Node,
			default:[],
		}
    },
    onLoad () {
		cc.log("start go into create game js");
		var self = this;
		self.model = 1;
		self.max_type = 1;
		self.fangka = 1;
		self.node.on("pressed", self.switchRadio, self);
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
				var target=event.getCurrentTarget();
				var local=target.convertToNodeSpace(touch.getLocation());
				var s = target.getContentSize();
				var rect = cc.rect(0, 0, s.width, s.height);
				if (cc.rectContainsPoint(rect, local)){
					cc.log("ok touch in the region......");
				}else{
					cc.log("touch remove from parent");
					self.node.active = false;
					self.node.destroy();
				}
			}
         }, self.game_bg);
	},
	switchRadio(event) {
        var index = event.target.getComponent("one_choice").index;
		var type = event.target.getComponent("one_choice").type;
		cc.log("switchRadio : index:" + index + " type:" + type);
        for(let i = 0; i < this.choice_radios.length; i++){
			var item = this.choice_radios[i].getComponent("one_choice");
            if(item.type == type){
            	if(type == 0){
            		this.renshu = index;
            	}else if(type == 1){
            		this.max_type = index;
            	}else if(type == 2){
            		this.wait_time = index;
            	}else if(type == 3){
            		this.fangka = index;
            	}
            	if(item.index == index){
            		item.pitchOn();
            	}else{
            		item.lifeUp();
            	}
            }
        }
		cc.log("select renshu" + this.renshu + " fangka:" + this.fangka + " zuida:" + this.max_type + " wait_time:" + this.wait_time);
    },
	create_game(){
		var self = this;
		var size = cc.director.getVisibleSize();
		window.g_fapaiNum = this.koupai + 1;
		var param = {
			roomType:this.game_type,
			playerId:g_user.playerId,
			model:this.model,
			max_type:this.max_type,
			fangKa:this.fangka
		};
		room_create(param,function(msg){
			var error_tip = cc.instantiate(g_assets["prop_error_scene"]);
			var error_tip_com = error_tip.getComponent("prop_error_info");
			error_tip_com.show_error_info(msg);
			self.node.addChild(error_tip);
			error_tip.setPosition(self.node.convertToNodeSpace(size.width/2,size.height/2));
			cc.log(msg);
		});
	},
    // update (dt) {},
});
/**
 * Created by guowanfu on 2016/5/3.
 */

/* gameScene.js*/

//扑克牌背面
var g_is_login = false;
var g_next_scene = null;
var g_next_data = null;
var g_login_auto = false;
var g_DEBUG = true;

//房间中玩家存储数据
var g_room_data = null;
var g_players_data = new Array();
var g_zhuang_serverPosition = 0;
var g_players = new Array();
var g_myselfPlayerPos = -1;
var g_playerData = new Array();
var g_roomMasterName = "";
var g_game_type = "ZJH";
var g_fapaiNum = 3;
var g_totalCount = 0;
var g_user = null;
var g_assets = {};

//游戏设置全局变量
var g_version = "0.0.1";
var g_music_key;
var g_sound_key;
var g_chat_key;
var g_paixing = [[0,0],[2,1],[2,1],[3,1],[4,1],[4,1],[4,2],[4,2],[5,1],[5,2],
	[6,1],[6,2],[6,2],[6,3],[6,3],[7,1],[7,2],[7,2],[7,3],[8,1],[8,2],
	[8,3],[8,3],[9,1],[9,2],[10,1],[10,1],[10,2],[10,2],[11,1],[11,1],[12,1],[12,1]];
MUSIC_KEY="music_key";
SOUND_KEY="sound_key";
CHAT_KEY="chat_key";
BOOL={
    NO:"0",
    YES:"1"
};

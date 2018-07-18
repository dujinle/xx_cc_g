/**
 * Created by kenkozheng on 2014/12/4.
 */
Storage = {};

Storage.setData = function(key,value){
	cc.sys.localStorage.setItem(key,value);
}

Storage.getData = function(key){
	var value = cc.sys.localStorage.getItem(key) || null;
    return value;
}

Storage.getImei = function () {
    var imei  = cc.sys.localStorage.getItem("imei") || 0;
    //返回本机IMEI --待改造
    if(!imei){
        imei = util.createUUID();// imei = getBJimei(); //底层获取IMEI
        Storage.setImei(imei);
    }
    return imei;
}

Storage.setImei = function(imei){
    cc.sys.localStorage.setItem("imei",imei);
    return true;
}
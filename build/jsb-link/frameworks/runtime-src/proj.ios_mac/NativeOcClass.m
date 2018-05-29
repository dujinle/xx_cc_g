//
//  NativeOcClass.m
//  hello_world-mobile
//
//  Created by jiaxu on 2018/5/28.
//

#import "NativeOcClass.h"
#import "WXApi.h"
@implementation NativeOcClass

+(instancetype)sharedManager {
    static dispatch_once_t onceToken;
    static NativeOcClass *instance;
    dispatch_once(&onceToken, ^{
        instance = [[NativeOcClass alloc] init];
        instance.LoginType = 0;
    });
    return instance;
}

+(void)iOSLoginWithWX{
    SendAuthReq *req = [[[SendAuthReq alloc]init] autorelease];
    req.scope = @"snsapi_userinfo";
    req.state = @"123";
    
    [WXApi sendReq:req];
}
+(void)setLoadStatus:int LoadStatus{
	[NativeOcClass sharedManager].LoadStatus = LoadStatus;
}

+(NSString *)getWXCode{   
    return [NativeOcClass sharedManager].wxCode;
}
+(NSString *)getAppId{ 
    return @"wx6c145967bc25e278";
}
+(NSString *)getAppSecret{
    return @"58e5b95e019569937536d937d4f680f5";
}
+(int)getLoginType{
    return [NativeOcClass sharedManager].LoginType;
}
+(NSString *)getRoomNum{
    return [NativeOcClass sharedManager].roomNum;
}
+(NSString *)getScene{
    return [NativeOcClass sharedManager].scene;
}
+(NSString *)getRid{
    return [NativeOcClass sharedManager].rid;
}
@end

//
//  RNIOSLog.h
//  BabyShow
//
//  Created by myxc on 2018/11/29.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>

@interface RNIOSLog : RCTEventEmitter<RCTBridgeModule>

//公开调用接口，供其他地方使用
-(void)nativeCallRn:(NSString*)code result:(NSString*) result;

@end

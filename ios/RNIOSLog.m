//
//  RNIOSLog.m
//  BabyShow
//
//  Created by myxc on 2018/11/29.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RNIOSLog.h"

@implementation RNIOSLog

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"callRn"];//有几个就写几个
}

-(void)nativeCallRn:(NSString*)code result:(NSString*) result
{
  [self sendEventWithName:@"callRn"
                     body:@{
                            @"code": code,
                            @"result": result,
                            }];
}

RCT_EXPORT_METHOD(callMe){
  NSLog(@"RN call OC here!");
  [self nativeCallRn:@"200" result:@"OC call Rn----------"];
}

@end

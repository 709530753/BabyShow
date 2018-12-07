//
//  RNOC.m
//  BabyShow
//
//  Created by myxc on 2018/11/29.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RNOC.h"
#import <React/RCTRootView.h>
#import <React/RCTConvert.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <AVFoundation/AVFoundation.h>
#import "NextViewController.h"

@interface RNOC()<UIAlertViewDelegate>

@property (nonatomic, strong) RCTResponseSenderBlock alertCallback;

@end

@implementation RNOC

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(show:(NSString *)msg){
  NSLog(@"msg:%@",msg);
  
//  NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/Component/List/List.bundle?platform=ios"];
//  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//                                                      moduleName:@"BabyShow"
//                                               initialProperties:nil
//                                                   launchOptions:nil];
//
//  UIViewController *vc = [[UIViewController alloc] init];
//  vc.view = rootView;
//  UINavigationController *nav = [[UINavigationController alloc]initWithRootViewController:vc];
//  [nav pushViewController:vc animated:YES];
//  UIAlertView * alertView=[[UIAlertView alloc] initWithTitle:@"react-native" message:msg delegate:nil cancelButtonTitle:@"关闭" otherButtonTitles:nil, nil];
//  [alertView show];

  
  NSURL *jsCodeLocation;
  
  [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryAmbient error:nil];  // allow

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"test" fallbackResource:nil];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"BabyShow"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = UIColor.redColor;
//  [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  NextViewController *rootViewController = [NextViewController new];

  UINavigationController *nav = [[UINavigationController alloc]initWithRootViewController:rootViewController];
  UIWindow *keyWindow = [[UIApplication sharedApplication] keyWindow];
  keyWindow.rootViewController = nav;
//  rootViewController.view.bounds = [UIScreen mainScreen].bounds;
//  [keyWindow addSubview:rootView];
  
}

RCT_EXPORT_METHOD(showAlert:(NSString *)msg){
  //    dispatch_async(dispatch_get_main_queue(), ^{
  UIAlertView * alertView=[[UIAlertView alloc] initWithTitle:@"react-native" message:msg delegate:nil cancelButtonTitle:@"关闭" otherButtonTitles:nil, nil];
  [alertView show];
  //    });
  
  NSLog(@"msg:%@",msg);
}

RCT_EXPORT_METHOD(showAlertAndCallback:(RCTResponseSenderBlock)callback){
  _alertCallback=callback;
  UIAlertView * alertView=[[UIAlertView alloc] initWithTitle:@"react-native" message:@"是否继续？" delegate:self cancelButtonTitle:@"关闭" otherButtonTitles:@"继续", nil];
  [alertView show];
}

//表示该模块下得所有方法均在指定线程下运行
- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

-(void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex{
  if (buttonIndex == 0) {
    _alertCallback(@[@"cancel"]);
  }else{
    _alertCallback(@[[NSNull null],@"call back from native"]);
  }
}

@end

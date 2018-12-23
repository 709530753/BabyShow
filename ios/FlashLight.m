//
//  FlashLight.m
//  BabyShow
//
//  Created by myxc on 2018/12/23.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "FlashLight.h"
#import <AVFoundation/AVFoundation.h>

@implementation FlashLight

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(switchState:(BOOL)flashLight) {

  NSLog(@"msg:%d", flashLight);
  [self switchFlashLight:flashLight];
}

- (void)switchFlashLight:(BOOL)isOpen {

  Class captureDeviceClass = NSClassFromString(@"AVCaptureDevice");
  
  if (captureDeviceClass != nil) {
    
    AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
    if ([device hasTorch]) { // 判断是否有闪光灯
      // 请求独占访问硬件设备
      [device lockForConfiguration:nil];
      if (isOpen) {
        [device setTorchMode:AVCaptureTorchModeOn];
      } else {
        [device setTorchMode:AVCaptureTorchModeOff];
      }
      // 请求解除独占访问硬件设备
      [device unlockForConfiguration];
    }
  }
}

@end

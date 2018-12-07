//
//  NextViewController.m
//  BabyShow
//
//  Created by myxc on 2018/11/29.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "NextViewController.h"

@interface NextViewController ()

@end

@implementation NextViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  self.view.backgroundColor = UIColor.redColor;
  
  UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
  [self.view addSubview:btn];
  btn.backgroundColor = UIColor.cyanColor;
  btn.frame = CGRectMake(100, 100, 100, 100);
}

@end


  #import "RNMirrarSdk.h"
  #import <LocalAuthentication/LocalAuthentication.h>

  @implementation RNMirrarSdk

  RCT_EXPORT_MODULE();

  RCT_EXPORT_METHOD(isAvailable:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
  {
      LAContext *context = [[LAContext alloc] init];
      if ([context canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:NULL]) {
          resolve(@(YES));
      } else {
          resolve(@(NO));
      }
  }

  @end
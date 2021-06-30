
package com.mirrar.reactnative;

import android.hardware.fingerprint.FingerprintManager;
import android.os.Build;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNMirrarSdkModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNMirrarSdkModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNMirrarSdk";
  }

  /**
   * PUBLIC REACT API
   *
   *  isAvailable()   Returns true if the fingerprint reader can be used
   */
  @ReactMethod
  public void isAvailable(final Promise promise) {
    try {
      FingerprintManager manager = getFingerprintManager();
      boolean v = (manager != null && manager.isHardwareDetected() && manager.hasEnrolledFingerprints());
      promise.resolve(v);
    } catch (Exception ex) {
      promise.reject("ERR_UNEXPECTED_EXCEPTION", ex);
    }
  }

  /**
   * Returns fingerprint manager or null
   * @see https://stackoverflow.com/questions/34409969/how-to-check-device-compatibility-for-finger-print-authentication-in-android
   */
  private FingerprintManager getFingerprintManager() {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
      return (FingerprintManager) reactContext.getSystemService(reactContext.FINGERPRINT_SERVICE);
    } else {
      return null;
    }
  }
}
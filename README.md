
# react-native-mirrar-sdk

## Getting started

`$ npm install react-native-mirrar-sdk --save`

### Mostly automatic installation

`$ react-native link react-native-mirrar-sdk`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-mirrar-sdk` and add `RNMirrarSdk.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNMirrarSdk.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.mirrar.reactnative.RNMirrarSdkPackage;` to the imports at the top of the file
  - Add `new RNMirrarSdkPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-mirrar-sdk'
  	project(':react-native-mirrar-sdk').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-mirrar-sdk/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-mirrar-sdk')
  	```


## Usage
```javascript
import RNMirrarSdk from 'react-native-mirrar-sdk';

// TODO: What to do with the module?
RNMirrarSdk;
```
  
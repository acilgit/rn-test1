package com.testnew;

import com.facebook.react.ReactActivity;
import com.microsoft.codepush.react.CodePush;
//import cn.reactnative.modules.update.UpdatePackage;
//import cn.reactnative.modules.update.UpdateContext;
import com.github.alinz.reactnativewebviewbridge.WebViewBridgePackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
//import com.burnweb.rnwebview.RNWebViewPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }


    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "TestNew";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
       // int a = ABC.abc
        return Arrays.<ReactPackage>asList(
            new WebViewBridgePackage(),
         //   new UpdatePackage(),
         //   new RNWebViewPackage(),
            new MainReactPackage(),
            new CodePush("EFiNOgzjfPpgcPbZSlao905ar_U64JO1vrspW", getApplicationContext(), BuildConfig.DEBUG)
        );
    }
}

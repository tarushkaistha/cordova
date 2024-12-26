package com.example.hello;

import android.app.Application;

import com.moengage.cordova.MoEInitializer;
import com.moengage.core.DataCenter;
import com.moengage.core.LogLevel;
import com.moengage.core.MoEngage;
import com.moengage.core.config.LogConfig;

public class MyCordApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        MoEngage.Builder moEngage = new MoEngage.Builder(this, "Z1UDNSWJALFR3UTPWWMCSF5Z", DataCenter.DATA_CENTER_1)
                .configureLogs(new LogConfig(LogLevel.VERBOSE, true));
        MoEInitializer.initialiseDefaultInstance(this, moEngage);
    }
}

/**
 * CDVStetho.java
 *
 * Copyright (C) 2015 Carlos Antonio
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 */

package com.bridge;

import android.app.Application;
import com.facebook.stetho.Stetho;

/**
 * This class starts Stetho for Cordova
 */
public class CDVStetho extends Application
{
    @Override
    public void onCreate()
    {
        super.onCreate();

        Stetho.initialize(
          Stetho.newInitializerBuilder(this)
            .enableDumpapp(Stetho.defaultDumperPluginsProvider(this))
            .enableWebKitInspector(Stetho.defaultInspectorModulesProvider(this))
            .build());
    }
}

package com.guilhermeguini.sunshine;

import android.os.Bundle;
import android.preference.PreferenceFragment;

/**
 * Created by Guilherme on 28/09/2016.
 */
public class SettingsPreference extends PreferenceFragment {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        addPreferencesFromResource(R.xml.preferences);
    }
}

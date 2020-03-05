package com.maven.assignment.utilis;


import org.apache.log4j.Logger;

public class LogsClass {

    //Initialize Log4j instance
    private static Logger Log = Logger.getLogger(org.apache.commons.logging.Log.class.getName());

    //We can use it when starting tests
    public static void startLog(String testClassName) {
        Log.info("Test is Starting...");
    }

    //We can use it when ending tests
    public static void endLog(String testClassName) {
        Log.info("Test is Ending...");
    }
}
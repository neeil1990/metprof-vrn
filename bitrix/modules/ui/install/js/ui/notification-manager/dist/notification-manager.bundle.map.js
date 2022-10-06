{"version":3,"sources":["notification-manager.bundle.js"],"names":["this","BX","UI","exports","pull_client","main_core_events","main_core","ui_notification","ui_buttons","Uuid","static","replace","c","r","Math","random","v","toString","Notification","constructor","options","setUid","id","setCategory","category","setTitle","title","setText","text","setIcon","icon","setInputPlaceholderText","inputPlaceholderText","createButtons","button1Text","button2Text","SEPARATOR","getV4","uid","split","pop","join","Type","isStringFilled","Error","encodeIdToUid","getUid","getId","decodeUidToId","getCategory","getTitle","getText","getIcon","isString","getInputPlaceholderText","setButton1Text","Loc","getMessage","setButton2Text","getButton1Text","getButton2Text","PushNotification","PullHandler","getModuleId","handleNotify","params","extra","command","notification","notificationOptions","pushNotification","notifier","sendNotification","DesktopHelper","isBitrixDesktop","geApiVersion","navigator","userAgent","toLowerCase","includes","BXDesktopSystem","Number","GetProperty","desktop","apiReady","isMac","isLinux","BXIM","desktopStatus","Promise","resolve","turnedOnCallback","turnedOffCallback","desktopUtils","runningCheck","BrowserHelper","isChrome","isFirefox","isSafari","window","permission","isSafariBased","NotificationEvent","BaseEvent","CLICK","ACTION","CLOSE","eventType","getTypes","NotificationAction","BUTTON_1","BUTTON_2","USER_INPUT","action","NotificationCloseReason","CLOSED_BY_USER","EXPIRED","closeReason","BaseProvider","EventEmitter","super","eventNamespace","setEventNamespace","convertNotificationToNative","nativeNotification","canSendNotification","notify","notificationClick","eventOptions","data","emit","notificationAction","userInput","isSupported","console","warn","notificationClose","reason","NOTIFICATION_LIFETIME","DesktopProvider","getEventNamespace","registerEvents","isMainTab","notificationUid","NotificationShow","addEventListener","event","onNotificationClick","onNotificationAction","onNotificationClose","detail","MacProvider","NotificationCreate","NotificationAddText","addTextToNotification","NotificationAddImage","NotificationAddInput","NotificationAddAction","NotificationSetExpiration","trim","languageSafeRowLength","length","space","firstRow","words","shift","secondRow","WindowsProvider","BrowserProvider","body","tag","renotify","onclick","preventDefault","focus","isRunningOnAnyDevice","checkRunningOnThisDevice","then","isRunningOnThisDevice","BrowserNotificationAction","Action","balloon","setButtonClass","buttonType","getContainer","container","buttonOptions","isFunction","events","click","button","stopPropagation","Button","removeClass","addClass","BASE_BUTTON_CLASS","getButtonClass","TYPE_ACCEPT","getButtonTypes","buttonClass","isSupportedButtonType","_","t","_t","_t2","_t3","_t4","_t5","_t6","_t7","_t8","BrowserNotification","Balloon","userInputContainerNode","userInputNode","setActions","actions","isArray","forEach","push","onMouseEnter","handleMouseEnter","onMouseLeave","handleMouseLeave","Tag","render","animationClassName","contentWidth","isNumber","getWidth","handleContentClick","bind","getIconNode","getTitleNode","getTextNode","getUserInputContainerNode","getActionsNode","getCloseButtonNode","getData","getActions","map","isArrayFilled","onInputReplyClick","toggleUserInputContainerNode","handleUserInputEnter","handleUserInputClick","document","getElementById","replyToggleButton","showUserInput","setAutoHide","deactivateAutoHide","style","display","classList","add","disabled","activateAutoHide","remove","isCloseButtonVisible","handleCloseBtnClick","closedByUserHandler","clickHandler","close","userInputHandler","target","value","keyCode","KEY_CODE","ENTER","ESC","BrowserPageProvider","balloonOptions","type","width","position","autoHideDelay","showButton1","showButton2","action1Options","action2Options","Center","Notifier","provider","createProvider","PULL","subscribe","providerOptions","EVENT_NAMESPACE","isSupportedDesktopApp","isWindows","isSupportedBrowser","isNativeNotificationAllowed","eventName","handler","notifyViaDesktopProvider","NotificationManager","Event"],"mappings":"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","file":"notification-manager.bundle.map.js"}
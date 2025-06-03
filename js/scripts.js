window.speedTest = [];
        window.speedTest.oldPush = window.speedTest.push;
        window.speedTest.push = function (_val_) {
            if (typeof _val_ === "object" && this.length > 0) {
                var prev = this[this.length - 1].time;
                _val_.delta = _val_.time - prev;
            } else _val_.delta = 0;

            _val_.index = this.length;
            _val_.uTimeStamp = _val_.time;
            this.oldPush(_val_);

            if (typeof window.newrelic !== "undefined") {
                newrelic.addPageAction("speedMeasure", _val_);
            }

            try {
                // todo: remove this code, and replace this with a URL param
                (document.location.host === "iis-1.playbuzz.com" ||
                    document.location.host === "iis-4.playbuzz.com") && console.log(JSON.stringify(_val_));
            } catch (e) {
                console.log('speed-exception', (e));
            }

        }
        window.speedTest.push({ key: "loadStart", time: new Date().getTime() });
        window.performanceAnalytics = {};


window.speedTest.push({ key: "bodyStart", time: new Date().getTime() });

var useFf = 'true';

window.pb = window.pb || {};
window.pb.isFeed = 'True';

var sharebarConfig =   {"rulesSetName":"default","formatByDeviceRules":{"default":{"default":{"buttons":["facebook","twitter","pinterest","email","tumblr","reddit","google","vk"],"numberOfMainButtons":4}},"mobile":{"default":{"buttons":["facebook","pinterest","whatsapp","sms","twitter","email","tumblr","reddit","google","vk"],"numberOfMainButtons":4}},"desktop":{"default":{"buttons":["facebook","twitter","pinterest","email","tumblr","reddit","google","vk"],"numberOfMainButtons":4},"Convo":{"buttons":["facebook","twitter","pinterest","email","tumblr","reddit","google","vk"],"numberOfMainButtons":2},"VideoSnaps":{"buttons":["facebook","twitter","pinterest","email","tumblr","reddit","google","vk"],"numberOfMainButtons":2},"Swiper":{"buttons":["facebook","twitter","pinterest","email","tumblr","reddit","google","vk"],"numberOfMainButtons":2},"PlayBuzzPoll":{"buttons":["facebook","twitter","pinterest","email","tumblr","reddit","google","vk"],"numberOfMainButtons":3}}},"itemLocaleToFirstButtonsMap":{"en-US":["facebook","pinterest","sms","twitter"],"ru-RU":["facebook","vk","twitter","whatsapp"],"ja-JP":["facebook","twitter","sms","pinterest"]},"trafficSourceToFirstButtonsMap":{"facebook":["facebook"],"whatsapp":["whatsapp"],"twitter":["twitter"],"sms":["sms"],"google":["google"],"pinterest":["pinterest"]}};
        window.sharebarLoadingInfo = {
            sharebarVersion: 'v2',
            twitterViaText: 'play_buzz',
            scripts: {
                sharebarWithAngularJs: '',
                sharebarNonAngularJs: '',
                sharebarCss: '',
            },
            sharebarConfig: sharebarConfig
};

(function () {
            var href = document.location.href;
            var divIdParam = href.match(/divId=[0-9A-Za-z]*/);
            var divId = divIdParam !== null ? divIdParam[0].split("=")[1] : "div0";
            window.parent.postMessage(JSON.stringify({ "name": "docReady", "id": divId }), "*");
        })();


(function () {
                        var href = document.location.href;
                        var divIdParam = href.match(/divId=[0-9A-Za-z]*/);
                        var divId = divIdParam !== null ? divIdParam[0].split("=")[1] : "div0";

                        var mInterval = setInterval(function () {
                            if (typeof window.PlayBuzz === 'object') return clearInterval(mInterval);
                            window.parent.postMessage(JSON.stringify({ "resize_height": Math.max(document.body.getBoundingClientRect().height, window.innerHeight), "id": divId }), "*");
                        }, 300);

                        // send once immediately
                        window.parent.postMessage(JSON.stringify({ "resize_height": Math.max(document.body.getBoundingClientRect().height, window.innerHeight), "id": divId }), "*");
                    })();

    var statsWidgetScriptUrl = '';
    var statsWidgetStyleUrl = '';
    window.addEventListener('load',function (){
        window.ImpactWidgetLoader(statsWidgetScriptUrl, statsWidgetStyleUrl, window.UserData, true)
    }, false);


    window.pb = window.pb || {};
    window.pb.isFeed = 'True';

// time helpers
    // validate timestamp - return time if valid otherwise return null
    function validateTimestamp(time) {
        return (time !== undefined && time !== null && time >= 0 && time <= 1000 * 100) ? time : null; // 100sec
    }
    
    // prepare some promises
    var embedPerformanceReday = $.Deferred();
    var itemPerformanceReady = $.Deferred();

    // wait for all times data before sending preformance event
    $.when(embedPerformanceReday, itemPerformanceReady).done(function(embedPerformance, itemPerformance) { 

        if (!itemPerformance) return;

        var embedStartTime,
            embedSetupTime,
            embedInjectionTime,
            embedViewableTime,
            articleViewableTime,
            articleLoadTime;

        // calculate for embed
        if (embedPerformance && embedPerformance.embedDomLoadingTime) {
            embedStartTime = embedPerformance.embedStartTime - embedPerformance.embedDomLoadingTime;
            embedInjectionTime = embedPerformance.embedInjectionTime - embedPerformance.embedDomLoadingTime;
            embedSetupTime = itemPerformance.connectTime - embedPerformance.embedDomLoadingTime;
            embedViewableTime = embedPerformance.articleViewableTime - embedPerformance.embedDomLoadingTime;
            articleViewableTime = itemPerformance.viewableTime - embedPerformance.embedDomLoadingTime;
            articleLoadTime = itemPerformance.loadTime - embedPerformance.embedDomLoadingTime;
        }
        // calculate for pb.com
        else {
            embedStartTime = null;
            embedSetupTime = null;
            embedViewableTime = null;
            embedInjectionTime = null;
            articleViewableTime = itemPerformance.viewableTime - itemPerformance.connectTime;
            articleLoadTime = itemPerformance.loadTime - itemPerformance.connectTime;
        }
        
        // validate timestamp, incase timestamp is not valid set it to null
        embedStartTime = validateTimestamp(embedStartTime);
        embedSetupTime = validateTimestamp(embedSetupTime);
        embedInjectionTime = validateTimestamp(embedInjectionTime);
        embedViewableTime = validateTimestamp(embedViewableTime);
        articleViewableTime = validateTimestamp(articleViewableTime);
        articleLoadTime = validateTimestamp(articleLoadTime);

        // for debug
        //console.log("Performance: item: " + (gameData.gameName || "undefind"));
        //console.log("Performance: embedStartTime - " + embedStartTime);
        //console.log("Performance: embedInjectionTime - " + embedInjectionTime);
        //console.log("Performance: embedSetupTime - " + embedSetupTime);
        //console.log("Performance: articleViewableTime - " + articleViewableTime);
        //console.log("Performance: embedViewableTime - " + embedViewableTime);
        //console.log("Performance: articleLoadTime - " + articleLoadTime);

        // send event        
        if (AwsBridge && AwsBridge.performanceAnalytics)
            AwsBridge.performanceAnalytics(embedStartTime, embedSetupTime, articleViewableTime, embedViewableTime, articleLoadTime, embedInjectionTime);
    });

    // called from parent frmae to set embed performance analytics
    $(document).on('embedAnalytics', function (event, eventData) {
        try {
            if (eventData) { embedPerformanceReday.resolve(eventData); }
        } catch (e) { console.log('failed to set performace analytics from embed', e) }
    });

    window.addEventListener('message', function (event) {
       
        if (event.data && typeof event.data === 'string' && event.data.indexOf('analytics') !== -1) {
            var parsedEvent = JSON.parse(event.data);
            $(document).trigger('embedAnalytics', parsedEvent.eventData);
        }
    })
    
    // on page ready calculate articleLoadTime
    $(document).ready(function () {
        try {
            if (window.performance && window.performance.timing && window.performance.timing.connectStart) {
                
                itemPerformanceReady.resolve({
                    viewableTime: performanceAnalytics && performanceAnalytics.viewableTime,
                    connectTime: window.performance.timing.connectStart,
                    loadTime: (new Date()).getTime()
                });
            } else { articleLoadTime.reject(); }
        } catch (e) { console.log("failed to measure load perforamce for item", e); }
        
    });

    // if not in feed
    if (document.location.toString().toLowerCase().search("feed=true") == -1) {
        $(document).trigger('embedAnalytics', {});
    }

(window.createPBCookie = function () {
        var steps = [];
        var isFeed, cookie, cookieVersion, isMobileApp, mobileUserId;

        var canSaveCookie = (function () {
            $.cookie("testSaveCookie", {});
            var ok = $.cookie("testSaveCookie") !== null;
            $.removeCookie("testSaveCookie");
            return ok;
        })();

        function createGUID() { steps.push("2.1.1"); var e = []; var t = "0123456789abcdef"; for (var n = 0; n < 36; n++) { e[n] = t.substr(Math.floor(Math.random() * 16), 1) } e[14] = "4"; e[19] = t.substr(e[19] & 3 | 8, 1); e[8] = e[13] = e[18] = e[23] = "-"; var r = e.join(""); steps.push("2.1.2"); return r }
        function getURLParam(_e) {
            var e = _e; if (e) e = e.toLowerCase(); var t = document.location.toString(); var n = t.split("?"); if (n.length <= 1) return null; var r = n[0]; var i = t.substr(r.length + 1); if (i.search("#") >= 0) { i = i.split("#")[0] } var s = {}; if (i) {
                var o = i.split("&"); try { for (var u = 0; u < o.length; u++) { var a = o[u].split("="); if (a.length > 1) { var f = a[0]; var l = a[1].toLowerCase(); if (e == f.toLowerCase()) return l; s[f] = l } } } catch (c) {
                    console.log('speed-exception', (c));
                }
            } else return null; return e == undefined ? s : null
        }

        function saveCookie(cookieObject) {
            if (canSaveCookie) {
                $.cookie("playbuzz", cookieObject, { expires: 365 });
                return;
            }

            try {
                localStorage.setItem("cookieCopy", JSON.stringify(cookieObject));
            } catch (e) {
                console.log('speed-exception', (e));
            }
        }

        function getCookie() {
            var pbCookie = $.cookie("playbuzz");
            if (pbCookie) return pbCookie;

            try {
                return JSON.parse(localStorage.getItem("cookieCopy"));
            } catch (e) {
                console.log('speed-exception', (e));
                return null
            }
        }

        try {
            isFeed = document.location.toString().toLowerCase().search("feed=true") >= 0;
            isMobileApp = document.location.toString().toLowerCase().search("frommobileapp=true");

            cookie = getCookie();
            cookieVersion = 3.0;
            steps.push(0);


            mobileUserId = getURLParam("deviceId");

            steps.push(1);

            var uid = cookie ? cookie.userId : createGUID();
            var sid = cookie ? cookie.session : createGUID();
            var nick = cookie ? cookie.nickname : "Anonymous_user";
            var origin = cookie ? cookie.origin : "Anonymous";
            var hasAccount = cookie ? cookie.hasAccounts == "true" : "false";

            // remove empty values which existed in previous versions
            if (uid == "") uid = createGUID();
            if (sid == "") sid = createGUID();
            if (nick == "") nick = "Anonymous_user";

            if (cookie && (!cookie.version || cookie.version < cookieVersion)) {
                steps.push(0.1);
                //$.removeCookie("playbuzz");   needed for previous versions, no need to remove cookie now, just update some fields
                cookie.userId = uid;
                cookie.session = sid;
                cookie.nickname = nick;
                cookie.origin = origin;
                cookie.hasAccounts = hasAccounts;
                cookie.version = cookieVersion;
                saveCookie(cookie);

                //cookie = null;
                steps.push(0.2);
            }

            steps.push(2);

            if (isMobileApp && mobileUserId) {
                nick = "iOS_app_user";
                origin = "iOS_app";
            } else {
                if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(uid) == false) {
                    steps.push(2.1);
                    $.removeCookie("playbuzz");
                    $.removeCookie("pb_subs");
                    uid = createGUID();
                    steps.push(2.2);
                }
            }

            steps.push(3);

            if (getURLParam("nativeId")) {
                uid = getURLParam("nativeId");
            }

            if (!cookie) {
                steps.push(3.1);
                saveCookie({
                    created: (new Date()).getTime(),
                    nickname: nick,
                    origin: origin || "Anonymous",
                    session: sid,
                    userId: uid,
                    hasAccount: hasAccount,
                    version: cookieVersion
                }, { expires: 365 });

                steps.push(3.2);
            }

            var etlUserId = mobileUserId || uid;

            window.cooladataUserId = etlUserId;

            window.etlProperties = window.etlProperties || {};
            window.etlProperties.userId = etlUserId;



            steps.push(4);
            try {
                if (!window._cdtracker) {
                    steps.push(4.1);
                    steps.push(4.2);
                    $(document).ready(function () {
                    });

                }
            } catch (err) {
                console.log('speed-exception', (err));

                console.error("Couldn't set up cooladata:", err);
                Analytics.sendAnalyticsError("SDK load desktop", { line: "layout_169", error: err, steps: steps });
            }
        } catch (e) {
            try {
                console.error("Couldn't generate cookie: ", e);
                Analytics.sendAnalyticsError("SDK load desktop", { line: "layout_173", error: e, steps: steps });
            } catch (e) {
                console.log('speed-exception', (e));
            }
            cookie = {};

            cookie.userId = createGUID();
            cookie.session = createGUID();
            cookie.nickname = "Anonymous_user";
            cookie.origin = origin || "Anonymous";
            cookie.hasAccount = "false";
            cookie.version = cookieVersion;
            cookie.created = (new Date()).getTime();

            saveCookie(cookie);
        }

        steps.push(5);
        if (!uid) {

            steps.push(5.1);
            Analytics.sendAnalyticsError("SDK load desktop", {
                line: "layout_176",
                error: "uid wasn't generated",
                steps: steps,
                jQuery: window.jQuery != undefined,
                hasCookieAPI: window.jQuery != undefined && $.cookie != undefined,
                cookie: cookie,
                isFeed: isFeed
            });
        }
    })();


function getParameterByName(name, url) {
        if (!url) url = window.location.search;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var showPoweredBy = getParameterByName('showPoweredBy');

    var parser = document.createElement('a');
    parser.href = document.referrer;

    var isPbRef = parser.hostname.indexOf('.playbuzz.com') !== -1;

    if(showPoweredBy === 'false' && isPbRef) {
        $('.pb-powered-by').css('display', 'none');
    }




try {
        // Random by Weights
        var randomWeights = function (keyWeightObject) {

            var items = Object.keys(keyWeightObject);
            var weights = [];
            for (var k in keyWeightObject) {
                if (keyWeightObject.hasOwnProperty(k)) {
                    weights.push(keyWeightObject[k]);
                }
            }

            var total = 0;
            var ranges = weights.slice(0);
            for (var i = 0, len = weights.length; i < len; i++) {
                ranges[i] = [total, total += ranges[i]];
            }
            var randomNumber = parseInt(Math.random() * total);
            for (; randomNumber < ranges[--i][0];);
            return items[i];
        };

        // Targeting
        var adTargeting = [];

        var targetingString = "";

        var targetCollection = JSON.parse("{\"ABTEST\":{\"stickinessType\":\"user\",\"values\":{\"A\":1,\"B\":1,\"C\":1,\"D\":1,\"E\":6}},\"in_banner\":{\"stickinessType\":\"user\",\"values\":{\"Yes\":50,\"No\":50}}}");
        // get user cookie
        var userCookieObject = $.cookie("DFPTargetingByUser") || {};
        // get session cookie
        var sessionCookieObject = $.cookie("DFPTargetingBySession") || {};

        var updateSessionCookie = false;

        var updateUserCookie = false;

        // targeting and cookie updating
        for (var ABTestName in targetCollection) {
            if (targetCollection.hasOwnProperty(ABTestName)) {

                var targetValue = {};

                switch (targetCollection[ABTestName].stickinessType) {

                    case "none":
                        // no stickiness so: generate random value and set to targeting
                        targetValue[ABTestName] = randomWeights(targetCollection[ABTestName].values);
                        break;

                    case "session":
                        if (ABTestName in sessionCookieObject) {
                            targetValue[ABTestName] = sessionCookieObject[ABTestName];
                        } else {
                            // no cookie so: generate random value and set to targeting
                            targetValue[ABTestName] = randomWeights(targetCollection[ABTestName].values);
                            // set targeting to the session cookie object
                            sessionCookieObject[ABTestName] = targetValue[ABTestName];
                            updateSessionCookie = true;
                        }
                        break;

                    case "user":
                    default:
                        if (ABTestName in userCookieObject) {
                            targetValue[ABTestName] = userCookieObject[ABTestName];
                        } else {
                            // no cookie so: generate random value and set to targeting
                            targetValue[ABTestName] = randomWeights(targetCollection[ABTestName].values);
                            // set targeting to the user cookie object
                            userCookieObject[ABTestName] = targetValue[ABTestName];
                            updateUserCookie = true;
                        }
                }

                targetingString = targetingString + ABTestName + "-" + targetValue[ABTestName] + ";";
                window.adTargeting.push({ "target": ABTestName, "value": targetValue[ABTestName] });
            }
        }
        // update the user cookie
        if (updateUserCookie) {
            $.cookie("DFPTargetingByUser", userCookieObject, { expires: 365 });
        }
        // update the session cookie
        if (updateSessionCookie) {
            $.cookie("DFPTargetingBySession", sessionCookieObject);
        }
        /// export
        window.adTargeting = adTargeting;
        window.adTargetingString = targetingString;

    } catch (e) {
    console.log('speed-exception', (e));
 /* ignore */ }    

    window.PlayBuzz = window.PlayBuzz || {};

    (function () {
        try {
            PlayBuzz.embedProperties = {
                articleEmbedMargin: (isNaN("0") ? 0 : 0),
                articleEmbedUserId: Tools.getURLParam("embedBy"),
                articleShowRecommendations: "False".toLowerCase() === "true",
                articleShowShareBar: "False".toLowerCase() === "true",
                articleShowComments: "False".toLowerCase() === "true",
                articleShowInfo: "True".toLowerCase() === "true",
            };
        } catch (e) {
    console.log('speed-exception', (e));
}
    })();

    window.isSubscriptionVisible = "true";
    window.isSubscriptionUIVisible = "true";
    window.isSubscriptionAPIDisabled = "false";

try {
        window.displaySettings = {
                useFacebookUrlShare:         "false",
                showComments:                "false",
                marginTop:                   "0",
                showGameDetails:             "true",
                showRecommendations:         "false",
                showShares:                  "false"
            };
        } catch (e) {
    console.log('speed-exception', (e));
}

   var _veroq = _veroq || [];

    var getVeroInitProps = {
        api_key: 'a41e0b1fb3be63fdff10bd22e8c5667fa1988639'
    }

    if (document.location.host.toLowerCase().indexOf('') < 0) {
        //getVeroInitProps.development_mode = true;
    }

    _veroq.push(['init', getVeroInitProps]);
    
    (function () {
        var ve = document.createElement('script');
        ve.type = 'text/javascript';
        ve.async = true;
        ve.src = '//d3qxef4rp70elm.cloudfront.net/m.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ve, s);
    })();


  (function () {
            var TS = window.performance && window.performance.timing && window.performance.timing.connectStart || new Date().getTime();
            AwsBridge.pageLoadTracker("connectStart", TS);
            AwsBridge.pageLoadTracker("domStart");
        })();

var enableAds = true;    

    $(document).on('pbads.dfp.ready',function() {

        // initiating dfp
        try {
            var dfpUnitsConfig= "{\"path\":\"network_game_play_testyourself\",\"config\":{\"ad-tags-placeholder\":{\"adunit\":\"1x1_pixel_Network\",\"dimensions\":\"1x1\"}}}";
            pbads.dfp.init('94166617', dfpTargeting, dfpUnitsConfig);

        } catch (e) {
            // log to console --> we need alert if we get this error
            console.error("FATAL: failed to load dfp module", e);
        }

        // fetch dfp ads
        try {

            if (enableAds) {
                    
                // fetch units
                pbads.dfp.fetch();          
                if (!IsPBFeed) {
                    pbads.dfp.loadBrealtime(brealtimeConfig);
                }

                // refresh on game progress for each event configured in adRefreshRate 
                if (window.gameData && (window.gameData.patternId === "TestYourself" ||
                    window.gameData.patternId === "multipleChoice" || 
                    window.gameData.patternId ==="Swiper" || 
                    window.gameData.patternId ==="Reveal")) {

                    if (typeof pbads.configuration !== 'undefined' &&
                        typeof pbads.configuration.config !== 'undefined' &&
                        typeof pbads.configuration.config.adRefreshRate!== 'undefined') {

                        var adRefreshRate = pbads.configuration.config.adRefreshRate;

                       
                        for (var eventNum = 0; eventNum< adRefreshRate.length; eventNum++) {

                            adRefreshRate[eventNum].eventSent = false;

                            var ratePercent =   adRefreshRate[eventNum].RatePercent;
                            var rateName = pbads.utils.converters.stringifyNumber(ratePercent);
                            var eventName = "Game.Progress." + ratePercent;

                            //Attach Game.Progress event (that will refhresh dfp ads) for each Refresh Rate interval
                            $(document).on(eventName,null,{RateName:rateName},function(event) { 
                                try { 
                                    //change the query string after refresh (google requirements)
                                    window.location.hash =event.data.RateName; 
                                    pbads.dfp.refresh();
                                } catch (e) { 
                                    console.warn("failed to fetch dfp adunits", e); 
                                }
                            });

                        }

                    }


                }
            }// else {   //TODO: better handling for hiding empty ads             
                //$(".adunit-wrapper").hide();                
            //}

        } catch (e) {
            // log to console --> we need alert if we get this error
            console.error("FATAL: failed to fetch dfp adunits", e);
        }
    });

if(jQuery('.game_details').length == 1)
    {        
        var dynx_itemid= jQuery('body[data-gameid]').attr('data-gameid');
        var dynx_pagetype= 'offerdetail';
        var dynx_totalvalue= 0;

        var google_tag_params = {
            dynx_itemid: dynx_itemid,
            dynx_pagetype: dynx_pagetype,
            dynx_totalvalue: parseFloat(dynx_totalvalue)
        };
        jQuery('.play_game_button').click(function(){
            var dynx_pagetype= 'conversionintent';
            var google_tag_params = {
                dynx_pagetype: dynx_pagetype
            };
            try {
                ga('set', 'dimension8','conversionintent');
            } catch (e) {}
            try {

            } catch (e) {}
            ga('send', 'event', 'page', 'visit', 'conversionintent', {
                'nonInteraction': 1
            });
        });
    }else
    if(window.location.href.indexOf('/search?query')!=-1)/* for searchresults page */
    {
        var dynx_pagetype= 'searchresults';
        var google_tag_params = {
            dynx_pagetype: dynx_pagetype
        };
    }
    else if(window.location.pathname == "/" )/* for home page */
    {
        var dynx_pagetype= 'home';
        var google_tag_params = {
            dynx_pagetype: dynx_pagetype
        };
    }else

    {
        var dynx_pagetype= 'other'; /* for other page */
        var google_tag_params = {
            dynx_pagetype: dynx_pagetype
        };
    }
    try {
        ga('set', 'dimension7', window.google_tag_params.dynx_itemid.toString());
    } catch (e) {}
    try {
        ga('set', 'dimension8', window.google_tag_params.dynx_pagetype.toString());
    } catch (e) {}
    try {

    } catch (e) {}
    ga('send', 'event', 'page', 'visit', window.google_tag_params.dynx_pagetype.toString(), {
        'nonInteraction': 1
    });





var tabs = require('sdk/tabs');

var stopProgression = false;
var lastActiveTab = null;
var tmpTab = null;

function append(aTab){
  stopProgression = true;
  tabs.open('about:blank');
  aTab.index = tmpTab.index;

}

tabs.on('open', function onOpen(tab){
    if(lastActiveTab != null){
      if(lastActiveTab.isPinned){
        if(stopProgression){
          tmpTab = tab;
          stopProgression = false;
          return;
        }
        append(tab);
        tmpTab.close();
        tmpTab = null;

      }
    }
},false);

tabs.on('activate', function onActive(tab){
    lastActiveTab = tab;
    });

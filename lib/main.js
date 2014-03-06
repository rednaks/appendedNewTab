
var tabs = require('sdk/tabs');

var stopProgression = false;
var lastActiveTab = null;

function append(aTab){
  stopProgression = true;
  var tmp = tabs.open('about:blank');
  var index = aTab.index;
  aTab.index = tmp.index;

}

tabs.on('open', function onOpen(tab){
    if(lastActiveTab != null){
      if(lastActiveTab.isPinned){
        if(stopProgression){
          tab.close();
          stopProgression = false;
          return;
        }
        append(tab);
      }
    }
},false);

tabs.on('activate', function onActive(tab){
    lastActiveTab = tab;
    });

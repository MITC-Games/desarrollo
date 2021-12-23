gdjs.DisconnectedCode = {};
gdjs.DisconnectedCode.GDdisconnectedObjects1= [];
gdjs.DisconnectedCode.GDdisconnectedObjects2= [];
gdjs.DisconnectedCode.GDpressAnyKeyObjects1= [];
gdjs.DisconnectedCode.GDpressAnyKeyObjects2= [];

gdjs.DisconnectedCode.conditionTrue_0 = {val:false};
gdjs.DisconnectedCode.condition0IsTrue_0 = {val:false};
gdjs.DisconnectedCode.condition1IsTrue_0 = {val:false};


gdjs.DisconnectedCode.eventsList0 = function(runtimeScene) {

{


gdjs.DisconnectedCode.condition0IsTrue_0.val = false;
{
gdjs.DisconnectedCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.DisconnectedCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Connect", true);
}}

}


};

gdjs.DisconnectedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DisconnectedCode.GDdisconnectedObjects1.length = 0;
gdjs.DisconnectedCode.GDdisconnectedObjects2.length = 0;
gdjs.DisconnectedCode.GDpressAnyKeyObjects1.length = 0;
gdjs.DisconnectedCode.GDpressAnyKeyObjects2.length = 0;

gdjs.DisconnectedCode.eventsList0(runtimeScene);
return;

}

gdjs['DisconnectedCode'] = gdjs.DisconnectedCode;

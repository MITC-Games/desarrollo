gdjs.MenuCode = {};
gdjs.MenuCode.GDHitboxObjects1_1final = [];

gdjs.MenuCode.GDConnectedObjects1= [];
gdjs.MenuCode.GDConnectedObjects2= [];
gdjs.MenuCode.GDChooseGameObjects1= [];
gdjs.MenuCode.GDChooseGameObjects2= [];
gdjs.MenuCode.GDiconObjects1= [];
gdjs.MenuCode.GDiconObjects2= [];
gdjs.MenuCode.GDchatObjects1= [];
gdjs.MenuCode.GDchatObjects2= [];
gdjs.MenuCode.GDsyncbtnObjects1= [];
gdjs.MenuCode.GDsyncbtnObjects2= [];
gdjs.MenuCode.GDHitboxObjects1= [];
gdjs.MenuCode.GDHitboxObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};
gdjs.MenuCode.conditionTrue_2 = {val:false};
gdjs.MenuCode.condition0IsTrue_2 = {val:false};
gdjs.MenuCode.condition1IsTrue_2 = {val:false};
gdjs.MenuCode.condition2IsTrue_2 = {val:false};
gdjs.MenuCode.condition3IsTrue_2 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHitboxObjects2Objects = Hashtable.newFrom({"Hitbox": gdjs.MenuCode.GDHitboxObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHitboxObjects2Objects = Hashtable.newFrom({"Hitbox": gdjs.MenuCode.GDHitboxObjects2});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.MenuCode.GDHitboxObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDHitboxObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.MenuCode.GDHitboxObjects2);
{gdjs.MenuCode.conditionTrue_2 = gdjs.MenuCode.condition1IsTrue_1;
gdjs.MenuCode.condition0IsTrue_2.val = false;
gdjs.MenuCode.condition1IsTrue_2.val = false;
gdjs.MenuCode.condition2IsTrue_2.val = false;
{
gdjs.MenuCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_2.val ) {
{
gdjs.MenuCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHitboxObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition1IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDHitboxObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitboxObjects2[i].getVariableNumber(gdjs.MenuCode.GDHitboxObjects2[i].getVariables().get("game")) == 0 ) {
        gdjs.MenuCode.condition2IsTrue_2.val = true;
        gdjs.MenuCode.GDHitboxObjects2[k] = gdjs.MenuCode.GDHitboxObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitboxObjects2.length = k;}}
}
gdjs.MenuCode.conditionTrue_2.val = true && gdjs.MenuCode.condition0IsTrue_2.val && gdjs.MenuCode.condition1IsTrue_2.val && gdjs.MenuCode.condition2IsTrue_2.val;
}
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDHitboxObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDHitboxObjects1_1final.indexOf(gdjs.MenuCode.GDHitboxObjects2[j]) === -1 )
            gdjs.MenuCode.GDHitboxObjects1_1final.push(gdjs.MenuCode.GDHitboxObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDHitboxObjects1_1final, gdjs.MenuCode.GDHitboxObjects1);
}
}
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9304436);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("Chat", "");
}}

}


{

gdjs.MenuCode.GDHitboxObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDHitboxObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Hitbox"), gdjs.MenuCode.GDHitboxObjects2);
{gdjs.MenuCode.conditionTrue_2 = gdjs.MenuCode.condition1IsTrue_1;
gdjs.MenuCode.condition0IsTrue_2.val = false;
gdjs.MenuCode.condition1IsTrue_2.val = false;
gdjs.MenuCode.condition2IsTrue_2.val = false;
{
gdjs.MenuCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_2.val ) {
{
gdjs.MenuCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHitboxObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition1IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDHitboxObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitboxObjects2[i].getVariableNumber(gdjs.MenuCode.GDHitboxObjects2[i].getVariables().get("game")) == 1 ) {
        gdjs.MenuCode.condition2IsTrue_2.val = true;
        gdjs.MenuCode.GDHitboxObjects2[k] = gdjs.MenuCode.GDHitboxObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitboxObjects2.length = k;}}
}
gdjs.MenuCode.conditionTrue_2.val = true && gdjs.MenuCode.condition0IsTrue_2.val && gdjs.MenuCode.condition1IsTrue_2.val && gdjs.MenuCode.condition2IsTrue_2.val;
}
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDHitboxObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDHitboxObjects1_1final.indexOf(gdjs.MenuCode.GDHitboxObjects2[j]) === -1 )
            gdjs.MenuCode.GDHitboxObjects1_1final.push(gdjs.MenuCode.GDHitboxObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDHitboxObjects1_1final, gdjs.MenuCode.GDHitboxObjects1);
}
}
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9306732);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("SyncBtns", "");
}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("Chat", true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("Chat", "");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chat", true);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("SyncBtns", true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("SyncBtns", "");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SynchronisedCheckBox", true);
}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.p2p.onError();
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.p2p.onDisconnect();
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Disconnected", true);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDConnectedObjects1.length = 0;
gdjs.MenuCode.GDConnectedObjects2.length = 0;
gdjs.MenuCode.GDChooseGameObjects1.length = 0;
gdjs.MenuCode.GDChooseGameObjects2.length = 0;
gdjs.MenuCode.GDiconObjects1.length = 0;
gdjs.MenuCode.GDiconObjects2.length = 0;
gdjs.MenuCode.GDchatObjects1.length = 0;
gdjs.MenuCode.GDchatObjects2.length = 0;
gdjs.MenuCode.GDsyncbtnObjects1.length = 0;
gdjs.MenuCode.GDsyncbtnObjects2.length = 0;
gdjs.MenuCode.GDHitboxObjects1.length = 0;
gdjs.MenuCode.GDHitboxObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;

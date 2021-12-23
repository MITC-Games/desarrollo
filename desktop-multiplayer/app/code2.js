gdjs.SynchronisedCheckBoxCode = {};
gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1= [];
gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2= [];
gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects3= [];

gdjs.SynchronisedCheckBoxCode.conditionTrue_0 = {val:false};
gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0 = {val:false};
gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0 = {val:false};
gdjs.SynchronisedCheckBoxCode.condition2IsTrue_0 = {val:false};
gdjs.SynchronisedCheckBoxCode.condition3IsTrue_0 = {val:false};
gdjs.SynchronisedCheckBoxCode.conditionTrue_1 = {val:false};
gdjs.SynchronisedCheckBoxCode.condition0IsTrue_1 = {val:false};
gdjs.SynchronisedCheckBoxCode.condition1IsTrue_1 = {val:false};
gdjs.SynchronisedCheckBoxCode.condition2IsTrue_1 = {val:false};
gdjs.SynchronisedCheckBoxCode.condition3IsTrue_1 = {val:false};


gdjs.SynchronisedCheckBoxCode.mapOfGDgdjs_46SynchronisedCheckBoxCode_46GDcheckboxObjects1Objects = Hashtable.newFrom({"checkbox": gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1});gdjs.SynchronisedCheckBoxCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1, gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2);


gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2.length;i<l;++i) {
    if ( gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2[i].isCurrentAnimationName("checked") ) {
        gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val = true;
        gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2[k] = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2[i];
        ++k;
    }
}
gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2.length = k;}if (gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2 */
{gdjs.evtTools.p2p.sendDataToAll("uncheck", (gdjs.RuntimeObject.getVariableString(((gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2[0].getVariables()).getFromIndex(0))));
}{for(var i = 0, len = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2.length ;i < len;++i) {
    gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2[i].setAnimationName("unchecked");
}
}{runtimeScene.getVariables().get("temp").setNumber(1);
}}

}


{

/* Reuse gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1 */

gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val = false;
gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0.val = false;
{
gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("temp")) == 0;
}if ( gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1.length;i<l;++i) {
    if ( gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[i].isCurrentAnimationName("unchecked") ) {
        gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0.val = true;
        gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[k] = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[i];
        ++k;
    }
}
gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1.length = k;}}
if (gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1 */
{gdjs.evtTools.p2p.sendDataToAll("check", (gdjs.RuntimeObject.getVariableString(((gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[0].getVariables()).getFromIndex(0))));
}{for(var i = 0, len = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1.length ;i < len;++i) {
    gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[i].setAnimationName("checked");
}
}}

}


};gdjs.SynchronisedCheckBoxCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("checkbox"), gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1);

gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val = false;
gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0.val = false;
gdjs.SynchronisedCheckBoxCode.condition2IsTrue_0.val = false;
{
gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val ) {
{
{gdjs.SynchronisedCheckBoxCode.conditionTrue_1 = gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0;
gdjs.SynchronisedCheckBoxCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9317612);
}
}if ( gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0.val ) {
{
gdjs.SynchronisedCheckBoxCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SynchronisedCheckBoxCode.mapOfGDgdjs_46SynchronisedCheckBoxCode_46GDcheckboxObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.SynchronisedCheckBoxCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("temp").setNumber(0);
}
{ //Subevents
gdjs.SynchronisedCheckBoxCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("checkbox"), gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1);

gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val = false;
gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0.val = false;
{
gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("check", false);
}if ( gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1.length;i<l;++i) {
    if ( gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[i].getVariableNumber(gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.common.toNumber(gdjs.evtTools.p2p.getEventData("check")) ) {
        gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0.val = true;
        gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[k] = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[i];
        ++k;
    }
}
gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1.length = k;}}
if (gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1 */
{for(var i = 0, len = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1.length ;i < len;++i) {
    gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[i].setAnimationName("checked");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("checkbox"), gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1);

gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val = false;
gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0.val = false;
{
gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("uncheck", false);
}if ( gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1.length;i<l;++i) {
    if ( gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[i].getVariableNumber(gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[i].getVariables().getFromIndex(0)) == gdjs.evtTools.common.toNumber(gdjs.evtTools.p2p.getEventData("uncheck")) ) {
        gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0.val = true;
        gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[k] = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[i];
        ++k;
    }
}
gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1.length = k;}}
if (gdjs.SynchronisedCheckBoxCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1 */
{for(var i = 0, len = gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1.length ;i < len;++i) {
    gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1[i].setAnimationName("unchecked");
}
}}

}


{



}


{


gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val = false;
{
{gdjs.SynchronisedCheckBoxCode.conditionTrue_1 = gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0;
gdjs.SynchronisedCheckBoxCode.condition0IsTrue_1.val = false;
gdjs.SynchronisedCheckBoxCode.condition1IsTrue_1.val = false;
{
gdjs.SynchronisedCheckBoxCode.condition0IsTrue_1.val = gdjs.evtTools.p2p.onError();
if( gdjs.SynchronisedCheckBoxCode.condition0IsTrue_1.val ) {
    gdjs.SynchronisedCheckBoxCode.conditionTrue_1.val = true;
}
}
{
gdjs.SynchronisedCheckBoxCode.condition1IsTrue_1.val = gdjs.evtTools.p2p.onDisconnect();
if( gdjs.SynchronisedCheckBoxCode.condition1IsTrue_1.val ) {
    gdjs.SynchronisedCheckBoxCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.SynchronisedCheckBoxCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Disconnected", true);
}}

}


};

gdjs.SynchronisedCheckBoxCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects1.length = 0;
gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects2.length = 0;
gdjs.SynchronisedCheckBoxCode.GDcheckboxObjects3.length = 0;

gdjs.SynchronisedCheckBoxCode.eventsList1(runtimeScene);
return;

}

gdjs['SynchronisedCheckBoxCode'] = gdjs.SynchronisedCheckBoxCode;

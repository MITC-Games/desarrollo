gdjs.ChatCode = {};
gdjs.ChatCode.GDSendButtonObjects1_1final = [];

gdjs.ChatCode.stopDoWhile3 = false;

gdjs.ChatCode.GDChatObjects1= [];
gdjs.ChatCode.GDChatObjects2= [];
gdjs.ChatCode.GDChatObjects3= [];
gdjs.ChatCode.GDChatBoxObjects1= [];
gdjs.ChatCode.GDChatBoxObjects2= [];
gdjs.ChatCode.GDChatBoxObjects3= [];
gdjs.ChatCode.GDChatBoxSpriteObjects1= [];
gdjs.ChatCode.GDChatBoxSpriteObjects2= [];
gdjs.ChatCode.GDChatBoxSpriteObjects3= [];
gdjs.ChatCode.GDEntrySpriteObjects1= [];
gdjs.ChatCode.GDEntrySpriteObjects2= [];
gdjs.ChatCode.GDEntrySpriteObjects3= [];
gdjs.ChatCode.GDSendButtonObjects1= [];
gdjs.ChatCode.GDSendButtonObjects2= [];
gdjs.ChatCode.GDSendButtonObjects3= [];
gdjs.ChatCode.GDEntryTextObjects1= [];
gdjs.ChatCode.GDEntryTextObjects2= [];
gdjs.ChatCode.GDEntryTextObjects3= [];
gdjs.ChatCode.GDEntryObjects1= [];
gdjs.ChatCode.GDEntryObjects2= [];
gdjs.ChatCode.GDEntryObjects3= [];

gdjs.ChatCode.conditionTrue_0 = {val:false};
gdjs.ChatCode.condition0IsTrue_0 = {val:false};
gdjs.ChatCode.condition1IsTrue_0 = {val:false};
gdjs.ChatCode.condition2IsTrue_0 = {val:false};
gdjs.ChatCode.condition3IsTrue_0 = {val:false};
gdjs.ChatCode.conditionTrue_1 = {val:false};
gdjs.ChatCode.condition0IsTrue_1 = {val:false};
gdjs.ChatCode.condition1IsTrue_1 = {val:false};
gdjs.ChatCode.condition2IsTrue_1 = {val:false};
gdjs.ChatCode.condition3IsTrue_1 = {val:false};
gdjs.ChatCode.conditionTrue_2 = {val:false};
gdjs.ChatCode.condition0IsTrue_2 = {val:false};
gdjs.ChatCode.condition1IsTrue_2 = {val:false};
gdjs.ChatCode.condition2IsTrue_2 = {val:false};
gdjs.ChatCode.condition3IsTrue_2 = {val:false};


gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDSendButtonObjects2Objects = Hashtable.newFrom({"SendButton": gdjs.ChatCode.GDSendButtonObjects2});gdjs.ChatCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Entry"), gdjs.ChatCode.GDEntryObjects1);
gdjs.ChatCode.GDSendButtonObjects1.length = 0;


gdjs.ChatCode.condition0IsTrue_0.val = false;
gdjs.ChatCode.condition1IsTrue_0.val = false;
gdjs.ChatCode.condition2IsTrue_0.val = false;
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition0IsTrue_0;
gdjs.ChatCode.conditionTrue_1.val = (gdjs.evtTools.string.strLen(gdjs.evtsExt__Sanitizer__removeNewLines.func(runtimeScene, gdjs.evtsExt__Sanitizer__sanitize.func(runtimeScene, (( gdjs.ChatCode.GDEntryObjects1.length === 0 ) ? "" :gdjs.ChatCode.GDEntryObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) != 0);
}
}if ( gdjs.ChatCode.condition0IsTrue_0.val ) {
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition1IsTrue_0;
gdjs.ChatCode.GDSendButtonObjects1_1final.length = 0;gdjs.ChatCode.condition0IsTrue_1.val = false;
gdjs.ChatCode.condition1IsTrue_1.val = false;
{
gdjs.ChatCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if( gdjs.ChatCode.condition0IsTrue_1.val ) {
    gdjs.ChatCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("SendButton"), gdjs.ChatCode.GDSendButtonObjects2);
{gdjs.ChatCode.conditionTrue_2 = gdjs.ChatCode.condition1IsTrue_1;
gdjs.ChatCode.condition0IsTrue_2.val = false;
gdjs.ChatCode.condition1IsTrue_2.val = false;
{
gdjs.ChatCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ChatCode.condition0IsTrue_2.val ) {
{
gdjs.ChatCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDSendButtonObjects2Objects, runtimeScene, true, false);
}}
gdjs.ChatCode.conditionTrue_2.val = true && gdjs.ChatCode.condition0IsTrue_2.val && gdjs.ChatCode.condition1IsTrue_2.val;
}
if( gdjs.ChatCode.condition1IsTrue_1.val ) {
    gdjs.ChatCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.ChatCode.GDSendButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.ChatCode.GDSendButtonObjects1_1final.indexOf(gdjs.ChatCode.GDSendButtonObjects2[j]) === -1 )
            gdjs.ChatCode.GDSendButtonObjects1_1final.push(gdjs.ChatCode.GDSendButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.ChatCode.GDSendButtonObjects1_1final, gdjs.ChatCode.GDSendButtonObjects1);
}
}
}if ( gdjs.ChatCode.condition1IsTrue_0.val ) {
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition2IsTrue_0;
gdjs.ChatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8281916);
}
}}
}
if (gdjs.ChatCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ChatBox"), gdjs.ChatCode.GDChatBoxObjects1);
/* Reuse gdjs.ChatCode.GDEntryObjects1 */
{for(var i = 0, len = gdjs.ChatCode.GDChatBoxObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDChatBoxObjects1[i].setBBText(gdjs.ChatCode.GDChatBoxObjects1[i].getBBText() + (gdjs.evtTools.string.newLine() + "You: " + gdjs.evtsExt__Sanitizer__removeNewLines.func(runtimeScene, gdjs.evtsExt__Sanitizer__sanitize.func(runtimeScene, (( gdjs.ChatCode.GDEntryObjects1.length === 0 ) ? "" :gdjs.ChatCode.GDEntryObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{gdjs.evtTools.p2p.sendDataToAll("message", gdjs.evtsExt__Sanitizer__removeNewLines.func(runtimeScene, gdjs.evtsExt__Sanitizer__sanitize.func(runtimeScene, (( gdjs.ChatCode.GDEntryObjects1.length === 0 ) ? "" :gdjs.ChatCode.GDEntryObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{for(var i = 0, len = gdjs.ChatCode.GDEntryObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDEntryObjects1[i].setString("");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}

}


};gdjs.ChatCode.eventsList1 = function(runtimeScene) {

{


gdjs.ChatCode.condition0IsTrue_0.val = false;
{
gdjs.ChatCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("message", false);
}if (gdjs.ChatCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ChatBox"), gdjs.ChatCode.GDChatBoxObjects1);
{for(var i = 0, len = gdjs.ChatCode.GDChatBoxObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDChatBoxObjects1[i].setBBText(gdjs.ChatCode.GDChatBoxObjects1[i].getBBText() + (gdjs.evtTools.string.newLine() + "Other: " + gdjs.evtsExt__Sanitizer__removeNewLines.func(runtimeScene, gdjs.evtsExt__Sanitizer__sanitize.func(runtimeScene, gdjs.evtTools.p2p.getEventData("message"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}

}


};gdjs.ChatCode.eventsList2 = function(runtimeScene) {

};gdjs.ChatCode.eventsList3 = function(runtimeScene) {

{


gdjs.ChatCode.stopDoWhile3 = false;
do {gdjs.copyArray(runtimeScene.getObjects("ChatBox"), gdjs.ChatCode.GDChatBoxObjects3);
gdjs.ChatCode.condition0IsTrue_0.val = false;
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition0IsTrue_0;
gdjs.ChatCode.conditionTrue_1.val = ((( gdjs.ChatCode.GDChatBoxObjects3.length === 0 ) ? 0 :gdjs.ChatCode.GDChatBoxObjects3[0].getHeight()) > 480);
}
}if (gdjs.ChatCode.condition0IsTrue_0.val) {
if (true) {
{for(var i = 0, len = gdjs.ChatCode.GDChatBoxObjects3.length ;i < len;++i) {
    gdjs.ChatCode.GDChatBoxObjects3[i].setBBText(gdjs.evtsExt__Sanitizer__removeFirstLine.func(runtimeScene, (gdjs.ChatCode.GDChatBoxObjects3[i].getBBText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}
{ //Subevents: 
gdjs.ChatCode.eventsList2(runtimeScene);} //Subevents end.
}
} else gdjs.ChatCode.stopDoWhile3 = true; 
} while ( !gdjs.ChatCode.stopDoWhile3 );

}


};gdjs.ChatCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.ChatCode.condition0IsTrue_0.val = false;
{
gdjs.ChatCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}if (gdjs.ChatCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ChatCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Entry"), gdjs.ChatCode.GDEntryObjects1);
gdjs.copyArray(runtimeScene.getObjects("EntryText"), gdjs.ChatCode.GDEntryTextObjects1);
{for(var i = 0, len = gdjs.ChatCode.GDEntryObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDEntryObjects1[i].setString(gdjs.evtsExt__Sanitizer__removeNewLines.func(runtimeScene, gdjs.evtsExt__Sanitizer__sanitize.func(runtimeScene, gdjs.evtsExt__Sanitizer__trim.func(runtimeScene, (gdjs.ChatCode.GDEntryObjects1[i].getString()), 70, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.ChatCode.GDEntryTextObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDEntryTextObjects1[i].setString((( gdjs.ChatCode.GDEntryObjects1.length === 0 ) ? "" :gdjs.ChatCode.GDEntryObjects1[0].getString()));
}
}}

}


};gdjs.ChatCode.eventsList5 = function(runtimeScene) {

{


gdjs.ChatCode.eventsList0(runtimeScene);
}


{


gdjs.ChatCode.eventsList1(runtimeScene);
}


{


gdjs.ChatCode.eventsList4(runtimeScene);
}


{



}


{


gdjs.ChatCode.condition0IsTrue_0.val = false;
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition0IsTrue_0;
gdjs.ChatCode.condition0IsTrue_1.val = false;
gdjs.ChatCode.condition1IsTrue_1.val = false;
{
gdjs.ChatCode.condition0IsTrue_1.val = gdjs.evtTools.p2p.onError();
if( gdjs.ChatCode.condition0IsTrue_1.val ) {
    gdjs.ChatCode.conditionTrue_1.val = true;
}
}
{
gdjs.ChatCode.condition1IsTrue_1.val = gdjs.evtTools.p2p.onDisconnect();
if( gdjs.ChatCode.condition1IsTrue_1.val ) {
    gdjs.ChatCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.ChatCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Disconnected", true);
}}

}


};

gdjs.ChatCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChatCode.GDChatObjects1.length = 0;
gdjs.ChatCode.GDChatObjects2.length = 0;
gdjs.ChatCode.GDChatObjects3.length = 0;
gdjs.ChatCode.GDChatBoxObjects1.length = 0;
gdjs.ChatCode.GDChatBoxObjects2.length = 0;
gdjs.ChatCode.GDChatBoxObjects3.length = 0;
gdjs.ChatCode.GDChatBoxSpriteObjects1.length = 0;
gdjs.ChatCode.GDChatBoxSpriteObjects2.length = 0;
gdjs.ChatCode.GDChatBoxSpriteObjects3.length = 0;
gdjs.ChatCode.GDEntrySpriteObjects1.length = 0;
gdjs.ChatCode.GDEntrySpriteObjects2.length = 0;
gdjs.ChatCode.GDEntrySpriteObjects3.length = 0;
gdjs.ChatCode.GDSendButtonObjects1.length = 0;
gdjs.ChatCode.GDSendButtonObjects2.length = 0;
gdjs.ChatCode.GDSendButtonObjects3.length = 0;
gdjs.ChatCode.GDEntryTextObjects1.length = 0;
gdjs.ChatCode.GDEntryTextObjects2.length = 0;
gdjs.ChatCode.GDEntryTextObjects3.length = 0;
gdjs.ChatCode.GDEntryObjects1.length = 0;
gdjs.ChatCode.GDEntryObjects2.length = 0;
gdjs.ChatCode.GDEntryObjects3.length = 0;

gdjs.ChatCode.eventsList5(runtimeScene);
return;

}

gdjs['ChatCode'] = gdjs.ChatCode;

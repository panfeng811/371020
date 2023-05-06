    var tcd_strHelpText = "This extension allows you to save any comps ,layers (and even a bunch of layers) and all properties with live preview and use them on your projects .\n\
You can also back up the saved objects and use them anywhere.\n\
Preview, apply, and import projects and media files (image, video, audio, fonts, ffx presets,aep, jsx, jsxbin, ...) by one click.\n\
You can add or remove categories with the plus and minus buttons (top right).\n\
Save Button\
- By pressing this button, the selected layer or layers are saved on selected catrgory.\n\- If no layer is selected, the current composition is saved.\
- If you select effects or the other properties of a layer and press Ctrl/Cmd+click on this button, you can save it as a preset.\
- If you select a text layer and press Ctrl/Cmd+click on this button, you can save the font of the text layer.\
- If your selected layer has markers, you can press Ctrl/Cmd+click on this button to saving markers.\
- If you select mask property and press Ctrl/Cmd+click on this button, you can save the masks.\
- If you select a property and press Ctrl/Cmd+click on this button, you can save the expression codes of the selected property.\
- If you select keyframes and press Ctrl/Cmd+click on this button, you can save the speed and velocity of them.\
- If you press Shift+click on this button, you can save script codes on a jsx file or expressions manually.\
- Automatically reduce project by Collect files metod.\
- Fonts will be collected.\
\tThe preview is also saved automatically.\
\tThe Work area duration is used to save the preview video for animated objects.\
\tA fixed thumbnail image is created from the current time.\
\tIf you want to use a static thumbnail for preview without video, limit the work area duration to one frame\
\t\tby pressing 'B' and 'N' on the keyboard.\
\tIf your preview needs to be croped, just select the crop area by 'Region of interest' before saving.\n\
Apply saved objects\
- For saved layers and compostions:\
\tBy clicking on the saved objects, they will be added to the current comp.\
\tIf the same object is already used in the project before, the same previous object will be added to the current\n\t\tcomp without re-importing it into the project.\
\tBy pressing the Ctrl/Cmd key and applying objects, the selected object can be re-imported into the project.\
- For presets:\
\tBy clicking on the presets, they will be applied on the selected layer.\
\tPreset kayframes are applied to the layers from the current time.\
\tIf the applied preset requires a marker, the corresponding marker is added automatically.\
- For fonts:\
\tBy clicking on the saved fonts,the text font of the selected layer changes to the corresponding font.\
- Right Click functions on saved objects\
\tRename: for rename the saved objects name.\
\tEdit Source: Open the project for the selected object to change or edit properties.\
\tSet Preview: Set a new preview for it from work area duration.\
\tOpen Location: Open the location of saved objects folder in Explorer.\n\
Backup\
- This button (right bottom) is for backing up all saved objects in all categories.\n\
Import\
- This button (left bottom) is used to import packages. You can even add your own external templates this way.\n\
Search box\
-Instant search for find your objects using the keywords including categories.\
";
 
 


        var win = new Window("palette", "Save Objects Help", [100, 0, 780, 600]);  
        this.windowRef = win;
        win.btnPanel = win.add("group", [10, 10, 800, 600]);
        win.btnPanel.text = win.btnPanel.add("statictext", [10, 10, 600, 25], "Save Objects");
        win.btnPanel.warnBtn = win.btnPanel.add("edittext", [10, 40, 650, 540], tcd_strHelpText, { multiline: true });
        var effectRow=win.btnPanel.add ('group {alignChildren: "left",orientation: "row"}', [0, 550, 700, 580])
        win.btnPanel.aesBtn = effectRow.add("button", [10,0, 130, 25], "Save Objects Page");
        win.btnPanel.tutBtn = effectRow.add("button", [140,0, 230, 25], "Video Tutorial");
        win.btnPanel.otherBtn = effectRow.add("button", [240,0, 320, 25], "Other Products");
        win.btnPanel.aesBtn.onClick = function () {openURL("https://aescripts.com/save-objects/");}
            win.btnPanel.tutBtn.onClick = function () {openURL("https://youtu.be/IQKC6as9Du4");}
                   win.btnPanel.otherBtn.onClick = function () {openURL("https://aescripts.com/authors/m-p/motioncodes/");}

    
    function openURL(url) 
    {
 var os = system.osName;
if (!os.length)
{
    os = $.os;
}
app_os =  ( os.indexOf("Win") != -1 )  ?  "Win" : "Mac"

if ( app_os == "Win" )
{
    system.callSystem("explorer " + url);
}
else
{
    system.callSystem("open " + url);
}

    }

        win.center();
        win.show();

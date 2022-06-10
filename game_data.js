game.data = {"font":{"family":"Arial","height":21,"leading":1,"size":"18px"},"height":480,"pauseScreen":{"scenes":[{"actions":[{"nameEditable":true,"sync":true,"type":"Wait","waitType":"Forever"}],"backgroundColor":[242,242,242,255],"name":"Main","nameEditable":true,"objects":[{"onMouseRelease":[{"comment":"Resume Game","nameEditable":true,"script":"var game = this.getGame();\nif (game)\n\tgame.resume();","sync":true,"type":"RunScript"}],"resource":"Button","text":"Resume","x":240,"y":148},{"name":"Button1","onMouseMove":[{"color":[255,255,255,255],"colorChangeEnabled":true,"image":null,"imageChangeEnabled":false,"nameEditable":true,"object":"Button1","opacity":255,"opacityChangeEnabled":false,"sync":true,"targetParent":true,"type":"ChangeObjectBackground"}],"onMouseRelease":[{"metaTarget":1,"nameEditable":true,"sync":true,"target":"Save Game","type":"GoToScene"}],"resource":"Button","text":"Save Game","x":240,"y":201},{"name":"Button2","onMouseMove":[{"color":[255,255,255,255],"colorChangeEnabled":true,"image":null,"imageChangeEnabled":false,"nameEditable":true,"object":"Button2","opacity":255,"opacityChangeEnabled":false,"sync":true,"targetParent":true,"type":"ChangeObjectBackground"}],"onMouseRelease":[{"metaTarget":1,"nameEditable":true,"sync":true,"target":"Load Game","type":"GoToScene"}],"resource":"Button","text":"Load Game","x":240,"y":255}],"sync":true,"type":"Scene"},{"actions":[{"nameEditable":true,"sync":true,"type":"Wait","waitType":"Forever"}],"backgroundColor":[242,242,242,255],"name":"Save Game","nameEditable":true,"objects":[{"alignEnabled":false,"name":"SlotButton7","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":325},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":325}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":7,"slotType":0,"thumbnailEnabled":true,"x":331,"y":318},{"alignEnabled":false,"name":"SlotButton6","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":325},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":325}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":6,"slotType":0,"thumbnailEnabled":true,"x":38,"y":318},{"alignEnabled":false,"name":"SlotButton5","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":242},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":242}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":5,"slotType":0,"thumbnailEnabled":true,"x":331,"y":235},{"alignEnabled":false,"name":"SlotButton4","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":242},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":242}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":4,"slotType":0,"thumbnailEnabled":true,"x":38,"y":235},{"alignEnabled":false,"name":"SlotButton3","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":161},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":161}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":3,"slotType":0,"thumbnailEnabled":true,"x":331,"y":154},{"alignEnabled":false,"name":"SlotButton2","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":161},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":161}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":2,"slotType":0,"thumbnailEnabled":true,"x":38,"y":154},{"alignEnabled":false,"name":"SlotButton1","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":79},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":79}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":1,"slotType":0,"thumbnailEnabled":true,"x":331,"y":72},{"alignEnabled":false,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":79},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":79}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":0,"slotType":0,"thumbnailEnabled":true,"x":38,"y":72},{"resource":"TitleBox","text":"Save Game","x":249,"y":17},{"resource":"BackButton","x":18,"y":430}],"sync":true,"type":"Scene"},{"actions":[{"nameEditable":true,"sync":true,"type":"Wait","waitType":"Forever"}],"backgroundColor":[242,242,242,255],"name":"Load Game","nameEditable":true,"objects":[{"alignEnabled":false,"name":"SlotButton7","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":79},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":79}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":0,"slotType":1,"thumbnailEnabled":true,"x":38,"y":72},{"alignEnabled":false,"name":"SlotButton6","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":161},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":161}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":3,"slotType":1,"thumbnailEnabled":true,"x":331,"y":154},{"alignEnabled":false,"name":"SlotButton5","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":242},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":242}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":4,"slotType":1,"thumbnailEnabled":true,"x":38,"y":235},{"alignEnabled":false,"name":"SlotButton4","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":161},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":161}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":2,"slotType":1,"thumbnailEnabled":true,"x":38,"y":154},{"alignEnabled":false,"name":"SlotButton3","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":325},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":325}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":6,"slotType":1,"thumbnailEnabled":true,"x":38,"y":318},{"alignEnabled":false,"name":"SlotButton2","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":79},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":79}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":1,"slotType":1,"thumbnailEnabled":true,"x":331,"y":72},{"alignEnabled":false,"name":"SlotButton1","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":325},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":325}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":7,"slotType":1,"thumbnailEnabled":true,"x":331,"y":318},{"alignEnabled":false,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":242},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":242}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":5,"slotType":1,"thumbnailEnabled":true,"x":331,"y":235},{"resource":"TitleBox","text":"Load Game","x":249,"y":17},{"resource":"BackButton","x":18,"y":430}],"sync":true,"type":"Scene"}]},"resources":{"BackButton":{"backgroundColor":[220,220,220,255],"backgroundOpacity":255,"borderColor":[204,204,204,255],"borderWidth":1,"cornerRadius":10,"font":{"family":"Roboto","height":22,"size":"18px","style":"normal","weight":"normal"},"height":34,"keepAspectRatio":false,"name":"BackButton","nameEditable":true,"onMouseMove":[{"color":[255,255,255,255],"colorChangeEnabled":true,"image":null,"imageChangeEnabled":false,"nameEditable":true,"object":"BackButton","opacity":255,"opacityChangeEnabled":false,"sync":true,"targetParent":true,"type":"ChangeObjectBackground"}],"onMouseRelease":[{"metaTarget":4,"nameEditable":true,"sync":true,"type":"GoToScene"}],"opacity":255,"sync":true,"text":"Back","textAlignment":"HCenter|VCenter","textColor":[14,14,14,255],"type":"Button","visible":true,"width":87,"x":486,"y":292},"Button":{"backgroundColor":[220,220,220,255],"backgroundOpacity":255,"borderColor":[204,204,204,255],"cornerRadius":10,"font":{"family":"Arial","height":18,"leading":1,"size":"16px","style":"normal","weight":"normal"},"height":34,"keepAspectRatio":false,"name":"Button","nameEditable":true,"onMouseMove":[{"color":[255,255,255,255],"colorChangeEnabled":true,"image":null,"imageChangeEnabled":false,"nameEditable":true,"object":"Button","opacity":255,"opacityChangeEnabled":false,"sync":true,"targetParent":true,"type":"ChangeObjectBackground"}],"opacity":255,"sync":true,"text":"Button","textAlignment":"HCenter|VCenter","textColor":[14,14,14,255],"type":"Button","visible":true,"width":160,"x":449,"y":292},"DialogueBox":{"alignEnabled":true,"backgroundColor":[],"backgroundOpacity":255,"height":190,"keepAspectRatio":false,"name":"DialogueBox","nameEditable":true,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":30,"keepAspectRatio":false,"name":"speakerTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":340,"y":226},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":160,"keepAspectRatio":false,"name":"dialogueTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":340,"y":256}],"objectsSynced":false,"opacity":255,"resizeToContentsEnabled":true,"sync":true,"type":"DialogueBox","visible":true,"width":640,"x":340,"y":226},"DialogueBox1":{"alignEnabled":true,"backgroundColor":[],"backgroundOpacity":255,"height":190,"keepAspectRatio":false,"name":"DialogueBox1","nameEditable":true,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":30,"keepAspectRatio":false,"name":"speakerTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":340,"y":226},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":160,"keepAspectRatio":false,"name":"dialogueTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":340,"y":256}],"objectsSynced":false,"opacity":255,"resizeToContentsEnabled":true,"sync":true,"type":"DialogueBox","visible":true,"width":640,"x":340,"y":226},"DialogueBox2":{"alignEnabled":true,"backgroundColor":[],"backgroundOpacity":255,"height":190,"keepAspectRatio":false,"name":"DialogueBox2","nameEditable":true,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":30,"keepAspectRatio":false,"name":"speakerTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":340,"y":226},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":160,"keepAspectRatio":false,"name":"dialogueTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":340,"y":256}],"objectsSynced":false,"opacity":255,"resizeToContentsEnabled":true,"sync":true,"type":"DialogueBox","visible":true,"width":640,"x":340,"y":226},"Roboto - Bold":{"asset":"asset2","name":"Roboto - Bold","nameEditable":true,"sync":true,"type":"Font"},"Roboto - Regular":{"asset":"asset1","name":"Roboto - Regular","nameEditable":true,"sync":true,"type":"Font"},"SlotButton":{"alignEnabled":false,"backgroundColor":[],"backgroundOpacity":255,"borderColor":[0,0,0,255],"borderWidth":1,"cornerRadius":2,"height":65,"keepAspectRatio":false,"name":"SlotButton","nameEditable":true,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":406,"y":284},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":468,"y":284}],"objectsSynced":false,"opacity":255,"resizeToContentsEnabled":false,"slot":0,"slotType":0,"sync":true,"thumbnailEnabled":true,"type":"SlotButton","visible":true,"width":271,"x":394,"y":277},"SlotButton1":{"alignEnabled":false,"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"SlotButton1","nameEditable":true,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":530,"y":296},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":200,"x":590,"y":296}],"objectsSynced":false,"opacity":255,"resizeToContentsEnabled":false,"slot":0,"slotType":0,"sync":true,"thumbnailEnabled":true,"type":"SlotButton","visible":true,"width":260,"x":530,"y":296},"SlotButton2":{"alignEnabled":false,"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"SlotButton2","nameEditable":true,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":530,"y":296},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":200,"x":590,"y":296}],"objectsSynced":false,"opacity":255,"resizeToContentsEnabled":false,"slot":0,"slotType":0,"sync":true,"thumbnailEnabled":true,"type":"SlotButton","visible":true,"width":260,"x":530,"y":296},"TextBox":{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":160,"keepAspectRatio":false,"name":"TextBox","nameEditable":true,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":340,"y":241},"TextBox1":{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":160,"keepAspectRatio":false,"name":"TextBox1","nameEditable":true,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":340,"y":241},"TextBox2":{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":160,"keepAspectRatio":false,"name":"TextBox2","nameEditable":true,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":340,"y":241},"TitleBox":{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":29,"size":"24px","style":"normal","weight":"normal"},"height":41,"keepAspectRatio":false,"name":"TitleBox","nameEditable":true,"opacity":255,"sync":true,"text":"","textAlignment":"HCenter|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":143,"x":458,"y":289},"코리안 플레이어 손 ":{"backgroundColor":[],"backgroundOpacity":255,"height":113,"keepAspectRatio":true,"name":"코리안 플레이어 손 ","nameColor":[255,255,255,255],"nameEditable":true,"opacity":255,"state":"gay","states":{"gay":"octodad.png"},"sync":true,"textColor":[255,255,255,255],"type":"Character","visible":true,"width":120,"x":600,"y":262}},"scenes":[{"actions":[{"nameEditable":true,"sync":true,"type":"Wait","waitType":"Forever"}],"backgroundColor":[255,255,255,255],"name":"Main","nameEditable":true,"objects":[{"onMousePress":[{"metaTarget":1,"nameEditable":true,"sync":true,"target":"Gay","type":"GoToScene"}],"onMouseRelease":[{"metaTarget":2,"nameEditable":true,"sync":true,"type":"GoToScene"}],"resource":"Button","text":"스타트 게이","x":240,"y":189},{"name":"Button1","onMouseMove":[{"color":[255,255,255,255],"colorChangeEnabled":true,"image":null,"imageChangeEnabled":false,"nameEditable":true,"object":"Button1","opacity":255,"opacityChangeEnabled":false,"sync":true,"targetParent":true,"type":"ChangeObjectBackground"}],"onMouseRelease":[{"comment":"Go To Load Game screen","nameEditable":true,"script":"var game = this.getGame();\nif (game) {\n\tgame.pause();\n\tgame.getModel().setScene(\"Load Game\");\n}","sync":true,"type":"RunScript"}],"resource":"Button","text":"로드 게이","x":240,"y":254}],"sync":true,"type":"Scene"},{"actions":[{"character":"손문성","nameEditable":true,"object":"DialogueBox2","sync":true,"text":"나는 게이다.","type":"Dialogue","wait":{"nameEditable":true,"sync":true,"type":"Wait","waitType":"MouseClick"}},{"character":"손문성","nameEditable":true,"object":"DialogueBox2","sync":true,"text":"나는 게이이다.","type":"Dialogue","wait":{"nameEditable":true,"sync":true,"type":"Wait","waitType":"MouseClick"}},{"character":"손문성 ","nameEditable":true,"object":"DialogueBox2","sync":true,"text":"이제부터 게이가 되기로 한 것이다.","type":"Dialogue","wait":{"nameEditable":true,"sync":true,"type":"Wait","waitType":"MouseClick"}},{"nameEditable":true,"skippable":false,"sync":true,"time":3,"type":"Wait","waitType":"Timed"},{"character":"손문성","nameEditable":true,"object":"DialogueBox2","sync":true,"text":"...","type":"Dialogue","wait":{"nameEditable":true,"sync":true,"type":"Wait","waitType":"MouseClick"}},{"character":"손문성","nameEditable":true,"object":"DialogueBox2","sync":true,"text":"이제부터 난 게이니까 게이바에 가겠다.","type":"Dialogue","wait":{"nameEditable":true,"sync":true,"type":"Wait","waitType":"MouseClick"}},{"character":"손문성","nameEditable":true,"object":"DialogueBox2","sync":true,"text":"기모찌","type":"Dialogue","wait":{"nameEditable":true,"sync":true,"type":"Wait","waitType":"MouseClick"}}],"backgroundColor":[255,255,255,255],"name":"Gay","nameEditable":true,"objects":[{"resource":"코리안 플레이어 손 ","x":250,"y":184},{"alignEnabled":true,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":30,"keepAspectRatio":false,"name":"speakerTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":16,"y":300},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":21,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":160,"keepAspectRatio":false,"name":"dialogueTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":16,"y":330}],"objectsSynced":false,"resizeToContentsEnabled":true,"resource":"DialogueBox2","x":16,"y":300}],"sync":true,"type":"Scene"}],"textSpeed":50,"title":"base_template","version":1792,"width":640}
// 好書研究所書庫模組：《編碼：隱匿在計算機背後的語言》
window.registerBook({
  "id": "code_petzold",
  "icon": "💡",
  "category": "科學與歷史",
  "title": "編碼：隱匿在計算機背後的語言",
  "subtitle": "Code: The Hidden Language",
  "author": "查爾斯·佩措爾德 (Charles Petzold)",
  "badge": "6章全景精讀版",
  "badgeColor": "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300",
  "summary": "電腦科學經典啟蒙神作，從童年窗邊的手電筒摩斯密碼出發，一步步用繼電器、邏輯閘與正反器親手搭出一部運作中的現代計算機。",
  "chaptersCount": 6,
  "parts": [
    {
      "part": 1,
      "title": "第一篇：符號、編碼與二進位覺醒",
      "desc": "從手電筒、點字與摩斯密碼看懂資訊編碼的本質，並發現為何「2」是機器最愛的進位制。"
    },
    {
      "part": 2,
      "title": "第二篇：繼電器、邏輯閘與加法器",
      "desc": "用電磁繼電器搭建布林邏輯閘，再將邏輯閘組合成能真正完成二進位算術的硬體電路。"
    },
    {
      "part": 3,
      "title": "第三篇：記憶迴路與現代計算機誕生",
      "desc": "透過回饋電路打造儲存位元的正反器與記憶體，並組裝出能自動讀取指令的處理器系統。"
    }
  ],
  "chapters": [
    {
      "num": 1,
      "part": 1,
      "part_title": "第一篇：符號、編碼與二進位覺醒",
      "title_zh": "手電筒、摩斯密碼與盲人點字",
      "title_en": "Best Friends, Morse Code, and Braille",
      "principle_zh": "一切通訊與計算的起點，都是雙方對有限物理狀態所約定好的編碼協議",
      "principle_en": "Every communication system begins with a shared code mapping simple physical states to human meaning.",
      "quote": "A code is simply a system for transferring information among people and machines using agreed-upon symbols.",
      "layer1_psychology": "我們每天滑手機、傳訊息，常覺得螢幕裡的文字與圖像高深莫測。佩措爾德以極其親切的日常視角揭示：人類對溝通的渴望催生了「編碼」（Code）——只要兩個人事先約定好「閃一下代表點、閃長一點代表劃」，哪怕隔著馬路用手電筒也能在深夜聊整晚。編碼的本質，就是把複雜思想壓縮進最簡單、最抗干擾的物理訊號裡。",
      "layer2_anecdote": "書中開篇描繪兩個住在街對面的十歲好友，半夜想偷聊天卻不能開窗大喊，於是拿著手電筒互閃摩斯密碼；緊接著作者介紹 1824 年年僅十五歲的法國盲童路易·布萊葉（Louis Braille），他將原本軍用的十二點夜間密碼簡化為 2x3 的六點凸起方陣。這六個點「有凸起」與「平坦」的組合共有 64 種狀態，正好足夠表示所有字母、標點甚至樂譜，成為人類史上最優雅的二進位編碼之一。",
      "layer3_action": "【善用「最小編碼協議」簡化協作】：\n1. 為團隊重複溝通建立暗號：將常見的狀態（如「已收悉待處理」、「急件待批」）標準化成極簡標籤。\n2. 設計防呆訊號：在日常檢查清單或儀表板中，只保留「正常（綠）/ 異常（紅）」的二元明確訊號，避免模糊地帶。\n3. 記住物理限制決定編碼形式：根據溝通媒介（口頭、文字、訊息）選擇最不易失真的表達方式。",
      "quote_zh": "編碼不過是一套利用雙方約定好的符號，在人與人或機器之間傳遞資訊的系統。"
    },
    {
      "num": 2,
      "part": 1,
      "part_title": "第一篇：符號、編碼與二進位覺醒",
      "title_zh": "十根手指的偶然與二進位革命",
      "title_en": "Around the Block of Ten and Binary Simplicity",
      "principle_zh": "十進位只是人類長了十根手指的歷史偶然，只有兩種狀態的二進位才是機器的天選語言",
      "principle_en": "Decimal arithmetic is an accident of human anatomy; binary is the natural language of reliable electrical switches.",
      "quote": "We count by tens only because we happen to have ten fingers; electricity prefers just two states: on and off.",
      "layer1_psychology": "人類總把「十進位」當成宇宙真理，其實如果我們是只有八根手指的卡通人物，數學課本就會是八進位。理解「進位制只是記數的包裝，不改變數量本質」，能徹底打破認知僵化。對電子元件而言，要精準區分十種不同電壓極易出錯，但區分「通電（1）」與「斷電（0）」幾乎萬無一失，這正是數位時代的物理基石。",
      "layer2_anecdote": "佩措爾德在書中巧妙帶領讀者體會不同進位制：卡通人物只有八根手指用八進位，龍蝦只有四隻螯用四進位，而電燈開關只有開與關兩種狀態，正好對應萊布尼茨推崇的二進位（Binary）。他甚至示範了如何只用雙手手指「伸直代表 1、彎曲代表 0」，光靠一隻手就能數到 31，雙手並用更能精準數到 1023，瞬間讓抽象的位元（Bit）變得觸手可及。",
      "layer3_action": "【用二進位思維拆解複雜選擇】：\n1. 練習「非此即彼」決策樹：面對十幾個混亂選項時，強迫自己用連串的「是／否」二分法逐步過濾。\n2. 理解「位元翻倍」的指數威力：記住每增加一個獨立維度（1 bit），系統能區分的狀態數量就會翻倍。\n3. 在繁雜報表中提取核心布林指標：先確認關鍵條件是否達標（True/False），再看細微數值。",
      "quote_zh": "我們之所以用十進位數數，純粹是因為剛好長了十根手指；而電力只偏愛兩種狀態：開與關。"
    },
    {
      "num": 3,
      "part": 2,
      "part_title": "第二篇：繼電器、邏輯閘與加法器",
      "title_zh": "電報、繼電器與布林邏輯閘",
      "title_en": "Telegraphs, Relays, and Logic Gates",
      "principle_zh": "用微弱電流控制開關去驅動另一組強電流的繼電器，讓機器擁有了邏輯判斷能力",
      "principle_en": "The humble electromagnetic relay bridged long-distance communication and automated Boolean logic gates.",
      "quote": "A relay is simply a switch controlled by electricity instead of a human finger—and that changes everything.",
      "layer1_psychology": "從「人手按開關」到「電流自動按開關」，是人類工程史上最驚險也最偉大的一躍。一旦開關不再需要人類手指去撥動，而是由上一段電路輸出的電流透過電磁鐵去吸合下一段開關，訊號不僅能無限接力放大、跨越洲際，更能透過串聯與並聯組合出 AND（且）、OR（或）、NOT（非）等邏輯閘，賦予死物初步的「推理」能力。",
      "layer2_anecdote": "十九世紀中葉電報線越拉越長，電阻導致遠端電流微弱到推不動打字機。莫爾斯團隊發明了「繼電器」（Relay）：微弱的遠端電流只需吸合一個輕巧的電磁鐵開關，就能接通本地強大的新電池繼續把訊號送往下一站。幾十年後，麻省理工學生克勞德·夏農在碩士論文中驚人地證明，這些電報繼電器的串並聯電路竟然完全等價於布爾代數的邏輯運算！",
      "layer3_action": "【建立工作流程中的「邏輯閘」】：\n1. 串聯（AND 閘）把關：高風險任務必須同時滿足「條件 A 確認」且「條件 B 覆核」才放行。\n2. 並聯（OR 閘）備援：關鍵系統或重要約定不可依賴單一通道，至少設計兩條獨立觸發路徑。\n3. 善用「繼電器放大」效應：用自己的一小段專注決策（微弱訊號），觸發自動化腳本或團隊分工去完成重活。",
      "quote_zh": "繼電器不過是一個由電流而非人類手指控制的開關——而正是這一點改變了一切。"
    },
    {
      "num": 4,
      "part": 2,
      "part_title": "第二篇：繼電器、邏輯閘與加法器",
      "title_zh": "用開關相加：從邏輯閘到二進位加法器",
      "title_en": "Adding with Switches: The Binary Adder",
      "principle_zh": "看似神奇的電腦算術，本質上只是數十個基本邏輯閘按進位規則拼接而成的電路",
      "principle_en": "Arithmetic inside a computer is nothing more than simple logic gates wired together to handle sums and carries.",
      "quote": "Once you build a one-bit full adder from a handful of gates, you have unlocked the heart of all digital computation.",
      "layer1_psychology": "多數人對電腦能算出圓周率小數點後幾兆位感到敬畏，彷彿晶片裡住著小精靈。佩措爾德透過極其紮實的電路圖拆解，將神秘感徹底祛魅：電腦根本不懂「數學意義上的加法」，它只是利用 XOR（互斥或）閘算出本位結果，再用 AND 閘算出是否需要「進位」，把八個一位元全加器首尾相接，電流流過的一瞬間，答案就物理性地出現在燈泡亮滅上。",
      "layer2_anecdote": "書中帶領讀者親手組裝「半加器」與「全加器」：當兩個開關同時按下（1+1），本位燈熄滅（0）而進位燈亮起（1），正好寫成二進位的「10」（也就是十進位的 2）。更巧妙的是，透過「二補數」（Two's Complement）編碼，電腦連減法電路都省了，只要把減數每位反轉再加 1，就能直接用同一套加法器完成減法運算，極致體現工程節約。",
      "layer3_action": "【用「模組化全加器」思維建構系統】：\n1. 把複雜工程拆成最小可複用單元：先做好一個極度可靠的「一位元全加器」，再透過串接放大規模。\n2. 尋找「化減為加」的統一介面：像二補數統一加減法一樣，盡量讓不同類型的請求走同一套標準處理管線。\n3. 檢查「進位鏈」瓶頸：在串聯式工作流中，留意上一步的輸出是否卡住了後面所有環節。",
      "quote_zh": "一旦你用幾個邏輯閘搭出了一個一位元全加器，你就解鎖了所有數位計算的核心秘密。"
    },
    {
      "num": 5,
      "part": 3,
      "part_title": "第三篇：記憶迴路與現代計算機誕生",
      "title_zh": "回饋迴路與正反器：讓電路擁有記憶",
      "title_en": "Feedback and Flip-Flops: Storing a Single Bit",
      "principle_zh": "當電路的輸出回頭連回自己的輸入，物質便獲得了跨時間保存過去狀態的「記憶」",
      "principle_en": "By feeding a circuit's output back into its own input, electrical gates gain the miraculous power of memory.",
      "quote": "Memory is born the moment a circuit learns to remember what happened after the finger leaves the switch.",
      "layer1_psychology": "普通的電燈開關只要手指放開、按鈕彈回，燈就滅了——這樣的電路只有「當下」，沒有「過去」。計算機之所以能執行多步驟程式，全靠「回饋」（Feedback）這個魔法：把兩個反向邏輯閘的輸出交叉接回對方的輸入端，形成一個鎖存狀態的「正反器」（Flip-Flop）。即使觸發脈衝早已消失，電路依然能忠實記住自己剛才處於 0 還是 1。",
      "layer2_anecdote": "佩措爾德從兒童惡作劇般的「自鎖蜂鳴器」講起：繼電器通電後切斷自己的電源，導致不斷震盪嗡嗡作響（這正是 CPU 時脈振盪器的雛形）；接著他把兩個 NOR 閘交叉相連組成 RS 正反器，只要按一下「設定」鍵，燈就永遠亮著，直到按「重置」鍵才熄滅。將幾億個這種微縮版的正反器或電容陣列整齊排成矩陣，就成了我們電腦裡的 RAM 記憶體。",
      "layer3_action": "【打造個人與系統的「防遺忘正反器」】：\n1. 建立可靠的狀態持久化：別依賴大腦暫存工作進度，養成任務一有變動就即時寫入外部紀錄（Reset/Set）。\n2. 設計節奏穩定的「系統時脈」：像振盪器驅動 CPU 同步般，為自己設定固定的每日啟動與覆盤節拍。\n3. 善用正向回饋鎖存好習慣：透過環境提示與即時成就感，讓良性行為自我維持。",
      "quote_zh": "當電路學會在手指離開開關後依然記住剛才發生了什麼，記憶就此誕生。"
    },
    {
      "num": 6,
      "part": 3,
      "part_title": "第三篇：記憶迴路與現代計算機誕生",
      "title_zh": "從機械碼、ASCII 到現代作業系統",
      "title_en": "Automation, Machine Code, and Operating Systems",
      "principle_zh": "把指令與數據一起放進記憶體，並透過層層抽象封裝，成就了通用圖靈機的無限可能",
      "principle_en": "Storing instructions alongside data in memory and layering abstractions transformed fixed circuits into universal machines.",
      "quote": "The stored-program computer erased the line between hardware and software, letting one machine become anything we imagine.",
      "layer1_psychology": "早期計算機每次換題目都得重新拔插幾百條電線。馮·諾依曼架構的驚世創舉，在於把「做什麼的指令（程式）」也編成二進位數字，和數據一起存進記憶體裡。處理器只需隨著時脈不斷執行「讀取指令 ➔ 解碼 ➔ 執行」的循環。隨後 ASCII 文字編碼、組合語言、高階語言與作業系統層層疊加，讓人類得以站在巨人的抽象肩膀上自由創造。",
      "layer2_anecdote": "書末佩措爾德把前面所有繼電器、加法器、時脈與記憶體連成一台完整的 8 位元自動化計算機。過去要靠人工撥動幾十個開關才能算完一串數字加法，現在只要在記憶體寫入 10h（讀取）、20h（相加）、30h（寫回）等機器碼，機器就能自動連續完成數千筆運算。從 1970 年代 Altair 8800 的撥動開關到今日圖形介面，底層原理竟完全一致。",
      "layer3_action": "【運用「層層抽象」駕馭複雜專業】：\n1. 理解底層至少一層：使用高階工具或框架時，花點時間弄懂它往下一層的運作原理，排錯能力會倍增。\n2. 把重複指令寫成可存儲的「程式」：將經常手動執行的工作流整理成 SOP、範本或自動化腳本。\n3. 善用標準介面解耦：確保不同模組之間透過清晰的約定（如 ASCII/API）溝通，方便日後單獨升級。",
      "quote_zh": "儲存程式型計算機抹去了硬體與軟體之間的界線，讓同一台機器得以化身為我們想像中的任何事物。"
    }
  ],
  "conclusion": {
    "title": "全書深度總結：從手電筒的閃光到矽晶片的心跳，親手揭開計算機的神秘面紗",
    "core_takeaway": "《編碼：隱匿在計算機背後的語言》是電腦科學領域公認最具人文溫度與啟發性的經典。佩措爾德沒有直接拋出枯燥的架構圖，而是邀請讀者從街對面朋友間的手電筒暗號與盲人六點字開始，一路體會編碼與二進位的必然性；接著親手用電磁繼電器搭出邏輯閘、全加器與具有記憶能力的正反器，最終見證硬體電路如何在儲存程式與層層抽象中「活」過來，徹底消除了人與數位世界之間的隔閡。",
    "key_pillars": [
      "編碼是溝通的共同約定（第 1 章）：從手電筒摩斯密碼到布萊葉六點字，資訊傳遞的核心在於將意義映射為抗干擾的物理狀態。",
      "二進位是電力的天選語言（第 2 章）：十進位源於人類十根手指的偶然，而只有開與關兩種狀態的二進位才是電子開關最可靠的基礎。",
      "繼電器與布林邏輯的合流（第 3 章）：用電流控制電流的繼電器實現了訊號接力，更完美對應布爾代數的 AND、OR、NOT 邏輯運算。",
      "邏輯閘拼接出算術心臟（第 4 章）：電腦不懂算術哲理，它只是用 XOR 與 AND 閘組裝出一位元全加器，並藉二補數統一加減運算。",
      "回饋迴路催生出記憶（第 5 章）：當邏輯閘的輸出交叉接回輸入構成正反器，電路便擁有了跨越時間保存狀態的 RAM 記憶能力。",
      "儲存程式與層層抽象奇蹟（第 6 章）：將指令當成數據存入記憶體，再疊加 ASCII、編譯器與作業系統，讓通用計算機得以承載無限想像。"
    ],
    "action_plan": "將《編碼》的底層思維融入日常學習與工程實踐：第一，每當對新技術感到畏懼或困惑時，練習「往下拆解一層」，問自己它最底層的輸入輸出與二元邏輯是什麼；第二，在團隊協作與個人自動化中，學習布萊葉點字與 ASCII 的精神，為高頻溝通建立簡潔無歧義的標準編碼；第三，把重複性任務固化為「可儲存、可複用的腳本或清單」，讓自己騰出心力去設計更高層次的架構。"
  }
});

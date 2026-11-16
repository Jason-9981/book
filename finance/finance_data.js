// 好書研究所 by AJ Studio - 獨立財經投資專欄與香港實戰工具資料庫 (v1.8)
// 模組化設計：與 books/*.js 完全獨立，互不干擾

window.FINANCE_COLUMN_DATA = {
  version: "v1.8",
  updated: "2026-11-13",
  disclaimer: "本專欄所有數據、模型及計算結果僅供財商教育、歷史統計研究及模擬試算用途，並不構成任何投資建議、要約或買賣招攬。投資涉及風險，證券價格可升可跌，過往表現不代表將來回報。",
  articles: [
    {
      id: "wave_elliott",
      badge: "🌊 波浪理論與實戰",
      badgeColor: "bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300",
      title: "艾略特波浪理論：目前恒指身處邊個位置？下一步高低位推演",
      authority: "支撐名著／理論：Ralph Nelson Elliott《波浪理論 (The Wave Principle)》・《隨機騙局》風險控管・恒生指數 52 週波幅統計",
      summary: "拆解「五升三跌」八浪完整結構與黃金分割比率，並結合 2026 年 11 月恒指由 28,056 點回調至 24,000 點關口嘅最新走勢，推演下一步兩個關鍵劇本與高低位座標。",
      keyPoints: [
        "【八浪結構與三大鐵律】一個完整週期由 5 個推動浪（1、3、5 上升；2、4 調整）與 3 個修正浪（A、B、C 下跌）組成。鐵律：① 第 2 浪不可跌穿第 1 浪底；② 第 3 浪絕不能是最短推動浪；③ 第 4 浪底不可重疊第 1 浪頂。調整浪常見回撤黃金比率為 0.382、0.5 或 0.618。",
        "【目前恒指身處波浪位置（2026年11月座標）】恒指過去 52 週高低位介乎 22,518 點至 28,056 點；自 28,056 點高位回落後，曾下探 22,803 點附近，近期反彈至 24,871 點受阻並於 24,000 點關口整固。從中線數浪睇，大市正處於「第 4 浪平台整固」或「大 B 浪反彈後嘅方向抉擇期」，短線關鍵支持位在 23,600–23,900 點裂口區。",
        "【下一步劇本 A（向上突破 → 展開第 5 浪）】若恒指能守穩 23,600–23,900 點支持區，並配合大成交企穩 24,900–25,100 點（反彈 0.618 關鍵阻力），即有機會展開最後一段第 5 浪升勢，目標上試 26,200 點，甚至重測前頂 28,000 點區域。",
        "【下一步劇本 B（失守支持 → 進入 C 浪尋底）】相反，若恒指放量跌穿 23,600 點並進一步失守 22,500–22,800 點（52 週低位防線），則確認之前反彈只屬修正 B 浪，市場將進入下跌 C 浪，下方需留意 21,200–21,800 點（0.618–0.786 深層回撤支持區）。實戰上切忌單靠數浪重倉博邊一邊，應設好止蝕及分批應對。"
      ],
      sources: [
        { label: "Investing.com：恒生指數 52 週高低位與歷史數據", url: "https://hk.investing.com/indices/hang-sen-40-historical-data" },
        { label: "HKET 投資學人：波浪理論數浪教學", url: "https://www.youtube.com/watch?v=Vx3jNCVvsnk" }
      ]
    },
    {
      id: "value_investing_hk",
      badge: "💎 價值投資選股",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300",
      title: "價值投資核心準則：現時香港股市哪些股票納入篩選？",
      authority: "支撐名著／理論：Benjamin Graham《聰明的投資者》・Warren Buffett 護城河理論・Howard Marks《投資最重要的事》",
      summary: "將格雷厄姆「安全邊際」與巴菲特「護城河＋自由現金流」量化為香港股市 5 大選股門檻，盤點符合價值準則的港股藍籌代表。",
      keyPoints: [
        "【五大港股價值篩選準則】① 市盈率 (P/E) 低於 10–12 倍或低於行業歷史均值；② 市帳率 (P/B) 合理且具真實資產支撐；③ 連續 5 年以上穩定派息且股息率 ≥ 5%；④ 淨負債率低、經營現金流長期為正；⑤ 擁有牌照、規模或國策級護城河。",
        "【銀行與金融龍頭】滙豐控股 (0005.HK)、中銀香港 (2388.HK) 受惠高息環境下淨息差表現及穩定派息政策，資本充足率高，屬傳統港股收息價值核心。",
        "【電訊與能源現金牛】中國移動 (0941.HK) 擁有龐大自由現金流與高派息率承諾（2026 年股息率約 6.7%–6.9%）；中國海洋石油 (0883.HK) 開採成本具全球競爭力，現金流充沛。",
        "【公用事業防禦盾】中電控股 (0002.HK)、電能實業 (0006.HK) 業務受管制協議或全球基建支持，盈利能見度高，適合在經濟週期逆轉時提供穩定現金流與低波幅緩衝。"
      ],
      sources: [
        { label: "MoneyHero：高息港股藍籌排行榜與派息比較", url: "https://www.moneyhero.com.hk/zh/investment/blog/%E9%AB%98%E6%81%AF%E8%82%A1-%E6%8E%92%E8%A1%8C%E6%A6%9C-%E8%97%8D%E7%B1%8C%E8%82%A1" },
        { label: "HKET：中國移動 (0941) 派息安全性與估值分析", url: "https://invest.hket.com/article/4199353/china-mobile-00941-high-dividend-ai-computing-valuation" }
      ]
    },
    {
      id: "hk_etf_ranking",
      badge: "📊 香港 ETF 攻略",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300",
      title: "香港 ETF 回報與效率大檢閱：邊類 ETF 表現最突出？",
      authority: "支撐名著／理論：John Bogle《約翰柏格投資常識》・港交所 (HKEX) ETP 市場報告・南向 ETF 通數據",
      summary: "按「大市核心、科技增長、傳統高息、備兌期權收息」四大賽道拆解香港上市 ETF，幫你揀選低費率、高流動性且配合自己風險承受力的工具。",
      keyPoints: [
        "【大市核心基準】盈富基金 (2800.HK) 緊貼恒生指數，香港成交最活躍、追蹤誤差極低，派息率約 3.3%–3.5%，適合長線定期定額建立港股底倉；國指 ETF (2828.HK) 則側重中資龍頭。",
        "【科技高彈性引擎】南方東英恒生科技指數 ETF (3033.HK) 及安碩恒生科技 (3067.HK) 追蹤 30 隻港股科技龍頭，3033.HK 在南向 ETF 通市佔率領先，升市爆發力最強，但波幅極大，宜配合分段買入。",
        "【傳統高息 ETF 代表】Global X 恒生高股息率 ETF (3110.HK) 精選 50 隻淨股息率最高港股及 REITs（年化息率約 5.9%–7%+）；平安香港高息股 ETF (3070.HK) 同樣主打高息藍籌，免卻單一選股踩雷風險。",
        "【備兌期權高息新星 (Covered Call)】Global X 國指備兌認購期權主動型 ETF (3416.HK) 透過持有成份股同時賣出認購期權收取期權金，月月派息年化可達雙位數（約 15%–17%），在橫行或微跌市表現抗跌；但大升市時回報會被期權行使價封頂，且需留意除淨後股價波動及管理費（約 0.75%）。"
      ],
      sources: [
        { label: "Global X HK：恒生高股息率 ETF (3110)", url: "https://www.globalxetfs.com.hk/zh-hant/funds/hang-seng-high-dividend-yield-etf/" },
        { label: "Global X HK：國指備兌認購期權 ETF (3416)", url: "https://www.globalxetfs.com.hk/zh-hant/funds/hscei-covered-call-etf/" },
        { label: "南方東英：ETF 通數據與 3033.HK 表現", url: "https://www.csopasset.com/tc/insights/etf-connect.html" }
      ]
    },
    {
      id: "dividend_stock_vs_etf",
      badge: "⚖️ 策略對決",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300",
      title: "傳統高息藍籌股 vs 傳統高息 ETF vs 備兌期權 ETF 全面對比",
      authority: "支撐名著／理論：《反脆弱》槓鈴策略・HKET 理財高息工具研究",
      summary: "收息唔止睇表面息率！從分散度、管理費、升市潛力、賺息蝕價風險四個維度，比較自組藍籌股收息與買入高息 ETF 嘅真正分別。",
      keyPoints: [
        "【自組高息藍籌（如 0005 / 0941 / 0883 / 0002）】優點係零管理費、長線息價齊升潛力最高；缺點係入場費較高（每手數千至數萬元）、需自行追蹤業績，一旦個別公司削息（例如昔日地產或公用股逆風）會直接衝擊現金流。",
        "【傳統高息 ETF（如 3110 / 3070）】一籃子持有 30–50 隻高息股，自動汰弱留強，入場門檻低（數千元一手），適合唔想花時間研究財報嘅上班族；每年管理費約 0.55%–0.68%。",
        "【備兌高息 ETF（如 3416 / 3555）】派息頻率最高（月月派息）且息率極吸引，靠期權金緩衝跌市；但本質係「將未來大升嘅資本增值空間折現成每月現金流」，若港股爆升，總回報有機會跑輸純現貨 2800 或傳統高息股。",
        "【黃金配搭建議】用《反脆弱》槓鈴思維：底倉放 50%–60% 傳統高息藍籌／3110 守住本金同派息，配 20%–30% 2800／3033 捕捉升浪，剩餘 10%–20% 先考慮用 3416 增強每月現金流。"
      ],
      sources: [
        { label: "HKET：12隻港股派息ETF大比拼", url: "https://wealth.hket.com/article/4179859/high-dividend-etf-hong-kong-monthly-income-etf-yield-comparison-2026" },
        { label: "3416 與 3110 傳統高息 ETF 機制對比", url: "https://www.25y-retirement.com/post-1/%E3%80%903416%E8%88%873110%E5%B0%8D%E6%AF%94%E3%80%91%E5%82%B3%E7%B5%B1%E9%AB%98%E6%81%AFetf%E5%B0%8D%E6%B1%BAcovered-call-etf-%E9%A2%A8%E9%9A%AA%E3%80%81%E5%9B%9E%E5%A0%B1%E3%80%81%E6%88%90%E4%BB%BD%E8%82%A1%E3%80%81%E6%A9%9F%E5%88%B6%E8%A9%B3%E7%B4%B0%E6%AF%94%E8%BC%83" }
      ]
    },
    {
      id: "tech_stats_cycle",
      badge: "📐 統計與指標",
      badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300",
      title: "技術指標、統計學與週期關係：點解唔可以單睇一個指標？",
      authority: "支撐名著／理論：John Murphy《金融市場技術分析》・Nassim Taleb《反脆弱》＆《隨機騙局》",
      summary: "揭開移動平均線、RSI、MACD 同布林通道背後嘅統計學原理（均值回歸與標準差），教你分辨「隨機雜訊」定「真正週期轉勢」。",
      keyPoints: [
        "【移動平均線 (MA) 與均值回歸】MA20（月線）、MA50（季線）及 MA250（年線／牛熊分界線）本質係價格嘅滾動統計平均數。當現價遠高於 MA250 超過 20% 以上，統計上極易出現均值回歸回調。",
        "【布林通道 (Bollinger Bands) 的常態分佈】中軸為 20 日均線，上下軌為 ±2 個標準差（2σ）。統計學上約 95% 價格波動會落喺通道內，突破上軌伴隨成交縮減往往反映短期過度偏離。",
        "【動能指標 RSI 與 MACD】RSI 衡量買賣雙方連續 N 日升跌幅比率，>70 為統計超買、<30 為超賣；MACD 利用快慢指數移動平均線（EMA12 與 EMA26）差值捕捉趨勢轉折，配合底背馳（價格新低但 MACD 抬高）準確度大增。",
        "【肥尾風險警示】正如《隨機騙局》提醒，金融市場回報並非完美正態分佈，黑天鵝出現時 RSI 可以長期鈍化（跌完再跌）。技術指標必須配合倉位管理與估值安全邊際一齊用。"
      ],
      sources: [
        { label: "技術指標與波浪理論應用", url: "https://www.eslite.com/product/1001253672210258" }
      ]
    },
    {
      id: "hsi_pe_valuation",
      badge: "🌡️ 估值溫度計",
      badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300",
      title: "歷史平均線重疊分析：今日恒指市盈率 (P/E) 屬於平定貴？",
      authority: "支撐名著／理論：Howard Marks《掌握市場週期》・HKEX / 恒指公司長期歷史 P/E 數據（1997–2026）",
      summary: "將今日恒生指數 P/E 同過去 20 至 30 年歷史均值及 ±1 標準差重疊對比，睇清香港市場正處於恐慌折讓區、均值平衡區定係過熱泡沫區。",
      keyPoints: [
        "【恒指長期歷史 P/E 座標】自 1997 年至今，恒生指數歷史 P/E 波動區間大致介乎 6.7 倍（極端危機底）至 24.2 倍（大牛市頂）。1997–2020 長期均值約 14.09 倍；計入近年科網與中資架構調整，近 10–15 年長期均值約 10.6 至 11.5 倍。",
        "【估值分層四部曲】① < 9.5 倍（極度便宜／黃金恐慌區，過往每次跌穿 9 倍後 2–3 年勝率極高）；② 9.5 – 11.5 倍（合理偏平區，具分批吸納價值）；③ 11.5 – 14.5 倍（均值平衡區，宜按企業盈利增長精選個股）；④ > 15.5 倍（偏貴警戒區，應逐步套現或轉向防禦）。",
        "【2026 年最新位置對照】截至 2026 年 11 月初，恒指 P/E 約 11.16 倍、市帳率 (P/B) 約 1.12 倍、股息率約 3.38%，處於近 10 年約 61% 歷史百分位——比 2022–2024 年極端低谷回升，但相比美股標普 500（約 21–23 倍）仍有顯著估值折讓。",
        "【重疊股債息差校準】單睇 P/E 未夠全面，仲要計「恒指盈利收益率 (1 ÷ P/E) 減 10 年期美債息率」。當 11.16 倍 P/E 對應近 9% 盈利收益率，仍然明顯高於無風險利率時，長線資金配置吸引力依然存在。"
      ],
      sources: [
        { label: "雪球基金：恒生指數最新估值與歷史百分位", url: "https://danjuanfunds.com/dj-valuation-table-detail/HKHSI?ref=moneyhk101.com" },
        { label: "Longbridge：恒生指數 P/E 歷史區間與估值指南", url: "https://longbridge.com/zh-HK/academy/hk-stocks/blog/hsi-forward-p-e-understanding-hong-kong-market-valuation-100502" },
        { label: "Endowus：恒生指數歷史回報與 2026 P/E 分析", url: "https://endowus.com/zh-hk/insights/hang-seng-index-historical-returns-volatility" }
      ]
    }
  ],
  // 預設香港投資工具數據（供計算機與模擬器使用）
  hkInstruments: [
    { id: "time_deposit", name: "港元銀行定期 / 貨幣基金", ticker: "Cash / MMF", totalReturn: 3.2, divYield: 3.2, risk: "極低", color: "bg-slate-500", desc: "保本流動性高，但難跑贏長線通脹" },
    { id: "hsi_2800", name: "盈富基金 (大市核心指數)", ticker: "2800.HK", totalReturn: 7.0, divYield: 3.4, risk: "中", color: "bg-sky-500", desc: "緊貼恒指 80+ 隻藍籌，費率極低" },
    { id: "high_div_3110", name: "GX 恒生高股息率 ETF", ticker: "3110.HK", totalReturn: 7.5, divYield: 6.0, risk: "中偏穩", color: "bg-emerald-500", desc: "分散 50 隻高息港股，年化息率約 6%" },
    { id: "blue_chip_div", name: "傳統高息藍籌組合 (0005/0941/0002)", ticker: "Blue Chips", totalReturn: 8.0, divYield: 5.8, risk: "中", color: "bg-teal-500", desc: "零管理費，長線兼享股息增長與估值修復" },
    { id: "covered_3416", name: "GX 國指備兌期權高息 ETF", ticker: "3416.HK", totalReturn: 10.5, divYield: 14.0, risk: "中高", color: "bg-amber-500", desc: "月月高派息，但大升市回報受期權封頂" },
    { id: "tech_3033", name: "恒生科技指數 ETF (增長引擎)", ticker: "3033.HK / 3067.HK", totalReturn: 9.8, divYield: 0.8, risk: "高", color: "bg-purple-500", desc: "高波幅高增長潛力，宜作槓鈴進攻端" }
  ]
};

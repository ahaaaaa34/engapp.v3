// data.js — STEP 01: 時制 (Tense)

const QUIZ_DATA = {

  /* ───── FRAME 001–009 ───── */
  frames: [
    {
      id: 'f001', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 001', tagClass: 'tag-f',
      question: 'I ( ) in France for three years when I was a child, but I can\'t speak French at all.',
      options: ['have been', 'lived', 'have once stayed', 'went'],
      answer: 1, source: '奥羽大',
      translation: '私は子どものころ、3年間フランスに住んでいたが、フランス語はまったく話せない。',
      explanation: 'when以下より過去の内容であることがわかるので、過去形②livedを選ぶ。現在完了形は今の状況を示すので、①、③は誤り。④went「行った」はfor three years「3年間」と合わないので、誤り。'
    },
    {
      id: 'f002', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 002', tagClass: 'tag-f',
      question: 'He ( ) the book when I came here.',
      options: ['will read', 'was reading', 'has read', 'has been reading'],
      answer: 1, source: '東京農業大',
      translation: '私がここに来たとき、彼は本を読んでいた。',
      explanation: '空所に入る語はwhen以下が表す過去のある時点で進行していた動作を表すので、過去進行形②was readingを選ぶ。'
    },
    {
      id: 'f003', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 003', tagClass: 'tag-f',
      question: 'We will go outside when it ( ) raining.',
      options: ['stop', 'stops', 'stopping', 'stopped'],
      answer: 1, source: '東海大',
      translation: '雨があがったら、私たちは出かけるだろう。',
      explanation: 'when節は時を表す副詞節なので、未来のことでも現在形を用いる。主語itが3人称単数なので、②stopsを選ぶ。'
    },
    {
      id: 'f004', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 004', tagClass: 'tag-f',
      question: 'She ( ) the flower arrangement club.',
      options: ['belongs', 'belongs to', 'is belonging', 'is belonging to'],
      answer: 1, source: '共立女子大',
      translation: '彼女は華道部に所属している。',
      explanation: 'belong「所属する」は〈状態〉を表す動詞であり、原則として進行形にはできないので、現在形②belongs toを選ぶ。'
    },
    {
      id: 'f005', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 005', tagClass: 'tag-f',
      question: 'She was ( ) to go out when it started raining.',
      options: ['almost', 'anyway', 'all', 'about'],
      answer: 3, source: '駒澤大',
      translation: '雨が降り出したとき、彼女は外出しようとしていたところだった。',
      explanation: 'be about to doで「まさに…するところだ」という意味を表すので、④aboutを選ぶ。'
    },
    {
      id: 'f006', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 006', tagClass: 'tag-f',
      question: 'It ( ) three years since the severe drought caused damage in the area.',
      options: ['has', 'is being', 'has been', 'has being'],
      answer: 2, source: '大東文化大',
      translation: '深刻な干ばつがその地域に被害を与えてから3年になる。',
      explanation: '「深刻な干ばつがその地域に被害を与えて」から現在までの〈状態の継続〉を表すように、現在完了形③has beenを選ぶ。'
    },
    {
      id: 'f007', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 007', tagClass: 'tag-f',
      question: 'Since Bob graduated from college last year, he ( ) around Asia.',
      options: ['is traveling', 'had been traveling', 'has been traveling', 'was traveling'],
      answer: 2, source: '玉川大',
      translation: 'ボブは去年大学を卒業して以来、アジア中をずっと旅行している。',
      explanation: '「ボブが去年大学を卒業して」から現在まで、「旅行する」という動作が継続していることを表すように、現在完了進行形③has been travelingを選ぶ。'
    },
    {
      id: 'f008', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 008', tagClass: 'tag-f',
      question: 'Before I arrived at the airport, the plane ( ).',
      options: ['had left', 'has left', 'will be left', 'will have left'],
      answer: 0, source: '奥羽大',
      translation: '私が空港に着く前に、飛行機は出発してしまっていた。',
      explanation: '「私が空港に着いた」ときより前に、飛行機が「出発してしまっていた」ということなので、過去完了形①had leftを選ぶ。'
    },
    {
      id: 'f009', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 009', tagClass: 'tag-f',
      question: 'By next week you ( ) the package.',
      options: ['will have received', 'receiving', 'received', 'have received'],
      answer: 0, source: '南山大',
      translation: '来週までに、あなたは小包を受け取っているだろう。',
      explanation: 'By next weekより、未来のある時点までの〈完了〉を表す、未来完了形①will have receivedを選ぶ。'
    }
  ],

  /* ───── EXERCISE A 01–02 ───── */
  exA: [
    {
      id: 'a01', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 01', tagClass: 'tag-a',
      question: 'The famous author ( ) the science fiction novel two years ago.',
      options: ['has been writing', 'writes', 'wrote', 'has written'],
      answer: 2, source: '東海大',
      translation: 'その有名な作家は2年前にそのSF小説を書いた。',
      explanation: 'two years agoと過去のある時点を表す表現があるので、過去形③wroteを選ぶ。現在完了形を用いることはできないので、④has writtenは不可。'
    },
    {
      id: 'a02', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 02', tagClass: 'tag-a',
      question: 'Sandy ( ) in the library when I saw her two hours ago.',
      options: ['was studying', 'has studied', 'has been studying', 'is studying'],
      answer: 0, source: '北里大',
      translation: '私がサンディーを2時間前に見かけたとき、彼女は図書館で勉強していた。',
      explanation: 'when以下が過去のある時点を表しているので、その時点で進行していた動作を表すように、過去進行形①was studyingを選ぶ。'
    },
    {
      id: 'a03', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 03', tagClass: 'tag-a',
      question: 'My brother ( ) beaten by me at tennis.',
      options: ['has never been', 'never have been', 'has been never', 'have never been'],
      answer: 0, source: '桜美林大',
      translation: '私の兄は私にテニスで一度も負けたことがない。',
      explanation: '現在完了の否定文で「一度も〜したことがない」という経験の否定を表す。主語はMy brotherなので①has never beenを選ぶ。'
    },
    {
      id: 'a04', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 04', tagClass: 'tag-a',
      question: "I'll wait here until you ( ).",
      options: ['will come back', 'come back', 'are coming back', 'will have come back'],
      answer: 1, source: '玉川大',
      translation: 'あなたが戻ってくるまで、ここで待ちます。',
      explanation: 'until節は時を表す副詞節なので、未来のことでも現在形を使う。②come backを選ぶ。'
    },
    {
      id: 'a05', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 05', tagClass: 'tag-a',
      question: 'You have to return the book as soon as you ( ) reading it.',
      options: ['are finishing', 'had finished', 'will finish', 'have finished'],
      answer: 3, source: '東京歯科大',
      translation: '読み終えたらすぐにその本を返さなければならない。',
      explanation: 'as soon as節は時を表す副詞節。「読み終えた」という完了を表すので現在完了形④have finishedを選ぶ。'
    },
    {
      id: 'a06', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 06', tagClass: 'tag-a',
      question: "I don't know if he ( ) us next Sunday.",
      options: ['visit', 'will visit', 'will have visit', 'visits'],
      answer: 1, source: '関西大',
      translation: '彼が来週日曜日に私たちを訪ねてくるかどうかわからない。',
      explanation: 'if節が「〜かどうか」という名詞節として使われているので、未来形②will visitを使える。'
    },
    {
      id: 'a07', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 07', tagClass: 'tag-a',
      question: 'Tom and Mary ( ) each other since childhood.',
      options: ['are knowing', 'have known', 'are known', 'know'],
      answer: 1, source: '松山大',
      translation: 'トムとメアリーは子どものころからお互いを知っている。',
      explanation: 'since childhoodがあり現在も継続。know〈状態〉を表すので現在完了形②have knownを選ぶ。'
    },
    {
      id: 'a08', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 08', tagClass: 'tag-a',
      question: 'I have just ( ) to Hakata Station to see my girlfriend off.',
      options: ['go', 'going', 'went', 'been'],
      answer: 3, source: '日本大',
      translation: '彼女を見送りに博多駅に行ってきたところです。',
      explanation: 'have just been to ～ で「〜へ行ってきたところ」という意味。④beenを選ぶ。'
    },
    {
      id: 'a09', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 09', tagClass: 'tag-a',
      question: 'My father usually ( ) home from work at 7:00 p.m.',
      options: ['coming', 'comes', 'come', 'has come'],
      answer: 1, source: '甲南大',
      translation: '父はたいてい午後7時に仕事から帰ってくる。',
      explanation: 'usuallyと現在の習慣を表す文なので、現在形②comesを選ぶ。'
    },
    {
      id: 'a10', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 10', tagClass: 'tag-a',
      question: 'At this time next Friday I ( ) in Canada.',
      options: ['am skiing', 'have skied', 'ski', 'will be skiing'],
      answer: 3, source: '大阪国際大',
      translation: '来週の金曜日のこの時間、私はカナダでスキーをしているでしょう。',
      explanation: '未来の特定時点で進行中の動作を表すので、未来進行形④will be skiingを選ぶ。'
    },
    {
      id: 'a11', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 11', tagClass: 'tag-a',
      question: '"Did you know that Albert Einstein, the famous physicist, ( ) meat?" "Yes, if my memory serves, he became a strict vegetarian one year before he died."',
      options: ["hadn't stopped eating", 'has been stopped from eating', 'has stopped eating', 'stopped eating'],
      answer: 3, source: 'センター試験',
      translation: '「有名な物理学者アルベルト・アインシュタインが肉を食べるのをやめたことを知っていましたか？」「はい、記憶が正しければ、彼は亡くなる1年前に厳格な菜食主義者になりました。」',
      explanation: 'one year before he diedという過去の一時点の出来事なので、過去形④stopped eatingを選ぶ。'
    },
    {
      id: 'a12', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 12', tagClass: 'tag-a',
      question: 'Emily was ( ) to go out when the telephone rang.',
      options: ['about', 'close', 'for', 'used'],
      answer: 0, source: '神奈川工業大',
      translation: '電話が鳴ったとき、エミリーはちょうど出かけようとしていた。',
      explanation: 'be about to doで「まさに〜しようとしているところ」という意味。①aboutを選ぶ。'
    },
    {
      id: 'a13', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 13', tagClass: 'tag-a',
      question: 'It ( ) ten years since the two companies merged.',
      options: ['has been', 'has passed', 'is passed', 'passed'],
      answer: 0, source: '青山学院大',
      translation: '2社が合併してから10年になる。',
      explanation: 'It has been ～ since ...で「...してから〜になる」という表現。①has beenを選ぶ。'
    },
    {
      id: 'a14', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 14', tagClass: 'tag-a',
      question: 'Since I forgot to pay the annual fee, this membership card ( ) last Monday.',
      options: ['expired', 'has expired', 'has been expired', 'has been expiring'],
      answer: 0, source: '杏林大',
      translation: '年会費を払うのを忘れたので、このメンバーズカードは先週月曜日に期限切れになった。',
      explanation: 'last Mondayという過去を示す表現があるので、過去形①expiredを選ぶ。'
    },
    {
      id: 'a15', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 15', tagClass: 'tag-a',
      question: 'Two months ( ) since Bob promised to pay his debt.',
      options: ['have passed', 'pass', 'passed', 'would pass'],
      answer: 0, source: '日本女子大',
      translation: 'ボブが借金を払うと約束してから2ヶ月が過ぎた。',
      explanation: 'since以下があり現在完了を使う。Two monthsが主語で①have passedを選ぶ。'
    },
    {
      id: 'a16', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 16', tagClass: 'tag-a',
      question: 'My father has been dead ( ) seven years.',
      options: ['since', 'in', 'on', 'for'],
      answer: 3, source: '東京工芸大',
      translation: '父は7年間ずっと亡くなっている。',
      explanation: '期間を表すforを使う。has been dead for seven yearsで「7年間ずっと亡くなっている状態が続いている」。④forを選ぶ。'
    },
    {
      id: 'a17', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 17', tagClass: 'tag-a',
      question: "Paul's yacht ( ) at Hawaii by the end of next March.",
      options: ['arrived', 'has arrived', 'used to arrive', 'will have arrived'],
      answer: 3, source: '日本大',
      translation: 'ポールのヨットは来年3月末までにはハワイに到着しているでしょう。',
      explanation: 'by the end of next Marchは未来の期限を示すので、未来完了形④will have arrivedを選ぶ。'
    },
    {
      id: 'a18', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 18', tagClass: 'tag-a',
      question: 'We are all tired of snow. It ( ) for four weeks now.',
      options: ['has been snowing', 'is snowing', 'snowed', 'will be snowing'],
      answer: 0, source: '明治大',
      translation: '私たちは皆、雪にうんざりしています。今や4週間ずっと雪が降り続けています。',
      explanation: 'for four weeks nowで継続を表すので、現在完了進行形①has been snowingを選ぶ。'
    },
    {
      id: 'a19', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 19', tagClass: 'tag-a',
      question: "She didn't want to go to the movies with us because she ( ) the film before.",
      options: ['had seen', 'sees', 'was seen', 'will see'],
      answer: 0, source: '明星大',
      translation: '彼女は以前にその映画を見ていたので、私たちと映画を見に行きたくなかった。',
      explanation: "過去の時点（didn't want）よりさらに前のことを表すので、過去完了①had seenを選ぶ。"
    },
    {
      id: 'a20', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 20', tagClass: 'tag-a',
      question: 'They ( ) here until quite recently.',
      options: ['been', 'were', 'will be', 'are'],
      answer: 1, source: '上智大',
      translation: '彼らはつい最近までここにいた。',
      explanation: 'until quite recentlyが過去を示すので、過去形②wereを選ぶ。'
    },
    {
      id: 'a21', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 21', tagClass: 'tag-a',
      question: 'His mother and father ( ) already when he showed up.',
      options: ['are leaving', 'have been left', 'had left', 'will be leaving'],
      answer: 2, source: '東海大',
      translation: '彼が現れたとき、彼の母と父はすでに去っていた。',
      explanation: '過去の時点（when he showed up）よりさらに前に去っていたことを表すので、過去完了③had leftを選ぶ。'
    }
  ],

  exB: [
    {
      id: 'b01', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 01', tagClass: 'tag-b',
      question: 'We ①will notify you ②as soon as we ③will have further ④information.',
      errorNum: 3, errorText: 'will have', correction: 'have',
      source: '学習院大',
      translation: 'さらに情報があり次第、お知らせします。',
      explanation: 'as soon as節は時を表す副詞節なので、未来形は使えない。③will have → have に直す。'
    },
    {
      id: 'b02', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 02', tagClass: 'tag-b',
      question: '①When Mr. Brown came to the school ②in 1980, Ms. Carter ③has already been teaching there ④for ten years.',
      errorNum: 3, errorText: 'has already been teaching', correction: 'had already been teaching',
      source: '東海大',
      translation: 'ブラウン先生が1980年にその学校に来たとき、カーター先生はすでに10年間そこで教えていた。',
      explanation: 'in 1980という過去の時点より前から継続していたことを表すので、③has already → had already（過去完了進行形）に直す。'
    },
    {
      id: 'b03', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 03', tagClass: 'tag-b',
      question: '①If it ②will rain tomorrow, our athletic meet ③will ④be put off.',
      errorNum: 2, errorText: 'will rain', correction: 'rains',
      source: '東海大',
      translation: 'もし明日雨が降れば、体育祭は延期されるでしょう。',
      explanation: 'if節は条件節で未来のことでも現在形を使う。②will rain → rains に直す。'
    },
    {
      id: 'b04', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 04', tagClass: 'tag-b',
      question: '①Many of the passengers ②have been sleeping when the pilot announced ③they were almost ④at the destination.',
      errorNum: 2, errorText: 'have been sleeping', correction: 'were sleeping',
      source: '麗澤大',
      translation: 'パイロットが目的地にほぼ到着したと告げたとき、乗客の多くは眠っていた。',
      explanation: 'when the pilot announcedという過去の時点での進行を表すので、②have been sleeping → were sleeping（過去進行形）に直す。'
    },
    {
      id: 'b05', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 05', tagClass: 'tag-b',
      question: 'By ①the ②1890s, the movement ③has ④spread to Europe and North America.',
      errorNum: 3, errorText: 'has', correction: 'had',
      source: '上智大',
      translation: '1890年代までに、その運動はヨーロッパと北米に広まっていた。',
      explanation: 'By the 1890sという過去の時点までの完了を表すので、③has → had（過去完了）に直す。'
    },
    {
      id: 'b06', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 06', tagClass: 'tag-b',
      question: 'For two years the play ①has been performed continuously ②at a small theater in NewYork, but then was ③turned into a Hollywood movie, ④appealing to audiences world wide.',
      errorNum: 1, errorText: 'has been performed', correction: 'had been performed',
      source: '中央大',
      translation: 'その演劇は2年間ニューヨークの小さな劇場で継続的に上演されていたが、そのときハリウッド映画に転換され、世界中の観客にアピールした。',
      explanation: 'but then was turned intoで過去の時点。それより前の継続を表すので、①has been performed → had been performed（過去完了進行形）に直す。'
    }
  ],
  exC: []
};

const EIGO_SENTENCES = [
  { en: "An endangered species is a group of animals or plants which could soon become extinct.", ja: "絶滅危惧種とは、まもなく絶滅しそうな動物や植物の一群です。", grammar: "which could soon become extinct は関係代名詞節。could は「〜するかもしれない」。" },
  { en: "Extinction happens when the last animal of the species has died out and there will be no more.", ja: "絶滅は、その種の最後の動物が死に絶え、もう存在しなくなったときに起こります。", grammar: "has died out は現在完了「死に絶えてしまった」。there will be no more は「もう存在しないだろう」。" },
  { en: "Many species are nearly extinct and could disappear from the Earth very soon if we don't do anything to save them.", ja: "多くの種はほとんど絶滅しかけており、救うために何もしなければまもなく地球上から消えてしまうかもしれません。", grammar: "if we don't do anything to save them は条件節。to save them は目的を表す不定詞。" },
  { en: "There are many reasons why species become endangered, but most harm to species is due to human activities such as habitat destruction, hunting and overfishing.", ja: "種が絶滅危惧種になる理由はたくさんありますが、種への害のほとんどは生息地破壊・狩猟・乱獲などの人間活動によるものです。", grammar: "be due to ～ は「〜が原因である」。such as ～ は「〜などの」。" },
  { en: "Habitat destruction is the main reason why animals become endangered.", ja: "生息地の破壊が動物が絶滅危惧種になる主な理由です。", grammar: "the main reason why ～ は「〜する主な理由」。" },
  { en: "When humans move into a new area, they cut down trees to build houses and farms.", ja: "人間が新しい地域に移り住むと、家や農場を建てるために木を切り倒します。", grammar: "when ～ は「〜するとき」。to build ～ は目的を表す不定詞。" },
  { en: "This destroys the animals' habitat – the natural environment where plants or animals usually live – and leaves them without food.", ja: "これは動物の生息地（植物や動物が通常生息する自然環境）を破壊し、食べ物を失わせます。", grammar: "leave A without B は「AをBなしの状態にする」。where ～ は関係副詞節。" },
  { en: "Animal habitats are also destroyed because of pollution.", ja: "動物の生息地は汚染によっても破壊されます。", grammar: "are destroyed は受け身。because of + 名詞 は「〜のために」。" },
  { en: "Dirty water from factories, which contains chemicals, ends up in rivers, and poisons used on farmland may even kill animals which live in the area.", ja: "工場からの汚れた水は化学物質を含み川に流れ込み、農地で使われる毒物はその地域の動物を殺すことさえあります。", grammar: "which contains chemicals は非制限用法の関係代名詞節。end up in ～ は「最終的に〜に行き着く」。" },
  { en: "Animals such as the Arabian oryx are nearly extinct because of the high price of their meat.", ja: "アラビアオリックスのような動物は肉の高値のためほとんど絶滅しかけています。", grammar: "such as ～ は「〜のような」。because of + 名詞 は「〜のために」。" },
  { en: "Other animals are killed for their fur, bones or skin – or just for sport.", ja: "他の動物は毛皮・骨・皮のため、あるいはスポーツのためだけに殺されます。", grammar: "are killed は受け身。just for sport は「ただスポーツのためだけに」。" },
  { en: "Large sea creatures like whales, tuna and sharks have all become endangered species because of overfishing.", ja: "クジラ・マグロ・サメのような大型海洋生物はすべて乱獲のせいで絶滅危惧種になっています。", grammar: "have become は現在完了。because of overfishing は「乱獲のために」。" },
  { en: "Too many are caught to make special dishes that people like to eat, such as shark's fin soup or sushi.", ja: "フカヒレスープや寿司など人々が好む特別な料理を作るために多く捕らえられすぎています。", grammar: "too many は「多すぎる数」。that people like to eat は関係代名詞節。" },
  { en: "What steps can individuals and governments take to protect more animal and plant species from becoming endangered?", ja: "個人や政府はより多くの動植物の種を絶滅危惧から守るためにどのような対策を取ることができるでしょうか。", grammar: "to protect ～ from becoming は「〜が〜になるのを守るために」。" },
  { en: "We should try not to pollute natural areas, and farmers or companies who destroy animal habitats should face a financial penalty.", ja: "自然地域を汚染しないように努めるべきで、動物の生息地を破壊する農家や企業は金銭的な罰を受けるべきです。", grammar: "try not to ～ は「〜しないように努める」。face a penalty は「罰を受ける」。" },
  { en: "The public can help out by refusing to buy products made from animals' body parts.", ja: "一般の人々は動物の体の一部から作られた製品を買わないことで助けることができます。", grammar: "by ～ing は「〜することによって」。refuse to ～ は「〜することを拒む」。" },
  { en: "Governments can make it against the law to hunt, fish or trade in endangered species, and can also provide funding for animal sanctuaries and zoos.", ja: "政府は絶滅危惧種の狩猟・捕獲・取引を違法にし、動物保護区や動物園への資金提供もできます。", grammar: "make it against the law to ～ は「〜することを違法にする」。provide funding for ～ は「〜に資金を提供する」。" },
  { en: "If we all cooperate by taking these steps, we will protect our planet so that our children and their children can enjoy it, too.", ja: "もし私たち全員がこれらの対策を取ることで協力すれば、子どもたちも地球を楽しめるよう守ることができます。", grammar: "If + 現在形, will + 動詞の原形。so that ～ can は「〜できるように」。" }
];

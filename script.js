// مصفوفة الأسئلة (بدون الترقيم)
const questions = [
    // === اليومية ===
    {
        id: 1,
        type: "daily",
        difficulty: "easy",
        company: "شركة البحيري",
        title: "شراء أصول نقداً",
        description: "شراء معدات مكتبية (أصول ثابتة) نقداً بمبلغ 85,000 جنيه",
        hint: "تذكر: شراء الأصل يزيد الأصول، الدفع النقدي يقلل الأصول",
        accounts: [
            { name: "أ. المعدات المكتبية", debit: 85000, credit: 0 },
            { name: "أ. النقدية", debit: 0, credit: 85000 }
        ],
        explanation: "قيد شراء أصل ثابت نقداً: المدين (المعدات المكتبية) زيادة في الأصول، الدائن (النقدية) نقص في الأصول."
    },
    {
        id: 2,
        type: "daily",
        difficulty: "easy",
        company: "شركة A.G.Ali",
        title: "بيع بضاعة نقداً",
        description: "بيع بضاعة بقيمة 60,000 جنيه نقداً (تكلفة البضاعة 40,000 جنيه)",
        hint: "الإيراد = سعر البيع، التكلفة = تكلفة البضاعة، الفرق = ربح",
        accounts: [
            { name: "أ. النقدية", debit: 60000, credit: 0 },
            { name: "أ. البضاعة", debit: 0, credit: 40000 },
            { name: "أ. ربح المبيعات", debit: 0, credit: 20000 }
        ],
        explanation: "قيد بيع بضاعة نقداً: المدين (النقدية) زيادة الأصول، الدائن الأول (البضاعة) نقص الأصول، الدائن الثاني (ربح المبيعات) زيادة حقوق الملكية."
    },
    {
        id: 3,
        type: "daily",
        difficulty: "medium",
        company: "شركة البحيري",
        title: "شراء بضاعة بالآجل",
        description: "شراء بضاعة من شركة النور بقيمة 95,000 جنيه بالآجل",
        hint: "الشراء بالآجل يزيد الأصول والخصوم معاً",
        accounts: [
            { name: "أ. البضاعة", debit: 95000, credit: 0 },
            { name: "أ. دائنون (شركة النور)", debit: 0, credit: 95000 }
        ],
        explanation: "قيد شراء بضاعة بالآجل: المدين (البضاعة) زيادة في الأصول، الدائن (دائنون) زيادة في الخصوم."
    },
    {
        id: 4,
        type: "daily",
        difficulty: "medium",
        company: "شركة A.G.Ali",
        title: "سداد دين نقداً",
        description: "سداد دين لشركة النور بقيمة 45,000 جنيه نقداً",
        hint: "سداد الدين يقلل الخصوم ويقلل الأصول النقدية",
        accounts: [
            { name: "أ. دائنون (شركة النور)", debit: 45000, credit: 0 },
            { name: "أ. النقدية", debit: 0, credit: 45000 }
        ],
        explanation: "قيد سداد دين: المدين (دائنون) نقص في الخصوم، الدائن (النقدية) نقص في الأصول."
    },
    {
        id: 5,
        type: "daily",
        difficulty: "easy",
        company: "شركة البحيري",
        title: "تحصيل إيراد خدمات",
        description: "تحصيل إيراد خدمات استشارية نقداً بقيمة 30,000 جنيه",
        hint: "الإيراد يزيد الأصول النقدية ويزيد حقوق الملكية",
        accounts: [
            { name: "أ. النقدية", debit: 30000, credit: 0 },
            { name: "أ. إيراد الخدمات", debit: 0, credit: 30000 }
        ],
        explanation: "قيد تحصيل إيراد خدمات: المدين (النقدية) زيادة في الأصول، الدائن (إيراد الخدمات) زيادة في حقوق الملكية."
    },
    {
        id: 6,
        type: "daily",
        difficulty: "medium",
        company: "شركة A.G.Ali",
        title: "دفع مصروفات",
        description: "سداد مصروفات كهرباء ومياه بقيمة 18,500 جنيه نقداً",
        hint: "المصروفات تزيد المصروفات (تقلل حقوق الملكية) وتقلل النقدية",
        accounts: [
            { name: "أ. مصروف الكهرباء والمياه", debit: 18500, credit: 0 },
            { name: "أ. النقدية", debit: 0, credit: 18500 }
        ],
        explanation: "قيد دفع مصروفات: المدين (مصروف الكهرباء) زيادة في المصروفات، الدائن (النقدية) نقص في الأصول."
    },
    {
        id: 7,
        type: "daily",
        difficulty: "hard",
        company: "شركة البحيري",
        title: "عملية مركبة بالآجل",
        description: "شراء أثاث مكتبي بقيمة 120,000 جنيه ومواد مكتبية بقيمة 25,000 جنيه من نفس المورد بالآجل",
        hint: "عملية واحدة تشتري أصول مختلفة من نفس المورد",
        accounts: [
            { name: "أ. الأثاث المكتبي", debit: 120000, credit: 0 },
            { name: "أ. مواد مكتبية", debit: 25000, credit: 0 },
            { name: "أ. دائنون (المورد)", debit: 0, credit: 145000 }
        ],
        explanation: "قيد شراء أصول متنوعة بالآجل: المدينين (الأثاث، المواد) زيادة في الأصول، الدائن (دائنون) زيادة في الخصوم."
    },
    {
        id: 8,
        type: "daily",
        difficulty: "medium",
        company: "شركة A.G.Ali",
        title: "تحصيل مدين نقداً",
        description: "تحصيل مبلغ 38,000 جنيه من أحد المدينين نقداً",
        hint: "التحصيل من المدينين يغير شكل الأصول فقط",
        accounts: [
            { name: "أ. النقدية", debit: 38000, credit: 0 },
            { name: "أ. مدينون", debit: 0, credit: 38000 }
        ],
        explanation: "قيد تحصيل من مدين: المدين (النقدية) زيادة في الأصول، الدائن (مدينون) نقص في الأصول."
    },
    {
        id: 9,
        type: "daily",
        difficulty: "hard",
        company: "شركة البحيري",
        title: "دفع مصروفات متعددة",
        description: "دفع المصروفات التالية نقداً: إيجار 25,000 + رواتب 45,000 + إعلانات 12,000",
        hint: "كل مصروف له حساب منفصل ولكن الدائن واحد",
        accounts: [
            { name: "أ. مصروف الإيجار", debit: 25000, credit: 0 },
            { name: "أ. مصروف الرواتب", debit: 45000, credit: 0 },
            { name: "أ. مصروف الإعلانات", debit: 12000, credit: 0 },
            { name: "أ. النقدية", debit: 0, credit: 82000 }
        ],
        explanation: "قيد دفع مصروفات متنوعة: المدينين (المصروفات المختلفة) زيادة في المصروفات، الدائن (النقدية) نقص في الأصول."
    },
    {
        id: 10,
        type: "daily",
        difficulty: "easy",
        company: "شركة A.G.Ali",
        title: "قبض إيراد مقدماً",
        description: "قبض إيراد خدمات مقدماً من عميل بقيمة 50,000 جنيه نقداً",
        hint: "القبض المقدم يزيد النقدية ولكنه التزام مستقبلي",
        accounts: [
            { name: "أ. النقدية", debit: 50000, credit: 0 },
            { name: "أ. إيراد مقدم", debit: 0, credit: 50000 }
        ],
        explanation: "قيد قبض إيراد مقدماً: المدين (النقدية) زيادة في الأصول، الدائن (إيراد مقدم) زيادة في الخصوم (التزام)."
    },

    // === التسوية ===
    {
        id: 11,
        type: "adjusting",
        difficulty: "easy",
        company: "شركة البحيري",
        title: "تسوية الإيجار المدفوع مقدماً",
        description: "في نهاية الفترة، تبين أن 3 أشهر من الإيجار السنوي المدفوع مقدماً (12,000 شهرياً) قد انقضت",
        hint: "جزء من الإيجار المدفوع يصبح مصروفاً، والباقي أصل",
        accounts: [
            { name: "أ. مصروف الإيجار", debit: 36000, credit: 0 },
            { name: "أ. إيجار مدفوع مقدماً", debit: 0, credit: 36000 }
        ],
        explanation: "قيد تسوية: تحويل جزء من الإيجار المدفوع مقدماً (أصل) إلى مصروف إيجار."
    },
    {
        id: 12,
        type: "adjusting",
        difficulty: "medium",
        company: "شركة A.G.Ali",
        title: "تسوية الإيرادات المستحقة",
        description: "في نهاية الفترة، توجد إيرادات خدمات مستحقة القبض لم تسجل بعد بقيمة 25,000 جنيه",
        hint: "إيراد تم تحقيقه ولكن لم يقبض بعد، يزيد الأصول والإيرادات",
        accounts: [
            { name: "أ. إيرادات مستحقة القبض", debit: 25000, credit: 0 },
            { name: "أ. إيراد الخدمات", debit: 0, credit: 25000 }
        ],
        explanation: "قيد تسوية: تسجيل إيراد تم تحقيقه ولكن لم يقبض بعد، يزيد الأصول (مستحقات) والإيرادات."
    },
    {
        id: 13,
        type: "adjusting",
        difficulty: "medium",
        company: "شركة البحيري",
        title: "تسوية اهلاك الأصول",
        description: "احتساب اهلاك المعدات المكتبية بمبلغ 15,000 جنيه لهذه الفترة",
        hint: "الاهلاك مصروف، ومجمع الاهلاك مقابل للأصول",
        accounts: [
            { name: "أ. مصروف اهلاك المعدات", debit: 15000, credit: 0 },
            { name: "أ. مجمع اهلاك - المعدات", debit: 0, credit: 15000 }
        ],
        explanation: "قيد تسوية الاهلاك: توزيع تكلفة الأصل على الفترات، المصروف يقلل صافي الدخل، مجمع الاهلاك مقابل للأصل."
    },
    {
        id: 14,
        type: "adjusting",
        difficulty: "hard",
        company: "شركة A.G.Ali",
        title: "تسوية المصروفات المستحقة",
        description: "في نهاية الفترة، توجد مصروفات مرتبات مستحقة الدفع لم تسجل بعد بقيمة 32,000 جنيه",
        hint: "مصروف تحقق ولكن لم يدفع بعد، يزيد المصروفات والخصوم",
        accounts: [
            { name: "أ. مصروف المرتبات", debit: 32000, credit: 0 },
            { name: "أ. مرتبات مستحقة الدفع", debit: 0, credit: 32000 }
        ],
        explanation: "قيد تسوية: تسجيل مصروف تحقق ولكن لم يدفع، يزيد المصروفات (تقلل الدخل) ويزيد الخصوم (التزام)."
    },
    {
        id: 15,
        type: "adjusting",
        difficulty: "easy",
        company: "شركة البحيري",
        title: "تسوية إيراد مقدم",
        description: "من إيراد الخدمات المقدم (50,000 جنيه) تم تنفيذ خدمات بقيمة 20,000 جنيه",
        hint: "جزء من الإيراد المقدم يصبح إيراداً محققاً",
        accounts: [
            { name: "أ. إيراد مقدم", debit: 20000, credit: 0 },
            { name: "أ. إيراد الخدمات", debit: 0, credit: 20000 }
        ],
        explanation: "قيد تسوية: تحويل جزء من الإيراد المقدم (التزام) إلى إيراد محقق (حقوق ملكية)."
    },
    {
        id: 16,
        type: "adjusting",
        difficulty: "medium",
        company: "شركة A.G.Ali",
        title: "تسوية مخصص ديون مشكوك فيها",
        description: "تقدير مخصص ديون مشكوك فيها بنسبة 2% من رصيد المدينين البالغ 800,000 جنيه",
        hint: "المخصص مصروف، والمخصص حساب مقابل للمدينين",
        accounts: [
            { name: "أ. مصروف ديون مشكوك فيها", debit: 16000, credit: 0 },
            { name: "أ. مخصص ديون مشكوك فيها", debit: 0, credit: 16000 }
        ],
        explanation: "قيد تسوية المخصص: تقدير خسائر مستقبلية، المصروف يقلل الدخل، المخصص مقابل للمدينين."
    },
    {
        id: 17,
        type: "adjusting",
        difficulty: "hard",
        company: "شركة البحيري",
        title: "تسوية مخزون آخر المدة",
        description: "تسجيل مخزون آخر المدة البالغ 150,000 جنيه وتصحيح مخزون أول المدة البالغ 120,000 جنيه",
        hint: "مخزون آخر المدة أصل، ومخزون أول المدة مصروف",
        accounts: [
            { name: "أ. بضاعة آخر المدة", debit: 150000, credit: 0 },
            { name: "أ. مخزون أول المدة", debit: 0, credit: 120000 },
            { name: "أ. تكلفة البضاعة المباعة", debit: 0, credit: 30000 }
        ],
        explanation: "قيد تسوية المخزون: تسجيل مخزون آخر المدة كأصل، وتعديل تكلفة البضاعة المباعة."
    },
    {
        id: 18,
        type: "adjusting",
        difficulty: "medium",
        company: "شركة A.G.Ali",
        title: "تسوية فوائد مستحقة القبض",
        description: "فوائد مستحقة القبض على استثمارات بقيمة 8,500 جنيه لم تسجل بعد",
        hint: "إيراد فوائد تحقق ولكن لم يقبض بعد",
        accounts: [
            { name: "أ. فوائد مستحقة القبض", debit: 8500, credit: 0 },
            { name: "أ. إيراد الفوائد", debit: 0, credit: 8500 }
        ],
        explanation: "قيد تسوية: تسجيل إيراد فوائد تحقق ولكن لم يقبض، يزيد الأصول والإيرادات."
    },
    {
        id: 19,
        type: "adjusting",
        difficulty: "easy",
        company: "شركة البحيري",
        title: "تسوية مصروف إهلاك السيارات",
        description: "احتساب إهلاك سيارات الشركة بمبلغ 25,000 جنيه لهذه الفترة",
        hint: "إهلاك الأصل يوزع تكلفته على الفترات",
        accounts: [
            { name: "أ. مصروف اهلاك السيارات", debit: 25000, credit: 0 },
            { name: "أ. مجمع اهلاك - السيارات", debit: 0, credit: 25000 }
        ],
        explanation: "قيد تسوية الاهلاك: توزيع تكلفة السيارات على الفترات المستفيدة منها."
    },
    {
        id: 20,
        type: "adjusting",
        difficulty: "hard",
        company: "شركة A.G.Ali",
        title: "تسوية ضريبة الدخل المستحقة",
        description: "احتساب ضريبة الدخل المستحقة عن الفترة بنسبة 25% من صافي الدخل قبل الضريبة البالغ 200,000 جنيه",
        hint: "ضريبة الدخل مصروف والتزام مستحق",
        accounts: [
            { name: "أ. مصروف ضريبة الدخل", debit: 50000, credit: 0 },
            { name: "أ. ضريبة دخل مستحقة الدفع", debit: 0, credit: 50000 }
        ],
        explanation: "قيد تسوية الضريبة: تسجيل مصروف ضريبة الدخل والالتزام المستحق للدولة."
    },

    // === الإقفال ===
    {
        id: 21,
        type: "closing",
        difficulty: "easy",
        company: "شركة A.G.Ali",
        title: "إقفال إيرادات المبيعات",
        description: "إقفال حساب إيراد المبيعات البالغ رصيده 850,000 جنيه (دائن) في حساب ملخص الدخل",
        hint: "إيرادات المبيعات تحول من حساب الإيراد إلى ملخص الدخل",
        accounts: [
            { name: "أ. إيراد المبيعات", debit: 850000, credit: 0 },
            { name: "أ. ملخص الدخل", debit: 0, credit: 850000 }
        ],
        explanation: "قيد إقفال: تحويل رصيد إيراد المبيعات إلى حساب ملخص الدخل."
    },
    {
        id: 22,
        type: "closing",
        difficulty: "medium",
        company: "شركة البحيري",
        title: "إقفال المصروفات التشغيلية",
        description: "إقفال المصروفات التشغيلية: رواتب 250,000 + إيجار 120,000 + كهرباء 45,000 + اهلاك 80,000",
        hint: "المصروفات تحول من حسابات المصروفات إلى ملخص الدخل",
        accounts: [
            { name: "أ. ملخص الدخل", debit: 495000, credit: 0 },
            { name: "أ. مصروف الرواتب", debit: 0, credit: 250000 },
            { name: "أ. مصروف الإيجار", debit: 0, credit: 120000 },
            { name: "أ. مصروف الكهرباء", debit: 0, credit: 45000 },
            { name: "أ. مصروف الاهلاك", debit: 0, credit: 80000 }
        ],
        explanation: "قيد إقفال: تحويل أرصدة المصروفات إلى حساب ملخص الدخل."
    },
    {
        id: 23,
        type: "closing",
        difficulty: "medium",
        company: "شركة A.G.Ali",
        title: "إقفال الإيرادات الأخرى",
        description: "إقفال الإيرادات الأخرى: إيراد خدمات 150,000 + إيراد فوائد 25,000 + إيراد إيجار 35,000",
        hint: "جميع حسابات الإيرادات الأخرى تُقفل في ملخص الدخل",
        accounts: [
            { name: "أ. إيراد الخدمات", debit: 150000, credit: 0 },
            { name: "أ. إيراد الفوائد", debit: 25000, credit: 0 },
            { name: "أ. إيراد الإيجار", debit: 35000, credit: 0 },
            { name: "أ. ملخص الدخل", debit: 0, credit: 210000 }
        ],
        explanation: "قيد إقفال: تحويل أرصدة الإيرادات الأخرى إلى حساب ملخص الدخل."
    },
    {
        id: 24,
        type: "closing",
        difficulty: "hard",
        company: "شركة البحيري",
        title: "إقفال صافي الدخل",
        description: "إقفال رصيد ملخص الدخل البالغ 120,000 جنيه (صافي دخل) في حساب الأرباح المحتجزة",
        hint: "صافي الدخل الإيجابي يزيد الأرباح المحتجزة",
        accounts: [
            { name: "أ. ملخص الدخل", debit: 120000, credit: 0 },
            { name: "أ. أرباح محتجزة", debit: 0, credit: 120000 }
        ],
        explanation: "قيد إقفال: تحويل صافي الدخل (ملخص الدخل) إلى أرباح محتجزة."
    },
    {
        id: 25,
        type: "closing",
        difficulty: "hard",
        company: "شركة A.G.Ali",
        title: "إقفال صافي الخسارة",
        description: "إقفال رصيد ملخص الدخل البالغ 45,000 جنيه (صافي خسارة) من حساب الأرباح المحتجزة",
        hint: "صافي الخسارة يقلل الأرباح المحتجزة",
        accounts: [
            { name: "أ. أرباح محتجزة", debit: 45000, credit: 0 },
            { name: "أ. ملخص الدخل", debit: 0, credit: 45000 }
        ],
        explanation: "قيد إقفال: تحويل صافي الخسارة (ملخص الدخل) من أرباح محتجزة."
    }
];

// متغيرات التطبيق
let currentQuestionIndex = 0;
let currentFilter = "all";
let correctAnswers = 0;
let wrongAnswers = 0;
let totalAnswered = 0;
let usedQuestions = new Set();

// عناصر DOM
const filterBtns = document.querySelectorAll('.filter-btn');
const questionTypeEl = document.getElementById('question-type');
const companyEl = document.getElementById('company');
const questionTitleEl = document.getElementById('question-title');
const questionTextEl = document.getElementById('question-text');
const hintTextEl = document.getElementById('hint-text');
const explanationTextEl = document.getElementById('explanation-text');
const entryRowsEl = document.getElementById('entry-rows');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
const hintBtn = document.getElementById('hint-btn');
const resultMessageEl = document.getElementById('result-message');
const correctAnswerEl = document.getElementById('correct-answer');
const explanationBoxEl = document.getElementById('explanation-box');
const totalDebitEl = document.getElementById('total-debit');
const totalCreditEl = document.getElementById('total-credit');
const balanceStatusEl = document.getElementById('balance-status');
const displayDebitEl = document.getElementById('display-debit');
const displayCreditEl = document.getElementById('display-credit');
const correctCountEl = document.getElementById('correct-count');
const wrongCountEl = document.getElementById('wrong-count');
const totalAnsweredEl = document.getElementById('total-answered');
const successRateEl = document.getElementById('success-rate');
const progressFillEl = document.getElementById('progress-fill');
const progressTextEl = document.getElementById('progress-text');

// تهيئة التطبيق
function init() {
    console.log("بدء التطبيق...");
    setupEventListeners();
    loadRandomQuestion();
    updateStats();
    updateBalance();
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    console.log("إعداد مستمعي الأحداث...");
    
    // أزرار التصفية
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("تم النقر على زر التصفية:", btn.dataset.type);
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.type;
            usedQuestions.clear();
            loadRandomQuestion();
        });
    });

    // أزرار التحكم
    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', loadRandomQuestion);
    
    // زر عرض الإجابة (موجود في HTML)
    if (showAnswerBtn) {
        showAnswerBtn.addEventListener('click', showCorrectAnswer);
    }
    
    // زر التلميح (موجود في HTML)
    if (hintBtn) {
        hintBtn.addEventListener('click', showHint);
    }

    // تحديث الرصيد عند الكتابة - إصلاح هنا
    document.addEventListener('input', function(event) {
        if (event.target.classList.contains('entry-input')) {
            updateBalance();
        }
    });
}

// تحميل سؤال عشوائي
function loadRandomQuestion() {
    console.log("تحميل سؤال عشوائي...", "الفلتر الحالي:", currentFilter);
    
    // إخفاء النتائج السابقة
    hidePreviousResults();
    
    // تصفية الأسئلة حسب النوع
    let filteredQuestions = questions;
    if (currentFilter !== "all") {
        filteredQuestions = questions.filter(q => q.type === currentFilter);
        console.log("الأسئلة المفلترة:", filteredQuestions.length, "نوع:", currentFilter);
    }
    
    // إذا تم استخدام جميع الأسئلة، أفرغ المجموعة
    if (usedQuestions.size >= filteredQuestions.length) {
        usedQuestions.clear();
        console.log("تم إعادة تعيين الأسئلة المستخدمة");
    }
    
    // اختيار سؤال عشوائي غير مستخدم
    let availableQuestions = filteredQuestions.filter(q => !usedQuestions.has(q.id));
    if (availableQuestions.length === 0) {
        availableQuestions = filteredQuestions;
        usedQuestions.clear();
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];
    
    // البحث عن index السؤال في المصفوفة الأصلية
    currentQuestionIndex = questions.findIndex(q => q.id === question.id);
    
    if (currentQuestionIndex === -1) {
        console.error("لم يتم العثور على السؤال!");
        return;
    }
    
    console.log("السؤال المحدد:", question.title, "النوع:", question.type);
    
    // إضافة السؤال للمستخدمين
    usedQuestions.add(question.id);
    
    // تحديث واجهة السؤال
    updateQuestionUI(question);
    
    // إنشاء حقول الإدخال
    createEntryInputs(question.accounts);
    
    // تحديث الإحصائيات
    updateStats();
    
    // إخفاء الشرح
    explanationBoxEl.classList.remove('show');
}

// تحديث واجهة السؤال
function updateQuestionUI(question) {
    console.log("تحديث واجهة السؤال...");
    
    // نوع السؤال
    let typeText = "";
    switch(question.type) {
        case "daily": typeText = "يومية"; break;
        case "adjusting": typeText = "تسوية"; break;
        case "closing": typeText = "إقفال"; break;
    }
    questionTypeEl.textContent = typeText;
    
    // الشركة
    companyEl.textContent = question.company;
    
    // العنوان والوصف
    questionTitleEl.textContent = question.title;
    questionTextEl.textContent = question.description;
    
    // التلميح
    hintTextEl.textContent = question.hint;
    
    // الشرح
    explanationTextEl.textContent = question.explanation;
    
    // مستوى الصعوبة
    updateDifficultyUI(question.difficulty);
}

// تحديث واجهة مستوى الصعوبة
function updateDifficultyUI(difficulty) {
    const difficultyEl = document.getElementById('difficulty');
    if (!difficultyEl) return;
    
    const difficultyDot = difficultyEl.querySelector('.difficulty-dot');
    const difficultyText = difficultyEl.querySelector('span:last-child');
    
    // إزالة جميع الفئات
    difficultyDot.className = 'difficulty-dot';
    
    // إضافة الفئة المناسبة والنص
    switch(difficulty) {
        case "easy":
            difficultyDot.classList.add('easy');
            difficultyText.textContent = "سهل";
            break;
        case "medium":
            difficultyDot.classList.add('medium');
            difficultyText.textContent = "متوسط";
            break;
        case "hard":
            difficultyDot.classList.add('hard');
            difficultyText.textContent = "صعب";
            break;
    }
}

// إخفاء النتائج السابقة
function hidePreviousResults() {
    resultMessageEl.classList.remove('correct', 'wrong');
    resultMessageEl.style.display = 'none';
    correctAnswerEl.classList.remove('show');
    correctAnswerEl.style.display = 'none';
}

// إنشاء حقول إدخال القيد
function createEntryInputs(accounts) {
    console.log("إنشاء حقول الإدخال... عدد الحسابات:", accounts.length);
    entryRowsEl.innerHTML = '';
    
    accounts.forEach((account, index) => {
        const row = document.createElement('div');
        row.className = 'entry-row';
        
        row.innerHTML = `
            <div class="account-cell">${account.name}</div>
            <div class="input-cell">
                <input type="number" 
                       class="entry-input debit-input" 
                       id="debit-${index}" 
                       placeholder="0" 
                       min="0" 
                       step="1000"
                       data-index="${index}"
                       value="">
                <span class="input-label">مدين</span>
            </div>
            <div class="input-cell">
                <input type="number" 
                       class="entry-input credit-input" 
                       id="credit-${index}" 
                       placeholder="0" 
                       min="0" 
                       step="1000"
                       data-index="${index}"
                       value="">
                <span class="input-label">دائن</span>
            </div>
        `;
        
        // إضافة مستمعي الأحداث لحقول الإدخال
        const debitInput = row.querySelector(`#debit-${index}`);
        const creditInput = row.querySelector(`#credit-${index}`);
        
        if (debitInput && creditInput) {
            debitInput.addEventListener('input', updateBalance);
            creditInput.addEventListener('input', updateBalance);
        }
        
        entryRowsEl.appendChild(row);
    });
    
    // تحديث الرصيد بعد إنشاء الحقول
    setTimeout(updateBalance, 100);
}

// التحقق من الإجابة
function checkAnswer() {
    console.log("التحقق من الإجابة...");
    
    const question = questions[currentQuestionIndex];
    if (!question) {
        console.error("لم يتم العثور على السؤال!");
        return;
    }
    
    let isCorrect = true;
    let totalDebit = 0;
    let totalCredit = 0;
    let errorMessage = "";
    
    // التحقق من كل حساب
    for (let i = 0; i < question.accounts.length; i++) {
        const debitInput = document.getElementById(`debit-${i}`);
        const creditInput = document.getElementById(`credit-${i}`);
        
        if (!debitInput || !creditInput) {
            console.error("لم يتم العثور على حقول الإدخال للمؤشر:", i);
            continue;
        }
        
        const userDebit = parseInt(debitInput.value) || 0;
        const userCredit = parseInt(creditInput.value) || 0;
        
        // جمع المجاميع للتحقق من التوازن
        totalDebit += userDebit;
        totalCredit += userCredit;
        
        // التحقق من المبالغ
        if (userDebit !== question.accounts[i].debit || userCredit !== question.accounts[i].credit) {
            isCorrect = false;
            debitInput.classList.add('incorrect');
            debitInput.classList.remove('correct');
            creditInput.classList.add('incorrect');
            creditInput.classList.remove('correct');
        } else {
            debitInput.classList.add('correct');
            debitInput.classList.remove('incorrect');
            creditInput.classList.add('correct');
            creditInput.classList.remove('incorrect');
        }
    }
    
    // التحقق من توازن القيد
    if (totalDebit !== totalCredit) {
        isCorrect = false;
        errorMessage = "القيد غير متوازن! مجموع المدين ≠ مجموع الدائن";
    }
    
    // عرض النتيجة
    if (isCorrect) {
        showResult(true, "ممتاز! القيد صحيح تماماً");
        correctAnswers++;
    } else {
        showResult(false, errorMessage || "القيد غير صحيح، حاول مرة أخرى");
        wrongAnswers++;
    }
    
    totalAnswered++;
    updateStats();
    
    // عرض الشرح
    explanationBoxEl.classList.add('show');
}

// عرض نتيجة التحقق
function showResult(isCorrect, message) {
    resultMessageEl.textContent = message;
    resultMessageEl.className = 'result-message';
    resultMessageEl.classList.add(isCorrect ? 'correct' : 'wrong');
    resultMessageEl.style.display = 'block';
    
    // إخفاء الإجابة الصحيحة إذا كانت موجودة
    correctAnswerEl.classList.remove('show');
    correctAnswerEl.style.display = 'none';
}

// عرض الإجابة الصحيحة
function showCorrectAnswer() {
    console.log("عرض الإجابة الصحيحة...");
    
    const question = questions[currentQuestionIndex];
    if (!question) return;
    
    let answerHTML = '<div class="answer-header">القيد الصحيح:</div>';
    
    question.accounts.forEach(account => {
        answerHTML += `
            <div class="answer-row">
                <span class="account-name">${account.name}</span>
                <span class="debit-amount">${account.debit > 0 ? account.debit.toLocaleString() + ' جنيه' : ''}</span>
                <span class="credit-amount">${account.credit > 0 ? account.credit.toLocaleString() + ' جنيه' : ''}</span>
            </div>
        `;
    });
    
    // حساب المجموع
    const totalDebit = question.accounts.reduce((sum, acc) => sum + acc.debit, 0);
    const totalCredit = question.accounts.reduce((sum, acc) => sum + acc.credit, 0);
    
    answerHTML += `
        <div class="answer-total">
            <span class="total-label">المجموع</span>
            <span class="total-debit">${totalDebit.toLocaleString()} جنيه</span>
            <span class="total-credit">${totalCredit.toLocaleString()} جنيه</span>
        </div>
    `;
    
    correctAnswerEl.innerHTML = answerHTML;
    correctAnswerEl.classList.add('show');
    correctAnswerEl.style.display = 'block';
    
    // إضافة الأنماط للعرض
    const styleId = 'answer-styles';
    let styleEl = document.getElementById(styleId);
    
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
    }
    
    styleEl.textContent = `
        .answer-header {
            font-weight: bold;
            color: var(--primary);
            margin-bottom: 1rem;
            font-size: 1.1rem;
            text-align: center;
        }

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
    setupEventListeners();
    loadRandomQuestion();
    updateStats();
    updateBalance();
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // أزرار التصفية
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
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
    showAnswerBtn.addEventListener('click', showCorrectAnswer);
    hintBtn.addEventListener('click', showHint);

    // تحديث الرصيد عند الكتابة
    document.addEventListener('input', updateBalance);
}

// تحميل سؤال عشوائي
function loadRandomQuestion() {
    // إخفاء النتائج السابقة
    hidePreviousResults();
    
    // تصفية الأسئلة حسب النوع
    let filteredQuestions = questions;
    if (currentFilter !== "all") {
        filteredQuestions = questions.filter(q => q.type === currentFilter);
    }
    
    // إذا تم استخدام جميع الأسئلة، أفرغ المجموعة
    if (usedQuestions.size >= filteredQuestions.length) {
        usedQuestions.clear();
    }
    
    // اختيار سؤال عشوائي غير مستخدم
    let availableQuestions = filteredQuestions.filter((q, index) => !usedQuestions.has(q.id));
    if (availableQuestions.length === 0) {
        availableQuestions = filteredQuestions;
        usedQuestions.clear();
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];
    currentQuestionIndex = questions.findIndex(q => q.id === question.id);
    
    // إضافة السؤال للمستخدمين
    usedQuestions.add(question.id);
    
    // تحديث واجهة السؤال
    updateQuestionUI(question);
    
    // إنشاء حقول الإدخال
    createEntryInputs(question.accounts);
    
    // تحديث الإحصائيات
    updateStats();
}

// تحديث واجهة السؤال
function updateQuestionUI(question) {
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

// إنشاء حقول إدخال القيد
function createEntryInputs(accounts) {
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
                       data-index="${index}">
                <span class="input-label">مدين</span>
            </div>
            <div class="input-cell">
                <input type="number" 
                       class="entry-input credit-input" 
                       id="credit-${index}" 
                       placeholder="0" 
                       min="0" 
                       step="1000"
                       data-index="${index}">
                <span class="input-label">دائن</span>
            </div>
        `;
        
        entryRowsEl.appendChild(row);
    });
}

// التحقق من الإجابة
function checkAnswer() {
    const question = questions[currentQuestionIndex];
    let isCorrect = true;
    let totalDebit = 0;
    let totalCredit = 0;
    
    // التحقق من كل حساب
    question.accounts.forEach((account, index) => {
        const debitInput = document.getElementById(`debit-${index}`);
        const creditInput = document.getElementById(`credit-${index}`);
        
        const userDebit = parseInt(debitInput.value) || 0;
        const userCredit = parseInt(creditInput.value) || 0;
        
        // جمع المجاميع للتحقق من التوازن
        totalDebit += userDebit;
        totalCredit += userCredit;
        
        // التحقق من المبالغ
        if (userDebit !== account.debit || userCredit !== account.credit) {
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
    });
    
    // التحقق من توازن القيد
    if (totalDebit !== totalCredit) {
        isCorrect = false;
        showResult(false, "القيد غير متوازن! مجموع المدين ≠ مجموع الدائن");
    }
    
    // عرض النتيجة
    if (isCorrect) {
        showResult(true, "ممتاز! القيد صحيح تماماً");
        correctAnswers++;
    } else {
        showResult(false, "القيد غير صحيح، حاول مرة أخرى");
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
    
    // إخفاء الإجابة الصحيحة إذا كانت موجودة
    correctAnswerEl.classList.remove('show');
}

// عرض الإجابة الصحيحة
function showCorrectAnswer() {
    const question = questions[currentQuestionIndex];
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
    
    // إضافة الأنماط للعرض
    const style = document.createElement('style');
    style.textContent = `
        .answer-header {
            font-weight: bold;
            color: var(--primary);
            margin-bottom: 1rem;
            font-size: 1.1rem;
            text-align: center;
        }
        .answer-row {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 1rem;
            padding: 0.75rem;
            background: white;
            border-radius: 8px;
            margin-bottom: 0.5rem;
            border: 1px solid var(--border-color);
            text-align: center;
        }
        .answer-total {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 1rem;
            padding: 1rem;
            background: var(--primary);
            color: white;
            border-radius: 8px;
            font-weight: bold;
            margin-top: 1rem;
            text-align: center;
        }
        .debit-amount, .credit-amount {
            font-weight: bold;
        }
        .total-debit, .total-credit {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem;
            border-radius: 4px;
        }
    `;
    document.head.appendChild(style);
}

// عرض التلميح
function showHint() {
    const hintBox = document.querySelector('.hint-box');
    hintBox.style.animation = 'pulse 0.5s';
    setTimeout(() => {
        hintBox.style.animation = '';
    }, 500);
}

// تحديث الرصيد
function updateBalance() {
    let totalDebit = 0;
    let totalCredit = 0;
    
    // حساب مجموع المدين والدائن من المدخلات
    const debitInputs = document.querySelectorAll('.debit-input');
    const creditInputs = document.querySelectorAll('.credit-input');
    
    debitInputs.forEach(input => {
        totalDebit += parseInt(input.value) || 0;
    });
    
    creditInputs.forEach(input => {
        totalCredit += parseInt(input.value) || 0;
    });
    
    // تحديث القيم المعروضة
    totalDebitEl.textContent = totalDebit.toLocaleString();
    totalCreditEl.textContent = totalCredit.toLocaleString();
    displayDebitEl.textContent = totalDebit.toLocaleString();
    displayCreditEl.textContent = totalCredit.toLocaleString();
    
    // تحديث حالة التوازن
    if (totalDebit === totalCredit && totalDebit > 0) {
        balanceStatusEl.innerHTML = '<i class="fas fa-check-circle"></i><span>متوازن</span>';
        balanceStatusEl.className = 'balance-status balanced';
    } else {
        balanceStatusEl.innerHTML = '<i class="fas fa-times-circle"></i><span>غير متوازن</span>';
        balanceStatusEl.className = 'balance-status unbalanced';
    }
}

// تحديث الإحصائيات
function updateStats() {
    // تحديث الأعداد
    correctCountEl.textContent = correctAnswers;
    wrongCountEl.textContent = wrongAnswers;
    totalAnsweredEl.textContent = totalAnswered;
    
    // حساب نسبة النجاح
    const successRate = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
    successRateEl.textContent = successRate + '%';
    
    // تحديث شريط التقدم

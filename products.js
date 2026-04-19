// قاعدة بيانات المنتجات (تم توليدها تلقائياً من الصفحة الرئيسية)
const products = {
    "perfectmeat": {
        id: "perfectmeat",
        title: "لحمة قطع مميزة",
        price: "400",
        unit: "كيلو",
        description: "لحم بقر طازج مقطع بعناية",
        images: ["perfectmeat.jpeg"],
        category: "meat",
        features: [
            "تقطيع احترافي يضمن أفضل طراوة",
            "مناسبة لجميع أنواع الطبخ",
            "اختيار من أفضل العجول المحلية"
        ]
    },
    "moza": {
        id: "moza",
        title: "الموزة",
        price: "400",
        unit: "كيلو",
        description: "أجود أنواع الموزة الطازجة",
        images: ["Moza.jpeg"],
        category: "meat",
        features: [
            "غنية بالجيلاتين",
            "مثالية للطواجن والشوربة",
            "طرية وسهلة التسوية"
        ]
    },
    "feleto": {
        id: "feleto",
        title: "عرق فلتو",
        price: "400",
        unit: "كيلو",
        description: "قطع فلتو مميزة من أرقى أنواع اللحم",
        images: ["feleto.jpeg"],
        category: "meat",
        features: [
            "لحم بقري صافي بدون دهون تقريباً",
            "مثالي للستيك والبوفتيك",
            "سهل التقطيع والطهي السريع"
        ]
    },
    "tripianco": {
        id: "tripianco",
        title: "عرق تريبيانكو",
        price: "400",
        unit: "كيلو",
        description: "لحم بقري مميز لحمة باردة وبوفتيك",
        images: ["tripianco.jpeg"],
        category: "meat",
        features: [
            "مناسب للحمة الباردة والسندوتشات",
            "قوام متماسك",
            "سهل التقطيع بعد السلق"
        ]
    },
    "intercot": {
        id: "intercot",
        title: "انتركوت",
        price: "400",
        unit: "كيلو",
        description: "قطع انتركوت طازجة",
        images: ["intercot.jpeg"],
        category: "meat",
        features: [
            "يحتوي على طبقة دهنية تمنحه طراوة",
            "مثالي للشوي",
            "طعمه غني وعصاري"
        ]
    },
    "fakhda": {
        id: "fakhda",
        title: "وش الفخدة",
        price: "400",
        unit: "كيلو",
        description: "لحم بقري طري",
        images: ["fakhda.jpeg"],
        category: "meat",
        features: [
            "لحم طري وسهل التسوية",
            "مناسب للطواجن والطبخ اليومي",
            "قليل الدهون"
        ]
    },
    "rosebeef": {
        id: "rosebeef",
        title: "روزبيف",
        price: "400",
        unit: "كيلو",
        description: "لحم مشوي مميز",
        images: ["rosebeef.jpeg"],
        category: "meat",
        features: [
            "مناسب للتحمير والشوي",
            "طعمه غني",
            "يقدم بارداً أو ساخناً"
        ]
    },
    "boftic": {
        id: "boftic",
        title: "بوفتيك",
        price: "400",
        unit: "كيلو",
        description: "شرائح لحم بقري ممتازة",
        images: ["Boftic.jpeg"],
        category: "meat",
        features: [
            "شرائح رفيعة وسهلة التسوية",
            "مثالي للقلي أو الشوي السريع",
            "لحم بقري صافي"
        ]
    },
    "dani": {
        id: "dani",
        title: "لحمة ضاني",
        price: "400",
        unit: "كيلو",
        description: "لحم ضأن طازج",
        images: ["Dani.jpeg"],
        category: "meat",
        features: [
            "طعم غني ومميز",
            "مناسب للمشاوي والطواجن",
            "مصدر ممتاز للبروتين"
        ]
    },
    "kolata": {
        id: "kolata",
        title: "الكولاتة",
        price: "400",
        unit: "كيلو",
        description: "لحم بقري مميز",
        images: ["Kolata.jpeg"],
        category: "meat",
        features: [
            "قوام متماسك",
            "مناسب للطواجن والشوربة",
            "يحتفظ بطراوته بعد الطهي"
        ]
    },
    "sin": {
        id: "sin",
        title: "السن",
        price: "380",
        unit: "كيلو",
        description: "لحم بقري طازج",
        images: ["sin.jpg"],
        category: "meat",
        features: [
            "مناسب للطواجن والفتة",
            "يتميز بنكهة قوية",
            "يحتاج تسوية هادئة"
        ]
    },
    "dosh": {
        id: "dosh",
        title: "الدوش",
        price: "370",
        unit: "كيلو",
        description: "لحم بقري طازج",
        images: ["Dosh.jpeg"],
        category: "meat",
        features: [
            "سهل التقطيع",
            "مناسب للطواجن والشوربة",
            "عالي الدسم"
        ]
    },
    "akawi": {
        id: "akawi",
        title: "العكاوي",
        price: "280",
        unit: "كيلو",
        description: "لحم بقري طازج",
        images: ["akawi.jpeg"],
        category: "meat",
        features: [
            "مناسب للطواجن والفتة",
            "غني بالنكهة",
            "سعر اقتصادي"
        ]
    },
    "kebda": {
        id: "kebda",
        title: "الكبدة",
        price: "420",
        unit: "كيلو",
        description: "كبدة طازجة",
        images: ["kebda.jpeg"],
        category: "meat",
        features: [
            "غنية بالحديد",
            "طرية وسهلة التسوية",
            "مناسبة للقلي والشوي"
        ]
    },
    "kalawi": {
        id: "kalawi",
        title: "الكلاوي",
        price: "380",
        unit: "كيلو",
        description: "كلاوي طازجة",
        images: ["kalawi.jpeg"],
        category: "meat",
        features: [
            "غنية بالفيتامينات والمعادن",
            "مذاق مميز",
            "مناسبة للشوي أو القلي"
        ]
    },
    "kalp": {
        id: "kalp",
        title: "القلب",
        price: "380",
        unit: "كيلو",
        description: "قلب طازج",
        images: ["kalp.jpeg"],
        category: "meat",
        features: [
            "غني بالبروتين",
            "قوام متماسك",
            "مناسب للطواجن والشوربة"
        ]
    },
    // مشويات
    "kofta": {
        id: "kofta",
        title: "كفتة مشوية فحم",
        price: "450",
        unit: "كيلو",
        description: "كفتة مشوية على الفحم بخلطة سرية",
        images: ["Kofta.jpeg"],
        category: "grill",
        features: [
            "لحم بقري مفروم طازج",
            "خلطة توابل سرية",
            "مشوية على الفحم لطعم مدخن"
        ]
    },
    "steak": {
        id: "steak",
        title: "ستيك مشوي فحم",
        price: "460",
        unit: "كيلو",
        description: "ستيك لحم بقري مشوي على الفحم",
        images: ["steak.jpeg"],
        category: "grill",
        features: [
            "شرائح لحم بقري مختارة بعناية",
            "تتبيلة خاصة للشوي",
            "مشوي على الفحم لنكهة غنية"
        ]
    },
    "kabab": {
        id: "kabab",
        title: "كباب",
        price: "450",
        unit: "كيلو",
        description: "كباب بتلو فحم",
        images: ["Kabab.jpeg"],
        category: "grill",
        features: [
            "لحم بتلو طازج",
            "تتبيلة شرقية مميزة",
            "مشوي على الفحم"
        ]
    },
    "tarb": {
        id: "tarb",
        title: "طرب",
        price: "480",
        unit: "كيلو",
        description: "كفتة الطرب مشوية فحم",
        images: ["tarb.jpg"],
        category: "grill",
        features: [
            "كفتة ملفوفة بدهون الخروف",
            "طعم غني وطراوة عالية",
            "مشوي على الفحم"
        ]
    },
    
    "burger": {
        id: "burger",
        title: "برجر بلدي",
        price: "400",
        unit: "كيلو",
        description: "برجر لحم بلدي صافي متبل بخلطة خاصة",
        images: ["burger.jpg"],
        category: "ready",
        features: [
            "لحم بلدي صافي 100%",
            "بدون صويا أو مواد حافظة",
            "تتبيلة الحيطاوي الخاصة",
            "جاهز للشوي فوراً"
        ]
    },

    "sujuk_raw": {
        id: "sujuk_raw",
        title: "سجق بلدي",
        price: "400",
        unit: "كيلو",
        description: "سجق بلدي بخلطة وتوابل الحيطاوي المميزة",
        images: ["sujuk_raw.jpg"],
        category: "ready",
        features: [
            "خلطة توابل شرقية حارة",
            "نسبة دهون مثالية للطعم",
            "جاهز للتسويه علطول"
        ]
    },

    "rice_kofta": {
        id: "rice_kofta",
        title: "كفتة أرز",
        price: "300",
        unit: "كيلو",
        description: "كفتة أرز مصبعة جاهزة للتحمير فوراً",
        images: ["rice_kofta.jpg"],
        category: "ready",
        features: [
            "لحم صافي وأرز فاخر",
            "خضرة طازجة وتوابل مضبوطة",
            "مصبعة جاهزة لتوفير الوقت",
            "طعم بيتي أصلي"
        ]
    },
    
    "shish": {
        id: "shish",
        title: "شيش طاووق",
        price: "330",
        unit: "كيلو",
        description: "فراخ مشوية بتتبيلة مميزة",
        images: ["Shish.jpeg"],
        category: "grill",
        features: [
            "قطع دجاج طازجة",
            "تتبيلة زبادي وبهارات شرقية",
            "مشوي على الفحم"
        ]
    },
    "frakh": {
        id: "frakh",
        title: "فرخة مشوية",
        price: "300",
        unit: "الواحدة",
        description: "فرخة كاملة مشوية على الفحم",
        images: ["frakh.jpeg"],
        category: "grill",
        features: [
            "فرخة كاملة متبلة بتوابل خاصة",
            "مشوية على الفحم لطعم مدخن",
            "تقدم مع السلطة والطحينة"
        ]
    },
    "koftafrakh": {
        id: "koftafrakh",
        title: "كفتة الفراخ",
        price: "330",
        unit: "كيلو",
        description: "كفتة فراخ مشوية",
        images: ["Koftafrakh.jpeg"],
        category: "grill",
        features: [
            "دجاج مفروم طازج",
            "تتبيلة خفيفة",
            "مشوية على الفحم"
        ]
    },
    "baneh": {
        id: "baneh",
        title: "بانيه مشوي",
        price: "330",
        unit: "كيلو",
        description: "بانيه فراخ مشوي",
        images: ["baneh.jpg"],
        category: "grill",
        features: [
            "شرائح دجاج بانيه متبلة",
            "مشوية بدون زيت",
            "مقرمشة وخفيفة"
        ]
    },
    "skebda": {
        id: "skebda",
        title: "كبدة مشوية",
        price: "480",
        unit: "كيلو",
        description: "كبدة مشوية على الفحم",
        images: ["Skebda.jpeg"],
        category: "grill",
        features: [
            "كبدة بقري طازجة",
            "تتبيلة خفيفة",
            "مشوية على الفحم"
        ]
    },
    "sujuk": {
        id: "sujuk",
        title: "سجق مشوي",
        price: "440",
        unit: "كيلو",
        description: "سجق مشوي على الفحم",
        images: ["sujuk.jpeg"],
        category: "grill",
        features: [
            "سجق بلدي محشو بتوابل شرقية",
            "مشوي على الفحم",
            "طعمه حار ومميز"
        ]
    },
    "koftagrill": {
        id: "koftagrill",
        title: "كفتة لحمة جريل",
        price: "470",
        unit: "كيلو",
        description: "كفتة لحمة مشوية على الجريل",
        images: ["koftagrill.jpeg"],
        category: "grill",
        features: [
            "لحم بقري مفروم مع توابل خاصة",
            "مشوية على الجريل",
            "طرية وعصارية"
        ]
    },
    "wlahma": {
        id: "wlahma",
        title: "ورقة لحمة بالخضار",
        price: "530",
        unit: "كيلو",
        description: "ورقة لحمة مشوية مع خضار",
        images: ["Wlahma.jpg"],
        category: "grill",
        features: [
            "لحم بقري مع خضار موسمي",
            "مطهو بورق الفويل",
            "نكهة غنية وطراوة عالية"
        ]
    },
    "wfrakh": {
        id: "wfrakh",
        title: "ورقة فراخ فرن بالخضار",
        price: "420",
        unit: "كيلو",
        description: "ورقة فراخ مشوية مع خضار",
        images: ["wfrakh.jpg"], // لا يوجد صورة منفصلة في الصفحة
        category: "grill",
        features: [
            "دجاج مع خضار موسمي",
            "مطهو بورق الفويل في الفرن",
            "طعم شهي وطراوة"
        ]
    },
    "hawawshi": {
        id: "hawawshi",
        title: "حواوشي مخصوص كبير",
        price: "90",
        unit: "الرغيف",
        description: "حواوشي باللحم المفروم",
        images: ["Hawawshi.jpeg"],
        category: "grill",
        features: [
            "خبز بلدي محشو باللحم المفروم",
            "تتبيلة سرية",
            "مقرمش من الخارج وطري من الداخل"
        ]
    },
    // إضافات
    "tahina": {
        id: "tahina",
        title: "طحينة",
        price: "10",
        unit: "طبق",
        description: "طحينة بيتية مميزة",
        images: ["tahina.jpg"],
        category: "extras",
        features: [
            "مصنوعة من سمسم فاخر",
            "قوام كريمي وطعم غني",
            "تقدم طازجة يومياً"
        ]
    },
    "salad": {
        id: "salad",
        title: "سلطة خضراء",
        price: "10",
        unit: "طبق",
        description: "سلطة طازجة من الخضروات الموسمية",
        images: ["salad.jpg"],
        category: "extras",
        features: [
            "خضروات موسمية طازجة",
            "تتبيلة ليمون وزيت زيتون",
            "مناسبة مع جميع الأطباق"
        ]
    },
    "eish": {
        id: "eish",
        title: "عيش بلدي",
        price: "10",
        unit: "5 رغيف",
        description: "خبز بلدي طازج من الفرن",
        images: ["eish.jpg"],
        category: "extras",
        features: [
            "مخبوز يومياً في الفرن البلدي",
            "قوام طري وطعم أصيل",
            "يقدم ساخناً مع الوجبات"
        ]
    }
};

// دالة لاستخراج معامل ID من URL
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

window.products = products;
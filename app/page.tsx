import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">

      {/* ── شريط التنقل ── */}
      <header style={{ background: "var(--brand-dark)" }} className="sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Image src="/logo-white.svg" alt="شعار القرآن يُسر" width={120} height={40} priority />
          <nav className="flex gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">المميزات</a>
            <a href="#download" className="hover:text-white transition-colors">تحميل</a>
            <Link href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
          </nav>
        </div>
      </header>

      {/* ── بطاقة الترحيب ── */}
      <section
        style={{ background: "linear-gradient(160deg, var(--brand-dark) 0%, var(--brand-mid) 100%)" }}
        className="text-white text-center py-24 px-6"
      >
        <Image
          src="/icon.png"
          alt="أيقونة التطبيق"
          width={120}
          height={120}
          className="mx-auto rounded-3xl shadow-2xl mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
          القرآن الكريم يُسر
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
          تطبيق لقراءة القرآن الكريم بخط حفص الذكي مع تخطيط يوافق صفحات المصحف الشريف،
          بواجهة بسيطة وسهلة الاستخدام.
        </p>
        <a
          id="download"
          href="#download-section"
          style={{ background: "var(--gold)" }}
          className="inline-block text-white font-semibold px-10 py-4 rounded-full shadow-lg text-lg hover:brightness-110 transition-all"
        >
          حمّل التطبيق مجاناً
        </a>
      </section>

      {/* ── المميزات ── */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ color: "var(--brand-dark)" }}>
            مميزات التطبيق
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-8 text-center shadow-sm border border-gray-100"
                style={{ background: "var(--brand-light)" }}
              >
                <div className="text-5xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--brand-dark)" }}>{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── قسم التحميل ── */}
      <section
        id="download-section"
        style={{ background: "var(--brand-dark)" }}
        className="py-20 px-6 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">حمّل التطبيق الآن</h2>
        <p className="text-white/70 mb-10 text-lg">متاح على متجر Google Play</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.quraner.yosr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "var(--gold)" }}
          className="inline-flex items-center gap-3 text-white font-semibold px-10 py-4 rounded-full text-lg hover:brightness-110 transition-all shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M3.18 23.76a1.5 1.5 0 0 0 2.08.54l11.3-6.52-2.56-2.57-10.82 8.55ZM.5 1.05C.19 1.42 0 1.96 0 2.67v18.66c0 .71.19 1.25.5 1.62l.08.08 10.45-10.45v-.25L.58.97.5 1.05Zm19.48 9.61-2.97-1.72-2.86 2.86 2.86 2.86 2.98-1.72c.85-.49.85-1.29-.01-1.78Zm-16.8 12.1 11.3-6.52-2.56-2.57-8.74 9.09Z"/>
          </svg>
          تحميل من Google Play
        </a>
      </section>

      {/* ── التذييل ── */}
      <footer className="bg-gray-900 text-gray-400 text-sm text-center py-8 px-6">
        <p className="mb-2">
          للتواصل:{" "}
          <a href="mailto:info@progspace.sa" className="text-white hover:underline">
            info@progspace.sa
          </a>
        </p>
        <p>
          <Link href="/privacy" className="hover:text-white underline">
            سياسة الخصوصية
          </Link>
          {" · "}
          جميع الحقوق محفوظة © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: "📖",
    title: "خط حفص الذكي",
    desc: "يعرض القرآن الكريم بخط حفص الذكي المخصص لتشكيل آيات المصحف بدقة عالية.",
  },
  {
    icon: "🔍",
    title: "بحث سريع",
    desc: "ابحث في نص القرآن الكريم بالكلمة أو الآية مباشرةً بدون اتصال بالإنترنت.",
  },
  {
    icon: "📚",
    title: "تصفح بالصفحة أو السورة",
    desc: "انتقل بين السور والصفحات بسهولة مع حفظ موضع القراءة تلقائياً.",
  },
  {
    icon: "🔆",
    title: "تحكم في حجم الخط",
    desc: "كبّر أو صغّر الخط بالقرص لراحة القراءة على جميع الأجهزة.",
  },
  {
    icon: "📴",
    title: "يعمل بدون إنترنت",
    desc: "قاعدة بيانات القرآن مدمجة في التطبيق — لا حاجة إلى اتصال بالإنترنت.",
  },
  {
    icon: "🌙",
    title: "تصميم هادئ",
    desc: "واجهة نظيفة وهادئة تعينك على التركيز والخشوع أثناء القراءة.",
  },
];

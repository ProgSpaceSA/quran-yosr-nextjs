import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "سياسة الخصوصية — القرآن الكريم يُسر",
  description: "سياسة خصوصية تطبيق القرآن الكريم يُسر",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">

      {/* ── شريط التنقل ── */}
      <header style={{ background: "var(--brand-dark)" }} className="shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo-white.svg" alt="شعار القرآن يُسر" width={120} height={40} priority />
          </Link>
          <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors">
            → الرئيسية
          </Link>
        </div>
      </header>

      {/* ── المحتوى ── */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: "var(--brand-dark)" }}
        >
          سياسة الخصوصية
        </h1>
        <p className="text-gray-500 text-sm mb-10">آخر تحديث: فبراير ٢٠٢٦</p>

        <div className="space-y-10 text-gray-700 leading-loose text-base">

          <Section title="مقدمة">
            نرحّب بكم في تطبيق <strong>القرآن الكريم يُسر</strong>. تصف هذه الوثيقة سياسة
            الخصوصية المتعلقة بالتطبيق وكيفية تعاملنا مع بيانات المستخدمين — أو عدم تعاملنا
            معها في الغالب.
          </Section>

          <Section title="المعلومات التي نجمعها">
            <strong>لا يجمع التطبيق أي معلومات شخصية.</strong> جميع بيانات القراءة
            (موضع القراءة، حجم الخط، وغيرها) تُحفظ محلياً على جهازك فقط ولا تُرسل إلى
            أي خادم خارجي.
            <br /><br />
            التطبيق يعمل بدون اتصال بالإنترنت بالكامل باستثناء ما قد تتطلبه منظومة
            Android من أذونات شبكة افتراضية.
          </Section>

          <Section title="الأذونات المستخدمة">
            يطلب التطبيق الإذن التالي فقط:
            <ul className="list-disc list-inside mt-3 space-y-2 pr-4">
              <li>
                <strong>الإنترنت (INTERNET):</strong> مطلوب بواسطة إطار عمل Flutter
                لأغراض التشخيص في وضع التطوير فقط. لا يُستخدم التطبيق الشبكة في وضع
                الإنتاج لأي غرض.
              </li>
            </ul>
          </Section>

          <Section title="مشاركة البيانات مع أطراف ثالثة">
            لا نشارك أي بيانات مع أطراف ثالثة لأننا لا نجمع أي بيانات أصلاً. لا يحتوي
            التطبيق على إعلانات ولا على مكتبات تتبع أو تحليل.
          </Section>

          <Section title="حفظ البيانات ومكانها">
            جميع تفضيلاتك (مثل موضع القراءة وحجم الخط) تُخزَّن محلياً على جهازك عبر
            تقنية <code className="bg-gray-100 px-1 rounded">SharedPreferences</code>{" "}
            الخاصة بنظام Android. يمكنك حذف هذه البيانات في أي وقت عبر مسح بيانات
            التطبيق من إعدادات جهازك.
          </Section>

          <Section title="خصوصية الأطفال">
            التطبيق مناسب لجميع الأعمار. لا يجمع أي معلومات من أي مستخدم بصرف النظر
            عن عمره.
          </Section>

          <Section title="التغييرات على سياسة الخصوصية">
            قد نحدّث هذه السياسة من وقت لآخر. سيتم نشر النسخة المحدّثة على هذه الصفحة
            مع ذكر تاريخ التحديث. يُعدّ استمرار استخدامك للتطبيق بعد التغييرات موافقةً
            على السياسة الجديدة.
          </Section>

          <Section title="التواصل معنا">
            إذا كان لديك أي استفسار بشأن سياسة الخصوصية، يمكنك التواصل معنا عبر:
            <br />
            <a
              href="mailto:info@progspace.sa"
              className="font-semibold hover:underline"
              style={{ color: "var(--brand-mid)" }}
            >
              info@progspace.sa
            </a>
          </Section>

        </div>
      </main>

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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2
        className="text-xl font-bold mb-3 pb-2 border-b"
        style={{ color: "var(--brand-dark)", borderColor: "var(--brand-light)" }}
      >
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}

// app/faq/page.tsx (for App Router) or pages/faq.tsx (for Pages Router)
import FAQPage from '@/components/FAQPage';
import { loadFAQData } from '@/lib/faq-data-loader';

export default async function FAQPageRoute() {
  const faqData = await loadFAQData();

  return (
    <div className="bg-body min-h-screen px-5 md:px-20 py-6">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between">
        <div className='w-full md:w-1/2'>
          <h1 className="text-5xl font-bold font-merriweather text-black mb-4">
            Frequently<br />
            Asked Questions (FAQs)
          </h1>

          <p className="text-grey-2 text-xl font-semibold max-w-md">
            {`Our Customers Love Us and so Will You! But Don't Take Our Word for It.`}
          </p>
        </div>

        <div className="bg-white md:w-[550px] h-[160px] rounded-[30px] p-3 md:p-6 my-4 md:my-0 flex justify-between items-center">
          <div className='flex flex-col justify-between'>
            <p className="text-2xl text-black font-merriweather font-bold mb-2">
              Still have questions?
            </p>
            <p className="text-base text-grey-4 mb-3">
              Talk with the sales team
            </p>
          </div>

          <button className="cursor-pointer px-6 py-2 border border-brand rounded-[30px] text-base font-merriweather font-semibold text-brand hover:bg-gray-50 transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>

      <FAQPage data={faqData} />

    </div>
  );
}


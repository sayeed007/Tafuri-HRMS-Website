// app/faq/page.tsx (Server Component)
import FAQPageClient from '@/components/FAQPageClient';
import { loadFAQData } from '@/lib/faq-data-loader';

// This is a Server Component that handles data fetching
export default async function FAQPageRoute() {
  const faqData = await loadFAQData();

  return (
    <div className='w-full bg-body'>
      <div className='max-w-[1528px] w-full mx-auto px-5 md:px-20 py-6'>
        <FAQPageClient data={faqData} />
      </div>
    </div>

  );
}
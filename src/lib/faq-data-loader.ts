// lib/faq-data-loader.ts
import fs from 'fs';
import path from 'path';

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  slug: string;
  faqs: FAQ[];
}

/**
 * Load FAQ data from JSON files in the data directory
 * Expected structure: data/faq/[section-name].json
 */
export async function loadFAQData(): Promise<FAQSection[]> {
  const faqDir = path.join(process.cwd(), 'src', 'data', 'faq');
  
  try {
    const files = fs.readdirSync(faqDir);
    const faqSections: FAQSection[] = [];

    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(faqDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const sectionData = JSON.parse(fileContent);
        
        faqSections.push({
          title: sectionData.title,
          slug: sectionData.slug || file.replace('.json', ''),
          faqs: sectionData.faqs || []
        });
      }
    }

    return faqSections;
  } catch (error) {
    console.error('Error loading FAQ data:', error);
    return [];
  }
}

/**
 * Load FAQ data from markdown files
 * Expected structure: data/faq/[section-name].md
 */
export async function loadFAQDataFromMarkdown(): Promise<FAQSection[]> {
  const faqDir = path.join(process.cwd(), 'data', 'faq');
  
  try {
    const files = fs.readdirSync(faqDir);
    const faqSections: FAQSection[] = [];

    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(faqDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        
        const section = parseFAQMarkdown(fileContent, file);
        if (section) {
          faqSections.push(section);
        }
      }
    }

    return faqSections;
  } catch (error) {
    console.error('Error loading FAQ data from markdown:', error);
    return [];
  }
}

/**
 * Parse markdown content into FAQ format
 */
function parseFAQMarkdown(content: string, filename: string): FAQSection | null {
  const lines = content.split('\n');
  let title = '';
  const slug = filename.replace('.md', '');
  const faqs: FAQ[] = [];
  
  let currentQuestion = '';
  let currentAnswer = '';
  let isInAnswer = false;

  for (const line of lines) {
    if (line.startsWith('# ')) {
      title = line.replace('# ', '').trim();
    } else if (line.startsWith('## ')) {
      // Save previous FAQ if exists
      if (currentQuestion && currentAnswer) {
        faqs.push({
          question: currentQuestion,
          answer: currentAnswer.trim()
        });
      }
      
      // Start new FAQ
      currentQuestion = line.replace('## ', '').trim();
      currentAnswer = '';
      isInAnswer = true;
    } else if (isInAnswer && line.trim()) {
      currentAnswer += line + '\n';
    }
  }

  // Save last FAQ
  if (currentQuestion && currentAnswer) {
    faqs.push({
      question: currentQuestion,
      answer: currentAnswer.trim()
    });
  }

  return title ? { title, slug, faqs } : null;
}
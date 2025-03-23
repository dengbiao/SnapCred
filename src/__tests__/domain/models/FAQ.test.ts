import { FAQ } from '../../../domain/models/FAQ';

describe('FAQ', () => {
  it('should create a FAQ with all required properties', () => {
    const faq = new FAQ({
      id: 'faq-1',
      question: {
        zh: '如何使用快证先生?',
        en: 'How to use SnapCred?',
      },
      answer: {
        zh: '您只需上传照片，选择证件类型，系统会自动处理。',
        en: 'Simply upload your photo, select credential type, and the system will process it automatically.',
      },
      category: 'usage',
    });

    expect(faq.id).toBe('faq-1');
    expect(faq.question.zh).toBe('如何使用快证先生?');
    expect(faq.question.en).toBe('How to use SnapCred?');
    expect(faq.answer.zh).toBe('您只需上传照片，选择证件类型，系统会自动处理。');
    expect(faq.answer.en).toBe('Simply upload your photo, select credential type, and the system will process it automatically.');
    expect(faq.category).toBe('usage');
  });

  it('should throw an error if required properties are missing', () => {
    // @ts-ignore - Testing invalid input
    expect(() => new FAQ({})).toThrow('Required properties missing');

    // @ts-ignore - Testing missing properties
    expect(() => new FAQ({ id: 'test' })).toThrow('Required properties missing');
  });

  it('should get localized question based on language code', () => {
    const faq = new FAQ({
      id: 'faq-1',
      question: {
        zh: '如何使用快证先生?',
        en: 'How to use SnapCred?',
      },
      answer: {
        zh: '您只需上传照片，选择证件类型，系统会自动处理。',
        en: 'Simply upload your photo, select credential type, and the system will process it automatically.',
      },
      category: 'usage',
    });

    expect(faq.getLocalizedQuestion('zh')).toBe('如何使用快证先生?');
    expect(faq.getLocalizedQuestion('en')).toBe('How to use SnapCred?');
    expect(faq.getLocalizedQuestion('fr')).toBe('How to use SnapCred?'); // Default to English
  });

  it('should get localized answer based on language code', () => {
    const faq = new FAQ({
      id: 'faq-1',
      question: {
        zh: '如何使用快证先生?',
        en: 'How to use SnapCred?',
      },
      answer: {
        zh: '您只需上传照片，选择证件类型，系统会自动处理。',
        en: 'Simply upload your photo, select credential type, and the system will process it automatically.',
      },
      category: 'usage',
    });

    expect(faq.getLocalizedAnswer('zh')).toBe('您只需上传照片，选择证件类型，系统会自动处理。');
    expect(faq.getLocalizedAnswer('en')).toBe('Simply upload your photo, select credential type, and the system will process it automatically.');
    expect(faq.getLocalizedAnswer('fr')).toBe('Simply upload your photo, select credential type, and the system will process it automatically.'); // Default to English
  });
}); 
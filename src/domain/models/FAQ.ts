interface LocalizedText {
  zh: string;
  en: string;
}

interface FAQProps {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
  category: string;
}

export class FAQ {
  readonly id: string;
  readonly question: LocalizedText;
  readonly answer: LocalizedText;
  readonly category: string;

  constructor(props: FAQProps) {
    if (!props || !props.id || !props.question || !props.answer || !props.category) {
      throw new Error('Required properties missing');
    }

    this.id = props.id;
    this.question = props.question;
    this.answer = props.answer;
    this.category = props.category;
  }

  /**
   * Get localized question based on language code
   * @param langCode Language code (zh or en)
   * @returns Localized question
   */
  getLocalizedQuestion(langCode: string): string {
    if (langCode === 'zh' && this.question.zh) {
      return this.question.zh;
    }
    
    return this.question.en;
  }

  /**
   * Get localized answer based on language code
   * @param langCode Language code (zh or en)
   * @returns Localized answer
   */
  getLocalizedAnswer(langCode: string): string {
    if (langCode === 'zh' && this.answer.zh) {
      return this.answer.zh;
    }
    
    return this.answer.en;
  }
} 
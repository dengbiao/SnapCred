interface LocalizedText {
  zh: string;
  en: string;
}

interface Dimensions {
  width: number;
  height: number;
}

interface CredentialTypeProps {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  icon: string;
  dimensions: Dimensions;
  previewImage: string;
}

export class CredentialType {
  readonly id: string;
  readonly name: LocalizedText;
  readonly description: LocalizedText;
  readonly icon: string;
  readonly dimensions: Dimensions;
  readonly previewImage: string;

  constructor(props: CredentialTypeProps) {
    if (!props || !props.id || !props.name || !props.description || 
        !props.icon || !props.dimensions || !props.previewImage) {
      throw new Error('Required properties missing');
    }

    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.icon = props.icon;
    this.dimensions = props.dimensions;
    this.previewImage = props.previewImage;
  }

  /**
   * Get localized name based on language code
   * @param langCode Language code (zh or en)
   * @returns Localized name
   */
  getLocalizedName(langCode: string): string {
    if (langCode === 'zh' && this.name.zh) {
      return this.name.zh;
    }
    
    return this.name.en;
  }

  /**
   * Get localized description based on language code
   * @param langCode Language code (zh or en)
   * @returns Localized description
   */
  getLocalizedDescription(langCode: string): string {
    if (langCode === 'zh' && this.description.zh) {
      return this.description.zh;
    }
    
    return this.description.en;
  }

  /**
   * Get dimensions in pixels based on DPI
   * @param dpi Dots per inch (default: 300)
   * @returns Dimensions in pixels
   */
  getDimensionsInPixels(dpi: number = 300): Dimensions {
    // Convert from mm to inches, then to pixels
    const mmToInch = 25.4;
    return {
      width: Math.round((this.dimensions.width * dpi) / mmToInch),
      height: Math.round((this.dimensions.height * dpi) / mmToInch),
    };
  }
} 
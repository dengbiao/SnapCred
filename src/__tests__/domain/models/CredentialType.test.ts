import { CredentialType } from '../../../domain/models/CredentialType';

describe('CredentialType', () => {
  it('should create a credential type with all required properties', () => {
    const credentialType = new CredentialType({
      id: 'passport',
      name: {
        zh: '护照',
        en: 'Passport',
      },
      description: {
        zh: '标准护照证件照',
        en: 'Standard passport photo',
      },
      icon: 'passport-icon.svg',
      dimensions: {
        width: 35,
        height: 45,
      },
      previewImage: 'passport-preview.jpg',
    });

    expect(credentialType.id).toBe('passport');
    expect(credentialType.name.zh).toBe('护照');
    expect(credentialType.name.en).toBe('Passport');
    expect(credentialType.description.zh).toBe('标准护照证件照');
    expect(credentialType.description.en).toBe('Standard passport photo');
    expect(credentialType.icon).toBe('passport-icon.svg');
    expect(credentialType.dimensions.width).toBe(35);
    expect(credentialType.dimensions.height).toBe(45);
    expect(credentialType.previewImage).toBe('passport-preview.jpg');
  });

  it('should throw an error if required properties are missing', () => {
    // @ts-ignore - Testing invalid input
    expect(() => new CredentialType({})).toThrow('Required properties missing');

    // @ts-ignore - Testing missing properties
    expect(() => new CredentialType({ id: 'test' })).toThrow('Required properties missing');
  });

  it('should get localized name based on language code', () => {
    const credentialType = new CredentialType({
      id: 'passport',
      name: {
        zh: '护照',
        en: 'Passport',
      },
      description: {
        zh: '标准护照证件照',
        en: 'Standard passport photo',
      },
      icon: 'passport-icon.svg',
      dimensions: {
        width: 35,
        height: 45,
      },
      previewImage: 'passport-preview.jpg',
    });

    expect(credentialType.getLocalizedName('zh')).toBe('护照');
    expect(credentialType.getLocalizedName('en')).toBe('Passport');
    expect(credentialType.getLocalizedName('fr')).toBe('Passport'); // Default to English
  });

  it('should get localized description based on language code', () => {
    const credentialType = new CredentialType({
      id: 'passport',
      name: {
        zh: '护照',
        en: 'Passport',
      },
      description: {
        zh: '标准护照证件照',
        en: 'Standard passport photo',
      },
      icon: 'passport-icon.svg',
      dimensions: {
        width: 35,
        height: 45,
      },
      previewImage: 'passport-preview.jpg',
    });

    expect(credentialType.getLocalizedDescription('zh')).toBe('标准护照证件照');
    expect(credentialType.getLocalizedDescription('en')).toBe('Standard passport photo');
    expect(credentialType.getLocalizedDescription('fr')).toBe('Standard passport photo'); // Default to English
  });

  it('should get dimensions in pixels when specified', () => {
    const credentialType = new CredentialType({
      id: 'passport',
      name: {
        zh: '护照',
        en: 'Passport',
      },
      description: {
        zh: '标准护照证件照',
        en: 'Standard passport photo',
      },
      icon: 'passport-icon.svg',
      dimensions: {
        width: 35,
        height: 45,
      },
      previewImage: 'passport-preview.jpg',
    });

    // Assuming 300dpi conversion
    const pixelDimensions = credentialType.getDimensionsInPixels(300);
    expect(pixelDimensions.width).toBe(Math.round(35 * 300 / 25.4));
    expect(pixelDimensions.height).toBe(Math.round(45 * 300 / 25.4));
  });
}); 
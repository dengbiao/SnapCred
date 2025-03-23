interface LocalizedText {
  zh: string;
  en: string;
}

interface TeamMemberProps {
  id: string;
  name: string;
  title: LocalizedText;
  avatar: string;
  bio: LocalizedText;
}

export class TeamMember {
  readonly id: string;
  readonly name: string;
  readonly title: LocalizedText;
  readonly avatar: string;
  readonly bio: LocalizedText;

  constructor(props: TeamMemberProps) {
    if (!props || !props.id || !props.name || !props.title || !props.avatar || !props.bio) {
      throw new Error('Required properties missing');
    }

    this.id = props.id;
    this.name = props.name;
    this.title = props.title;
    this.avatar = props.avatar;
    this.bio = props.bio;
  }

  /**
   * Get localized title based on language code
   * @param langCode Language code (zh or en)
   * @returns Localized title
   */
  getLocalizedTitle(langCode: string): string {
    if (langCode === 'zh' && this.title.zh) {
      return this.title.zh;
    }
    
    return this.title.en;
  }

  /**
   * Get localized biography based on language code
   * @param langCode Language code (zh or en)
   * @returns Localized biography
   */
  getLocalizedBio(langCode: string): string {
    if (langCode === 'zh' && this.bio.zh) {
      return this.bio.zh;
    }
    
    return this.bio.en;
  }

  /**
   * Get full URL for avatar image
   * @param basePath Base path for avatars
   * @returns Full avatar URL
   */
  getAvatarUrl(basePath: string): string {
    // Ensure base path ends with slash
    const normalizedPath = basePath.endsWith('/') ? basePath : `${basePath}/`;
    return `${normalizedPath}${this.avatar}`;
  }
} 
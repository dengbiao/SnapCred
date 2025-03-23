import { TeamMember } from '../../../domain/models/TeamMember';

describe('TeamMember', () => {
  it('should create a team member with all required properties', () => {
    const teamMember = new TeamMember({
      id: 'john-doe',
      name: 'John Doe',
      title: {
        zh: '首席执行官',
        en: 'Chief Executive Officer',
      },
      avatar: 'john-doe.jpg',
      bio: {
        zh: 'John是一位经验丰富的技术专家',
        en: 'John is an experienced technology specialist',
      },
    });

    expect(teamMember.id).toBe('john-doe');
    expect(teamMember.name).toBe('John Doe');
    expect(teamMember.title.zh).toBe('首席执行官');
    expect(teamMember.title.en).toBe('Chief Executive Officer');
    expect(teamMember.avatar).toBe('john-doe.jpg');
    expect(teamMember.bio.zh).toBe('John是一位经验丰富的技术专家');
    expect(teamMember.bio.en).toBe('John is an experienced technology specialist');
  });

  it('should throw an error if required properties are missing', () => {
    // @ts-ignore - Testing invalid input
    expect(() => new TeamMember({})).toThrow('Required properties missing');

    // @ts-ignore - Testing missing properties
    expect(() => new TeamMember({ id: 'test' })).toThrow('Required properties missing');
  });

  it('should get localized title based on language code', () => {
    const teamMember = new TeamMember({
      id: 'john-doe',
      name: 'John Doe',
      title: {
        zh: '首席执行官',
        en: 'Chief Executive Officer',
      },
      avatar: 'john-doe.jpg',
      bio: {
        zh: 'John是一位经验丰富的技术专家',
        en: 'John is an experienced technology specialist',
      },
    });

    expect(teamMember.getLocalizedTitle('zh')).toBe('首席执行官');
    expect(teamMember.getLocalizedTitle('en')).toBe('Chief Executive Officer');
    expect(teamMember.getLocalizedTitle('fr')).toBe('Chief Executive Officer'); // Default to English
  });

  it('should get localized bio based on language code', () => {
    const teamMember = new TeamMember({
      id: 'john-doe',
      name: 'John Doe',
      title: {
        zh: '首席执行官',
        en: 'Chief Executive Officer',
      },
      avatar: 'john-doe.jpg',
      bio: {
        zh: 'John是一位经验丰富的技术专家',
        en: 'John is an experienced technology specialist',
      },
    });

    expect(teamMember.getLocalizedBio('zh')).toBe('John是一位经验丰富的技术专家');
    expect(teamMember.getLocalizedBio('en')).toBe('John is an experienced technology specialist');
    expect(teamMember.getLocalizedBio('fr')).toBe('John is an experienced technology specialist'); // Default to English
  });

  it('should generate full avatar URL', () => {
    const teamMember = new TeamMember({
      id: 'john-doe',
      name: 'John Doe',
      title: {
        zh: '首席执行官',
        en: 'Chief Executive Officer',
      },
      avatar: 'john-doe.jpg',
      bio: {
        zh: 'John是一位经验丰富的技术专家',
        en: 'John is an experienced technology specialist',
      },
    });

    expect(teamMember.getAvatarUrl('/images/team')).toBe('/images/team/john-doe.jpg');
  });
}); 
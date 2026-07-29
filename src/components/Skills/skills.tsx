import {  useState } from 'react';
import { cn } from '../../lib/utils';
import { skills } from './skillarray';
import { useLanguage } from '../language/LanguageContext';

const categories = ['All', 'Frontend', 'Backend' , 'Tools'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useLanguage();
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  const filteredSkills = skills.filter((skill) =>
    activeCategory === 'all'
      ? true
      : skill.category.toLowerCase() === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('mySkills').split(' ')[0]}{' '}
          <span className="text-primary">{t('mySkills').split(' ')[1]}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full font-semibold transition-all duration-300 capitalize cursor-pointer',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary/70 text-foreground hover:bg-secondary/90'
              )}
            >
              {t(category)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="bg-card p-6 rounded-lg shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-foreground">{skill.name}</h3>
              </div>

              <div className="space-y-2">
                <div className="relative w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                  {/* <div
                    className="absolute inset-y-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isMounted ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 50}ms`,
                    }}
                  /> */}
                </div>
                <div className="flex justify-end">
                  {/* <span className="text-sm font-medium text-muted-foreground">
                    {skill.level}
                  </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
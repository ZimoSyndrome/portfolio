'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ThemeToggle from './components/theme/ThemeToggle';

export default function MinimalModernPortfolio() {
	return (
		<div className="relative min-h-screen text-black dark:text-white">
			<div className="absolute top-4 right-4 z-10">
				<ThemeToggle />
			</div>
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}

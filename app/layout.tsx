import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import ThemeProvider from './components/theme/ThemeProvider';
import ParticleBackground from './components/ParticleBackground';



const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '[Your Name] - Software Developer',
	description:
		'Welcome to my portfolio! I am a passionate software developer with a focus on clean, minimal, and effective solutions. I believe in the power of simplicity and thoughtful design to create impactful digital experiences.',
	keywords: [
		'Software Developer',
		'Clean Code',
		'Minimal Design',
		'Modern Development',
		'Web Development',
		'User Experience',
		'Design Systems',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Performance',
		'Accessibility',
		'Minimalist Portfolio',
		'[Your Name]',
	],
	authors: [{ name: '[Your Name]' }],
	creator: '[Your Name]',
	openGraph: {
		title: '[Your Name] - Software Developer Portfolio',
		description: 'Passionate software developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		url: 'https://your-domain.com',
		siteName: '[Your Name] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Your Name] - Modern Minimal Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Your Name] - Software Developer',
		description: 'Passionate software developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					{/* Global Background Layer */}
					<div className="fixed inset-0 z-0 pointer-events-none">
						<div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-400 dark:from-purple-900/20 dark:to-blue-900/20" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.7),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
						<ParticleBackground />
					</div>

					<div className="relative z-10">{children}</div>
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}

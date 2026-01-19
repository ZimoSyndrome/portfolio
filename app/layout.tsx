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
	title: 'Zimo Chen - Portfolio',
	description:
		'Welcome to my portfolio! I am Zimo Chen, a Business Analytics undergraduate with a second major in Quantitative Finance. Explore my projects and skills in finance and machine learning.',
	keywords: [
		'Zimo Chen',
		'Portfolio',
		'Business Analytics',
		'Quantitative Finance',
		'Machine Learning',
		'Finance Projects',
		'Data Analysis',
		'Software Developer',
		'Python',
		'R',
		'SQL',
		'ARIMA',
		'GARCH',
		'XGBoost',
		'LSTM',
		'SOFR',
		'Derivatives Pricing',
		'Implied Volatility',
		'Monte Carlo Simulation',
	],
	authors: [{ name: 'Zimo Chen' }],
	creator: 'Zimo Chen',
	openGraph: {
		title: 'Zimo Chen - Portfolio',
		description: 'Welcome to my portfolio! I am Zimo Chen, a Business Analytics undergraduate with a second major in Quantitative Finance. Explore my projects and skills in finance and machine learning.',
		url: 'https://your-domain.com',
		siteName: 'Zimo Chen - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Zimo Chen - Modern Minimal Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Zimo Chen - Portfolio',
		description: 'Welcome to my portfolio! I am Zimo Chen, a Business Analytics undergraduate with a second major in Quantitative Finance. Explore my projects and skills in finance and machine learning.',
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
						<div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-orange-50 dark:from-gray-900 dark:to-blue-950" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.7),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
						<ParticleBackground />
					</div>

					{/* default
					
					<div className="fixed inset-0 z-0 pointer-events-none">
						<div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-400 dark:from-purple-900/20 dark:to-blue-900/20" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.7),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
						<ParticleBackground />
					</div>

					 */}


					 {/* off-white + deep navy
					 					
					<div className="fixed inset-0 z-0 pointer-events-none">
						<div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-zinc-200 dark:from-slate-900 dark:to-cyan-900/30" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.7),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
						<ParticleBackground />
					</div>
					 
					 
					 */}

					<div className="relative z-10">{children}</div>
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}

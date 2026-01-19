'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'Multi-Model Market Forecasting & Risk Engine',
		summary:
			'End-to-end pipeline for forecasting equity returns and volatility, evaluated with walk-forward validation and risk metrics.',
		subtitle: 'ARIMA–GARCH · XGBoost · LSTM · Walk-Forward Validation',
		image: '/code2.jpg',
		projectUrl: '/forecasting_analysis.html',
		githubUrl: 'https://github.com/ZimoSyndrome/MMForecasting',
	},
	{
		id: 2,
		title: 'Rates Term-Structure & Derivatives Analytics Suite',
		summary:
			'Built SOFR forward curves and priced FRAs/swaps; analysed valuation impacts under yield-curve shifts.',
		subtitle: 'SOFR Curves · FRAs · Interest-Rate Swaps',
		image: '/laptop.jpg',
		projectUrl: '/sofr_report.pdf',
		githubUrl: 'https://github.com/ZimoSyndrome/sofr-futures-swap-analytics',
	},
	{
		id: 3,
		title: 'Options Volatility & Risk-Neutral Distribution Lab',
		summary:
			'Computed implied vols and volatility surfaces, derived risk-neutral densities, and ran Monte Carlo under GBM/Heston.',
		subtitle: 'Implied Volatility · Breeden–Litzenberger · Monte Carlo',
		image: '/code.jpg',
		projectUrl: '#',
		githubUrl: '#',
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white"
			>
				My Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-white dark:bg-gradient-to-br dark:from-purple-900/50 dark:to-blue-900/50 rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300"
					>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
						<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 group-hover:to-black/95 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
							<p className="text-gray-200 mb-2 line-clamp-2">{project.summary}</p>
							<p className="text-xs md:text-sm text-gray-300/90 mb-4 line-clamp-1">{project.subtitle}</p>
							<div className="flex gap-4">
								<Link
									href={project.projectUrl}
									target="_blank"         
									rel="noopener noreferrer" 
									className="text-sm px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
								>
									View Project
								</Link>
								<Link
									href={project.githubUrl}  
									target="_blank"           
									rel="noopener noreferrer" 
									className="text-sm px-4 py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-full transition-all duration-300 backdrop-blur-sm"
								>
									GitHub
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

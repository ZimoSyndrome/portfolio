'use client';

import { motion } from 'framer-motion';

const skillGroups = [
	{
		title: 'Programming Languages',
		description: 'Core languages I use for modelling and systems work.',
		accent: '#22c55e',
		items: ['Python', 'SQL', 'R', 'MATLAB', 'Java', 'C'],
	},
	{
		title: 'Data & Analytics',
		description: 'Tooling for data wrangling, analysis, and experimentation.',
		accent: '#3b82f6',
		items: ['pandas', 'NumPy', 'Excel VBA', 'Tableau', 'Power BI', 'Google Analytics'],
	},
	{
		title: 'Machine Learning',
		description: 'Libraries and modelling techniques for prediction and evaluation.',
		accent: '#f97316',
		items: ['scikit-learn', 'statsmodels', 'TensorFlow', 'PyTorch', 'XGBoost', 'LightGBM'],
	},
	{
		title: 'Quant Finance',
		description: 'Financial modelling and risk concepts I’ve implemented in projects.',
		accent: '#a855f7',
		items: [
			'Time Series (ARIMA, GARCH)',
			'Monte Carlo Simulation',
			'Derivatives Pricing',
			'Yield Curve Modelling',
			'Backtesting & VaR',
			'Risk-Neutral Valuation',
		],
	},
];

export default function SkillsSection() {
	return (
		<section className="py-12 md:py-20 bg-white dark:bg-black">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white"
				>
					Skills & Technologies
				</motion.h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{skillGroups.map((group, groupIndex) => (
						<motion.div
							key={group.title}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
							whileHover={{ y: -2 }}
							className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-lg"
						>
							{/* subtle interactive highlight */}
							<motion.div
								aria-hidden
								className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full"
								style={{
									background: `radial-gradient(circle, ${group.accent}22 0%, transparent 62%)`,
								}}
								animate={{ scale: [1, 1.04, 1] }}
								transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
							/>

							<div className="p-7">
								<div className="flex items-start gap-4">
									<div className="h-10 w-1.5 rounded-full" style={{ backgroundColor: group.accent }} />
									<div>
										<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
											{group.title}
										</h3>
										<p className="mt-1 text-sm md:text-base text-gray-600 dark:text-white/70">
											{group.description}
										</p>
									</div>
								</div>

								<div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
									{group.items.map((item, itemIndex) => (
										<motion.div
											key={item}
											initial={{ opacity: 0, scale: 0.96 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.35, delay: itemIndex * 0.04 }}
											whileHover={{ scale: 1.03 }}
											className="group rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4 shadow-sm transition-all hover:shadow-md hover:border-black/20 dark:hover:border-white/20 hover:bg-white/80 dark:hover:bg-white/10 flex items-center justify-center text-center"
										>
											<div className="w-full">
												<p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-gray-900 dark:group-hover:text-white">
													{item}
												</p>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

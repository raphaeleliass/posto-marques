import { motion } from "motion/react";

import { services } from "./site-data";

export function ServicesSection() {
	return (
		<section
			id="servicos"
			className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
		>
			<div data-scroll-reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
				<div>
					<p className="font-semibold text-pm-neon text-xs uppercase tracking-[0.26em]">
						Serviços
					</p>
					<h2 className="mt-4 max-w-3xl font-heading text-7xl leading-[0.84] tracking-[-0.02em] sm:text-8xl">
						Pit stop completo, sem excesso.
					</h2>
				</div>
				<p className="max-w-sm text-pm-muted text-sm leading-6">
					Da bomba ao atendimento, cada serviço existe para reduzir atrito e
					devolver você à rota com tranquilidade.
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{services.map((service) => {
					const Icon = service.icon;

					return (
						<motion.article
							key={service.title}
							initial={{ opacity: 0, y: 22 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ y: -6 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="group min-h-80 rounded-[1.75rem] border border-white/10 bg-pm-surface p-6 transition-colors hover:border-pm-neon/40 hover:bg-[#141812] hover:shadow-pm-neon/10 hover:shadow-xl"
						>
							<div className="mb-14 flex items-center justify-between">
								<div className="grid size-12 place-items-center rounded-2xl border border-pm-neon/20 bg-pm-neon/8 text-pm-neon transition group-hover:border-pm-orange/50 group-hover:text-pm-orange">
								<Icon className="size-5" />
								</div>
								<span className="font-heading text-white/12 text-6xl leading-none">0{services.indexOf(service) + 1}</span>
							</div>
							<h3 className="font-heading text-5xl leading-[0.9] tracking-[-0.02em]">
								{service.title}
							</h3>
							<p className="mt-4 text-pm-muted text-sm leading-6">
								{service.description}
							</p>
						</motion.article>
					);
				})}
			</div>
		</section>
	);
}

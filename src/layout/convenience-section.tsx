import { motion } from "motion/react";
import { Coffee, SprayCan } from "lucide-react";

export function ConvenienceSection() {
	return (
		<section
			id="conveniencia"
			className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
		>
			<div data-scroll-reveal className="mb-12">
				<p className="pm-kicker">Conveniência & Lavagem</p>
				<h2 className="pm-section-title mt-4">Pausa e cuidado.</h2>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<motion.div
					initial={{ opacity: 0, y: 22 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="pm-panel p-8"
				>
					<div className="mb-8 grid size-16 place-items-center rounded-2xl border border-pm-neon/20 bg-pm-neon/8 text-pm-neon">
						<Coffee className="size-8" />
					</div>
					<h3 className="font-heading text-5xl">Loja de conveniência</h3>
					<p className="mt-4 text-pm-muted leading-7">
						Bebidas geladas, snacks essenciais e itens para sua viagem. Tudo à mão
						para você seguir caminho com conforto.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 22 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="pm-panel p-8"
				>
					<div className="mb-8 grid size-16 place-items-center rounded-2xl border border-pm-orange/20 bg-pm-orange/8 text-pm-orange">
						<SprayCan className="size-8" />
					</div>
					<h3 className="font-heading text-5xl">Lava rápido express</h3>
					<p className="mt-4 text-pm-muted leading-7">
						Limpeza ágil e eficiente para manter seu veículo pronto para a
						estrada, com o brilho que você gosta.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

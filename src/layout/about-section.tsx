const values = [
	["01", "Qualidade constante"],
	["02", "Fluxo ágil"],
	["03", "Confiança na rota"],
];

export function AboutSection() {
	return (
		<section
			id="sobre"
			className="relative border-white/10 border-y bg-pm-bg-soft text-pm-text"
		>
			<div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_52%,var(--color-pm-neon-soft)_52.2%,transparent_52.8%)]" />
			<div data-scroll-reveal className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:py-28">
				<div>
					<p className="font-semibold text-pm-orange text-xs uppercase tracking-[0.26em]">
						Sobre nós
					</p>
					<h2 className="mt-5 text-balance font-heading text-7xl leading-[0.82] tracking-[-0.02em] sm:text-8xl">
						Ritmo de cidade. Cuidado de estrada.
					</h2>
				</div>

				<div className="grid gap-8 text-lg text-white/64 leading-8">
					<p>
						O Posto Marques funciona como um ponto de apoio claro, eficiente e
						confiável. Menos ruído, mais precisão: uma operação que valoriza o
						tempo de quem passa e a segurança de quem volta para a rota.
					</p>
					<div className="grid gap-4 sm:grid-cols-3">
						{values.map(([number, label]) => (
							<div key={number} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
								<span className="font-heading text-pm-neon text-5xl leading-none">{number}</span>
								<p className="mt-4 font-medium text-white text-lg">{label}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

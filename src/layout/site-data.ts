import { Droplets, Gauge, Sparkles, Wrench } from "lucide-react";

export const navigation = [
	{ label: "Sobre", href: "#sobre" },
	{ label: "Serviços", href: "#servicos" },
	{ label: "Localização", href: "#localizacao" },
	{ label: "Contato", href: "#contato" },
];

export const services = [
	{
		icon: Gauge,
		title: "Combustivel premium",
		description:
			"Gasolina, etanol e diesel com controle de qualidade e atendimento sem demora.",
	},
	{
		icon: Droplets,
		title: "Óleo na medida",
		description:
			"Lubrificantes selecionados para proteger motor, rotina e estrada.",
	},
	{
		icon: Wrench,
		title: "Pit stop rápido",
		description:
			"Calibragem, fluidos e itens essenciais para voltar à rota.",
	},
	{
		icon: Sparkles,
		title: "Visual limpo",
		description:
			"Cuidado express, eficiente e sem interromper o ritmo do dia.",
	},
];

export const highlights = [
	"Qualidade monitorada",
	"Atendimento diário",
	"Parada segura",
];

export const metrics = [
	["01", "Abasteça"],
	["02", "Resolva"],
	["03", "Siga"],
];

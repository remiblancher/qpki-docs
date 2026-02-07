// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import { remarkMdLinks } from './remark-md-links.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://qentriq.dev',
	markdown: {
		remarkPlugins: [remarkMdLinks],
	},
	integrations: [
		starlight({
			title: 'QentriQ',
			description: 'Quantum-Safe PKI in Go - Post-quantum X.509 infrastructure',
			components: {
				Head: './src/components/Head.astro',
				SiteTitle: './src/components/SiteTitle.astro',
			},
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: false,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/remiblancher/post-quantum-pki' },
			],
			plugins: [
				starlightUtils({
					multiSidebar: {
						switcherStyle: 'hidden',
					},
					navLinks: {
						leading: { useSidebarLabelled: 'navLinks' },
					},
				}),
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'navLinks',
					items: [
						{ label: 'QPKI', link: '/pki/quick-start/' },
						{ label: 'QLAB', link: '/lab/overview/' },
					],
				},
				{
					label: 'QPKI Documentation',
					items: [
						{ label: 'Quick Start', slug: 'pki/quick-start' },
						{ slug: 'pki/ca' },
						{ slug: 'pki/keys' },
						{ slug: 'pki/credentials' },
						{ slug: 'pki/profiles' },
						{
							label: 'Services',
							items: [
								{ slug: 'pki/services/ocsp' },
								{ slug: 'pki/services/tsa' },
								{ slug: 'pki/services/cms' },
								{ slug: 'pki/services/cose' },
							],
						},
						{
							label: 'Reference',
							collapsed: true,
							items: [
								{ slug: 'pki/reference/concepts' },
								{ slug: 'pki/reference/cli-reference' },
								{ slug: 'pki/reference/architecture' },
								{ slug: 'pki/reference/hsm' },
								{ slug: 'pki/reference/audit' },
								{ slug: 'pki/reference/crypto-agility' },
								{ slug: 'pki/reference/troubleshooting' },
								{ slug: 'pki/reference/glossary' },
							],
						},
						{
							label: 'Development',
							collapsed: true,
							items: [
								{ slug: 'pki/dev/contributing' },
								{ slug: 'pki/dev/testing' },
								{ slug: 'pki/dev/interoperability' },
							],
						},
					],
				},
				{
					label: 'QLAB Learning',
					items: [
						{ label: 'Overview', slug: 'lab/overview' },
						{
							label: 'Discovery',
							items: [
								{ slug: 'lab/00-revelation/readme' },
								{ slug: 'lab/01-quickstart/readme' },
							],
						},
						{
							label: 'Building PKI',
							items: [
								{ slug: 'lab/02-full-chain/readme' },
								{ slug: 'lab/03-hybrid/readme' },
							],
						},
						{
							label: 'Lifecycle',
							items: [
								{ slug: 'lab/04-revocation/readme' },
								{ slug: 'lab/05-ocsp/readme' },
							],
						},
						{
							label: 'Long-term Signatures',
							items: [
								{ slug: 'lab/06-code-signing/readme' },
								{ slug: 'lab/07-timestamping/readme' },
								{ slug: 'lab/08-ltv-signatures/readme' },
							],
						},
						{
							label: 'Encryption',
							items: [
								{ slug: 'lab/09-cms-encryption/readme' },
							],
						},
						{
							label: 'Migration',
							items: [
								{ slug: 'lab/10-crypto-agility/readme' },
							],
						},
					],
				},
			],
		}),
	],
});

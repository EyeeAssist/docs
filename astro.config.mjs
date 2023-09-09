import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://EyeeAssist.github.io',
  base: '/docs',
	integrations: [
		starlight({
			title: 'EyeeAssist',
			social: {
				github: 'https://github.com/EyeeAssist/library',
			},
			sidebar: [
				{
					label: 'User',
					items: [
						{ label: 'Guide', link: '/users/guide/' },
					],
				},
				{
					label: 'Developer',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});

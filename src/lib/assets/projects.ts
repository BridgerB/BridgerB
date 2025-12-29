// src/lib/data/projects.ts

// Import portfolio images
import sparkplugImg from './portfolio/sparkplug-software/Screenshot 2025-08-13 at 00-17-35 .png';
import poshmarkImg from './portfolio/poshmark-reports/Screenshot 2025-08-13 at 00-44-04 Poshmark Reports - Analytics Dashboard.png';
import colorsImg from './portfolio/colors/Screenshot 2025-08-13 at 00-37-42 .png';
import talkedofImg from './portfolio/talkedof/Screenshot 2025-08-13 at 01-02-22 .png';
import solImg from './portfolio/sol/Screenshot 2025-08-13 at 00-34-27 .png';
import renewableImg from './portfolio/renewable-waredrobe/Screenshot 2025-08-13 at 00-25-07 Renewable Wardrobe.png';
import pyramidsImg from './portfolio/pyramids/Screenshot 2025-08-13 at 01-11-49 Great Pyramid Latitude Matches Speed of Light - 29.9792458° Discovery.png';
import btwImg from './portfolio/btw/Screenshot 2025-08-13 at 00-48-05 .png';
import viewfinderImg from './portfolio/peakpeek/Screenshot 2025-08-13 at 01-07-12 .png';
import costcoImg from './portfolio/costco-hot-dog-tracker/Screenshot 2025-08-13 at 00-52-58 .png';
import todoImg from './portfolio/todo-app/Screenshot 2025-08-13 at 00-58-41 .png';

export interface Project {
	slug: string;
	title: string;
	url: string;
	image: string;
	alt: string;
	description: string;
	technologies: string[];
	features: string[];
	released: string;
}

export const projects: Project[] = [
	{
		slug: 'sparkplug-software',
		title: 'Sparkplug',
		url: 'demo.sparkplug.software',
		image: sparkplugImg,
		alt: 'Sparkplug',
		description:
			'A comprehensive CRM for outdoor power equipment dealerships and repair shops, featuring ticket tracking, inventory management, customer relations, and business analytics.',
		technologies: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Google Maps API'],
		features: [
			'Service Ticket Management',
			'Equipment & Parts Inventory',
			'Customer & Location Mapping',
			'Labor Tracking & Reporting',
			'Invoice Generation',
			'Business Analytics Dashboard'
		],
		released: '2024-10-04T00:00:00.000Z'
	},
	{
		slug: 'poshmark-reports',
		title: 'Poshmark Reports',
		url: 'poshmarkreports.com',
		image: poshmarkImg,
		alt: 'Poshmark Reports',
		description:
			'A comprehensive analytics platform for Poshmark sellers providing detailed sales insights, revenue tracking, customer analytics, and performance reports with 20+ interactive charts and dashboards.',
		technologies: ['SvelteKit', 'PostgreSQL', 'Drizzle ORM', 'ECharts', 'Firebase Auth', 'Deno'],
		features: [
			'Sales Analytics Dashboard',
			'Revenue Tracking & Trends',
			'Customer Behavior Analysis',
			'Order Status Distribution',
			'Seasonal Sales Analysis',
			'Price Point Performance',
			'Top Buyers & Items Reports',
			'Monthly Growth Metrics',
			'Interactive Data Visualization',
			'Advanced Search & Filtering'
		],
		released: '2025-06-29T00:00:00.000Z'
	},
	{
		slug: 'colors',
		title: 'Colors',
		url: 'colors.bridgerb.com',
		image: colorsImg,
		alt: 'Colors',
		description:
			'An advanced color palette extraction tool that analyzes images to extract dominant colors and matches them against professional color libraries like Sherwin-Williams, Pantone, and Kona.',
		technologies: ['SvelteKit', 'Canvas API', 'Color Theory Algorithms', 'K-means Clustering'],
		features: [
			'Image Color Extraction',
			'Professional Color Library Matching',
			'K-means Color Clustering',
			'Interactive Color Grid',
			'CSV Export',
			'Real-time Color Analysis',
			'Multiple Sampling Rates'
		],
		released: '2024-10-06T00:00:00.000Z'
	},
	{
		slug: 'talked-of',
		title: 'Talked Of',
		url: 'talkedof.com',
		image: talkedofImg,
		alt: 'Talked Of',
		description:
			'A powerful YouTube video transcript search engine that allows users to search through video content by specific topics and phrases, with analytics and time-stamped results.',
		technologies: ['SvelteKit', 'PostgreSQL', 'Drizzle ORM', 'Chart.js', 'Puppeteer', 'Youtube-dl'],
		features: [
			'Video Transcript Search',
			'Full-text Search with PostgreSQL',
			'Analytics & Charting',
			'Time-stamped YouTube Links',
			'Channel-based Filtering',
			'Pagination & Results Management'
		],
		released: '2022-12-16T00:00:00.000Z'
	},
	{
		slug: 'sol',
		title: 'Sol',
		url: 'sol.bridgerb.com',
		image: solImg,
		alt: 'Sol',
		description:
			'A solar time tracking application that displays the current percentage of day/night cycle based on your geographical location using astronomical calculations.',
		technologies: ['SvelteKit', 'TypeScript', 'SunCalc', 'PostgreSQL', 'Drizzle ORM'],
		features: [
			'Solar Time Calculation',
			'Location-based Tracking',
			'Interactive Solar Dial',
			'Real-time Updates',
			'Help Mode with Time Slider',
			'Astronomical Precision'
		],
		released: '2024-04-14T00:00:00.000Z'
	},
	{
		slug: 'renewable-wardrobe',
		title: 'Renewable Wardrobe',
		url: 'renewablewardrobe.com',
		image: renewableImg,
		alt: 'Renewable Wardrobe',
		description:
			'A sustainable fashion marketplace promoting second-hand clothing shopping to reduce textile waste and environmental impact while making quality fashion accessible.',
		technologies: ['Svelte', 'CSS Grid', 'Responsive Design'],
		features: [
			'Marketplace Integration',
			'Sustainable Fashion Education',
			'Multi-Platform Shopping',
			'Environmental Impact Messaging'
		],
		released: '2023-01-09T00:00:00.000Z'
	},
	{
		slug: 'pyramids',
		title: 'Pyramids',
		url: 'pyramids.bridgerb.com',
		image: pyramidsImg,
		alt: 'Pyramids',
		description:
			"An intriguing analysis presenting the remarkable numerical coincidence that the Great Pyramid's latitude (29.9792458°N) matches the speed of light in vacuum (299,792,458 m/s) when multiplied by 10^7, exploring this fascinating mathematical correlation.",
		technologies: ['SvelteKit', 'Firebase', 'TypeScript', 'Mathematical Analysis'],
		features: [
			'Latitude Precision Analysis',
			'Speed of Light Correlation',
			'Mathematical Discovery Presentation',
			'Interactive Data Visualization',
			'Historical Architecture Analysis',
			'Scientific Data Comparison'
		],
		released: '2025-06-06T00:00:00.000Z'
	},
	{
		slug: 'btw',
		title: 'BTW',
		url: 'btw.bridgerb.com',
		image: btwImg,
		alt: 'BTW',
		description:
			'A minimalist notification service built with SvelteKit that allows users to send and receive push notifications via unique tokens, featuring Firebase integration and real-time updates.',
		technologies: ['SvelteKit', 'TypeScript', 'Firebase', 'Drizzle ORM', 'Push Notifications'],
		features: [
			'Token-based Notifications',
			'Firebase Analytics',
			'Real-time Push Notifications',
			'Simple API Integration',
			'Clean Minimal Interface',
			'Service Worker Support'
		],
		released: '2025-06-21T00:00:00.000Z'
	},
	{
		slug: 'viewfinder',
		title: 'Viewfinder',
		url: 'viewfinder-2024-04-21.web.app/360',
		image: viewfinderImg,
		alt: 'Viewfinder',
		description:
			'An advanced topographic visualization tool that generates horizon views, cross-sections, and 360-degree mountain peak visibility analysis using elevation data and geospatial processing.',
		technologies: [
			'SvelteKit',
			'GDAL',
			'JavaScript',
			'SurrealDB',
			'Google Maps API',
			'GeoTIFF Processing'
		],
		features: [
			'360-Degree Horizon Views',
			'Topographic Cross-Sections',
			'Peak Visibility Analysis',
			'Interactive Maps',
			'Elevation Data Processing',
			'Geographic Data Visualization',
			'Custom Database Integration'
		],
		released: '2024-04-21T00:00:00.000Z'
	},
	{
		slug: 'costco-hot-dog-tracker',
		title: 'Costco Hotdog Price Tracker',
		url: 'costcohotdogpricetracker.web.app',
		image: costcoImg,
		alt: 'Costco Hotdog Price Tracker',
		description:
			'A comprehensive data visualization tracking the consistent $1.50 price of Costco hot dogs throughout history, demonstrating remarkable price stability in an inflationary market.',
		technologies: ['Chart.js', 'Firebase Hosting', 'JavaScript'],
		features: [
			'Historical Price Tracking',
			'Interactive Chart Visualization',
			'Price Consistency Analysis',
			'Economic Stability Research',
			'Market Trend Documentation'
		],
		released: '2022-11-17T00:00:00.000Z'
	},
	{
		slug: 'todo-app',
		title: 'Todo App',
		url: 'todo-bridgerb-com.web.app',
		image: todoImg,
		alt: 'Todo App',
		description:
			'A clean and simple todo list application featuring task management and an intuitive interface for organizing daily tasks and productivity.',
		technologies: ['JavaScript', 'Firebase Hosting', 'CSS', 'HTML'],
		features: [
			'Task Creation & Management',
			'Delete Task Functionality',
			'Clean Minimalist Interface',
			'Real-time Task Updates',
			'Responsive Design'
		],
		released: '2025-06-06T00:00:00.000Z'
	}
];

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'James Palmer-Bullock',
    subtitle: 'Call for stories and memories',
    description: 'Astro.js and Tailwind CSS theme for stories and portfolio by justgoodui.com',
    image: {
        src: '/meta-image.jpg',
        alt: 'James Palmer-Bullock'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Stories',
            href: '/stories'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Submit your story',
            href: 'https://jpb.squarespace.com/submit'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/jamespalmerbullock'
        },
    ],
    hero: {
        title: 'Call for stories, memories and photos',
        text: `
  We are making a simple website where our stories and memories of how we experienced and loved James will be shared so that friends and family can remember James together. The stories and photos we gather could also be used publicly at James' funeral and wake and possibly in a photobook for James' family.
  
  If you would like to participate, please submit your story below.
  `,
        image: {
            src: '/james.svg',
            alt: 'James'
        },
        actions: [
            {
                text: 'Submit your story',
                href: 'https://jpb.squarespace.com/submit'
            },
            {
                text: 'Read stories',
                href: '/stories'
            }
        ]
    },
    postsPerPage: 8,
};

export default siteConfig;

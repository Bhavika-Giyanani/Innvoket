const config = {
  //Navbar

  navbar: {
    logo: "logo.avif",
  },

  //Text Slider

  textSlider: {
    message: ". INNVOKET WE BUILD FUTURE",
  },

  //Services

  services: {
    heading: "What we are offering",
    subheading: "Services",
    cards: [
      {
        id: 1,
        icon: "Globe",
        title: "Web Development",
        description:
          "Build responsive, visually stunning, and scalable websites to deliver an outstanding digital presence.",
        link: "/",
      },
      {
        id: 2,
        icon: "SquareMenu",
        title: "Custom Software Development",
        description:
          "Develop tailored software solutions that address specific business challenges and ensure maximum efficiency.",
        link: "/",
      },
      {
        id: 3,
        icon: "SquareMenu",
        title: "Mobile App Development",
        description:
          "Design intuitive, feature-rich mobile applications for iOS and Android platforms, enabling businesses to connect with customers on the go.",
        link: "/",
      },
      {
        id: 4,
        icon: "PanelTop",
        title: "E-commerce Platforms",
        description:
          "Create robust and user-friendly e-commerce platforms designed for seamless shopping experiences, enhancing customer satisfaction and business growth.",
        link: "/",
      },
    ],
  },

  //Special Services

  specialService: {
    heading: "Specialized Business and Enterprise Solutions",
    subheading: "Services",
    cards: [
      {
        id: 1,
        icon: "Globe",
        title: "Real Estate Solutions",
        description:
          "Streamline property management, lead tracking, and asset organization to close deals faster.",
        link: "/",
      },
      {
        id: 2,
        icon: "SquareMenu",
        title: "Manufacturing Solutions",
        description:
          "Optimize production, manage supply chains, and ensure quality control with customized ERP systems.",
        link: "/",
      },
      {
        id: 3,
        icon: "SquareMenu",
        title: "Retail & E-commerce Solutions",
        description:
          "Boost sales with automated inventory tracking, POS systems, and personalized customer engagement tools.",
        link: "/",
      },
      {
        id: 4,
        icon: "PanelTop",
        title: "Healthcare Solution",
        description:
          "Enhance patient care with appointment scheduling, inventory tracking for medical supplies, and automated staff management.",
        link: "/",
      },
    ],
  },

  //Brand Slider

  brandSlider: {
    heading: "Brand Collaborations",
    subheading: "Brands that trust us",
    images: [
      { src: "brand1.avif", alt: "Brand 1" },
      { src: "brand2.avif", alt: "Brand 2" },
      { src: "brand3.avif", alt: "Brand 3" },
      { src: "brand4.png", alt: "Brand 4" },
      { src: "brand5.avif", alt: "Brand 5" },
      { src: "brand6.avif", alt: "Brand 6" },
    ],
  },
  heroSection: {
    backgroundImage: "bg.avif",
    values: [
      {
        title: "Proven Track Record",
        description:
          "We have built a reputation as a trusted and reliable partner in achieving business success.",
        icon: "Rocket",
      },
      {
        title: "Tailored Solutions",
        description:
          "We offer personalized solutions tailored to your specific goals, audience, and industry.",
        icon: "Network",
      },
      {
        title: "Client-Centric Focus",
        description:
          "Your success is our priority. We prioritize understanding your business goals.",
        icon: "Target",
      },
    ],
    additionalValues: [
      "Continuous Innovation",
      "Dedicated Support",
      "Positive Client Experiences",
      "Commitment to Excellence",
    ],
  },

  //Case Studies

  caseStudies: [
    {
      img: "case1.avif",
      title: "Elite Sports Training Web & Mobile App Development",
      desc: "Empowered trainees with personalized exercise schedules and metrics tracking.",
    },
    {
      img: "case2.avif",
      title:
        "Comprehensive CRM & Inventory Management System with Feature-Rich Mobile App",
      desc: "Unified web and mobile platforms streamline workflows, reducing manual processes.",
    },
    {
      img: "case3.avif",
      title: "Antivirus Dealers Web & Mobile Portal Development",
      desc: "Real-time data tracking and intuitive tools empowered dealers to boost efficiency.",
    },
    {
      img: "case4.avif",
      title:
        "Chess in Chunks: A Unified Platform for Chess Academies, Students, and Coaches",
      desc: "Unified Web and Mobile platforms ensure learning and training are available anytime, anywhere.",
    },
  ],

  //Specialties

  specialties: {
    header: {
      title: "WHY US",
      description:
        "Innvoket transforms businesses with cutting-edge IT and automation solutions tailored to your industry. We deliver measurable results through seamless integrations, innovative technologies, and a focus on customer success.",
    },
    largeImageSection: {
      image: "section.avif",
      efficiencyBoostPercentage: "150%",
      efficiencyBoostTitle: "Workflow Efficiency Boost",
      efficiencyBoostDescription:
        "Our clients choose us for our ability to simplify complexities, enabling them to focus on growth and innovation.",
    },
    gridItems: [
      {
        image: "poster.avif",
      },
      {
        title: "ENHANCED PRODUCTIVITY",
        percentage: "80%",
        description:
          "Innvoket’s automation systems have drastically improved productivity by automating repetitive tasks, reducing errors, and enabling faster decision-making.",
      },
    ],
  },

  //Footer

  footer: {
    contactDetails: [
      {
        icon: "Mail",
        text: "info@innvoket.com",
        link: "mailto:info@innvoket.com",
      },
      {
        icon: "Phone",
        text: "+91 9825720827",
        link: "tel:+91 9825720827",
      },
      {
        icon: "MapPin",
        text: "806/6 Signet Hub , op road , vadodara  ",
        link: "https://www.google.com/maps?q=123+Main+Street+Anytown,+USA,+2141",
      },
    ],
    menuLinks: [
      { title: "Home", link: "/" },
      { title: "About", link: "/about" },
      { title: "Services", link: "/services" },
      { title: "Projects", link: "/projects" },
      { title: "Blog", link: "/blog" },
      { title: "Contact", link: "/contact" },
    ],
    serviceLinks: [
      { title: "SEO", link: "/services/seo" },
      { title: "Content Marketing", link: "/services/content-marketing" },
      { title: "Website Design", link: "/services/website-design" },
      {
        title: "Social Media Marketing",
        link: "/services/social-media-marketing",
      },
    ],
    otherPagesLinks: [
      { title: "License", link: "/license" },
      { title: "404", link: "/404" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com", icon: "Facebook" },
      { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" },
      {
        platform: "Linkedin",
        url: "https://www.linkedin.com/company/innvoket-tech-llp/?viewAsMember=true",
        icon: "Linkedin",
      },
      {
        platform: "Instagram",
        url: "https://instagram.com",
        icon: "Instagram",
      },
    ],
  },

  //Blogs Page

  articles: [
    {
      title:
        "Unlocking the Power of SEO Keyword Research: A Guide to Choosing the Right Tools",
      date: "Feb 7, 2024",
      category: "News",
      featured: true,
      image: "/blog1.avif",
    },
    {
      title:
        "Navigating the Marketplace for SEO: Finding the Right Solutions for Your Business",
      date: "Feb 7, 2024",
      category: "Article",
      featured: false,
      image: "/blog2.avif",
    },
    {
      title:
        "Empower Your SEO Strategy with Top SEO Tools: A Comprehensive Guide",
      date: "Feb 7, 2024",
      category: "News",
      featured: false,
      image: "/blog3.avif",
    },
    {
      title:
        "Unveiling the Power of Organic Search: Why It Matters and How to Leverage It",
      date: "Feb 7, 2024",
      category: "Tips",
      featured: true,
      image: "/blog4.avif",
    },
    {
      title: "Unlocking the Secret Sauce: A Guide to Ranking on Google",
      date: "Feb 7, 2024",
      category: "News",
      featured: false,
      image: "/blog5.avif",
    },
    {
      title: "The Ultimate Guide to Boosting Your Website's SEO Performance",
      date: "Mar 1, 2024",
      category: "Tips",
      featured: true,
      image: "/blog6.avif",
    },
  ],

  //Contact Page
  contact: {
    hotline: "9825720827",
    address: "4-VATIKA VILLA, LAAL BAUG, MANJALPUR, VADODARA, GUJARAT INDIA",
    email: "INFO@INNVOKETTECH.COM",
    openingHours: [
      { days: "MON TO FRI", hours: "9:00AM - 8:30PM" },
      { days: "SAT", hours: "10:00AM - 6:30PM" },
      { days: "SUN", hours: "CLOSED" },
    ],

    socialMedia: ["Twitter", "Facebook", "Instagram"],
  },

  //reviews page

  reviews: [
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
  ],

  //^ ABOUT PAGE
  about: {
    welcome: `<span className="text-white">Hey There! Welcome to</span>
                <br className="md:hidden" />
                <span className="text-[#F58327]"> Celestial Solutions!</span>`,
    aboutContent: `Let&apos;s get acquainted! We&apos;re not your average digital
                    marketing agency - we&apos;re a team of passionate individuals
                    who eat, sleep, and breathe
                    <span className="text-white">
                      creativity, innovation, and all things digital.
                    </span>
                    At <span className="text-white ">Celestial Solutions</span>,
                    we&apos;re on a mission to make your online
                    <span className="text-[#F58327]">dreams come true</span>, one
                    pixel at a time! We&apos;re a bunch of
                    <span className="text-white">
                      tech-savvy wizards, design enthusiasts, and social media
                      mavens
                    </span>
                    who believe that digital marketing should be fun, exciting,
                    and downright awesome.`,
    Accordion: [
      {
        number: "01",
        title: "Our History",
        content: `Founded in 2010 by digital marketing expert Emily Johnson, Celestial Solutions began as a small consultancy serving local businesses in the bustling city of New York. With a team of just three passionate individuals, the agency quickly gained traction, thanks to its innovative approach and dedication to client success.<br/><br/>
  
                By 2015, Celestial Solutions had expanded its reach, serving clients across the United States and boasting a team of 15 talented professionals. The agency's client portfolio had grown to include a diverse range of industries, from e-commerce startups to established brick-and-mortar businesses.<br/><br/>
  
                In 2020, Celestial Solutions celebrated its 10th anniversary with pride, having grown into a leading digital marketing agency with a global footprint. With offices in New York, London, and Sydney, the agency now serves clients around the world, supported by a team of over 50 experts specializing in SEO, social media marketing, content creation, website design, and more.<br/><br/>
  
                As we look ahead to the next decade, Celestial Solutions remains committed to its founding principles of innovation, integrity, and excellence, continuing to empower businesses to thrive in the ever-evolving digital landscape.<br/><br/>`,
      },
      {
        number: "02",
        title: "Our Mission",
        content: `At Celestial Solutions, our mission is to empower businesses to thrive in the digital age through innovative strategies, personalized solutions, and unwavering commitment to excellence. We strive to deliver tangible results and exceptional experiences.`,
      },
      {
        number: "03",
        title: "Our Vision",
        content: `Our vision is to shape a brighter digital future by fostering growth, confidence, and success for our clients and community. We aim to be at the forefront of digital innovation and creativity.`,
      },
    ],
    brandsSection: {
      brandMarqueeLogos: [
        "https://framerusercontent.com/images/UMc0FS6gAmdnCQcyNR18Rf9IZus.svg",
        "https://framerusercontent.com/images/YuN93JWcWdSzH0odGho5bcZyHOg.svg",
        "https://framerusercontent.com/images/UMc0FS6gAmdnCQcyNR18Rf9IZus.svg",
        "https://framerusercontent.com/images/YuN93JWcWdSzH0odGho5bcZyHOg.svg",
        "https://framerusercontent.com/images/UMc0FS6gAmdnCQcyNR18Rf9IZus.svg",
        "https://framerusercontent.com/images/YuN93JWcWdSzH0odGho5bcZyHOg.svg",
      ],
    },
    FounderSection: {
      firstPara: `James Andrews, <span className="text-white">the heart</span> of
        Celestial Solutions. With a decade of
        <span className="text-white"> digital marketing expertise,</span>
        James&apos;s passion for innovation and dedication to clients have
        guided our journey. His
        <span className="text-white">
          strategic vision, client-centered approach, and knack for creative
          solutions
        </span>
        shape our commitment to excellence.`,
      secondPara: `J. Andrews, the driving force behind Celestial Solutions. With over a decade of experience in digital marketing, James's passion for innovation and dedication to client success have been the cornerstone of our agency's growth. His strategic vision and hands-on approach have propelled us to the forefront of the industry, while his commitment to transparency and integrity sets the tone for our team. As a respected leader and mentor, James inspires us to exceed expectations and deliver exceptional results for our clients every day.`,
      founderImage:
        "https://framerusercontent.com/images/uq6zXIDNGe8FdLwyhVsZbOvu0.png?height=800&width=800",
      name: "James",
      surname: "Andrews",
      skills: [
        { name: "Visionary Thinker" },
        { name: "Empathetic Leader" },
        { name: "Creative Problem-Solver" },
        { name: "Passionate Mentor" },
      ],
      feturedInLogos: [
        {
          alt: "Logo 1",
          src: "https://framerusercontent.com/images/ai5aTS5GwmknA02FMovLXZcdo.svg?height=40&width=120",
        },
        {
          alt: "Logo 2",
          src: "https://framerusercontent.com/images/qgI0hIf34aPuuJedXqVNVWx1gI.svg?height=40&width=120",
        },
        {
          alt: "Logo 3",
          src: "https://framerusercontent.com/images/or0Wlg5UKFRZGfVPFnLR5bath6I.svg?height=40&width=120",
        },
        {
          alt: "Logo 4",
          src: "https://framerusercontent.com/images/HtNOvy5spiFjxciDATmaZhCH9U.svg?height=40&width=120",
        },
        {
          alt: "Logo 5",
          src: "https://framerusercontent.com/images/YuN93JWcWdSzH0odGho5bcZyHOg.svg?height=40&width=120",
        },
        {
          alt: "Logo 6",
          src: "https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg?height=40&width=120",
        },
      ],
    },

    stageProcess: {
      heading: "Our 4 Stage Process",
      stages: [
        {
          stageNo: "01",
          title: "Discovery Phase",
          description:
            "During this initial stage, we delve deep into understanding your business goals, target audience, and market landscape. We conduct thorough research and analysis to identify opportunities and challenges, laying the foundation for a successful campaign.",
        },
        {
          stageNo: "02",
          title: "Strategy Development",
          description:
            "With insights gathered from the discovery phase, we develop a customized strategy tailored to your specific needs and objectives. This comprehensive plan outlines the key tactics, channels, and timelines needed to achieve your business goals effectively.",
        },
        {
          stageNo: "03",
          title: "Implementation and Execution",
          description:
            "Once the strategy is finalized and approved, we roll up our sleeves and put the plan into action. Our expert team utilizes cutting-edge tools and techniques to execute each component of the strategy with precision and efficiency, whether it's optimizing your website for search engines, crafting engaging social media content, or designing captivating visuals.",
        },
        {
          stageNo: "04",
          title: "Monitoring and Optimization",
          description:
            "Continuous monitoring and optimization are essential to ensuring the success and effectiveness of our campaigns. We closely track key performance indicators (KPIs) and metrics, analyzing data to identify areas for improvement and making necessary adjustments to optimize results. This iterative process allows us to adapt to changes in the market and maximize the return on your investment.",
        },
      ],
    },

    teamMemberSection: {
      heading: "Say Hello to Our Squad",
      description:
        "Get ready to meet the faces behind the magic, the dreamers, the doers,and the unstoppable force driving our success.",
      teamMembers: [
        {
          orangeText: "Engaging",
          whiteText: "MARKETING GENIUS",
          name: "James Andrews",
          designation: "Founder, Marketing Expert",
          imageSrc:
            "https://framerusercontent.com/images/4BB1DVZjtnktfRPZgwlARtPpsKM.png?height=400&width=300",
        },
        {
          orangeText: "Strategic",
          whiteText: "SEO MASTERMIND",
          name: "Magnus Hawthorne",
          designation: "SEO Specialist",
          imageSrc:
            "https://framerusercontent.com/images/AY3VbmOJEHFs1b3L8MmhUKTUVik.png?height=400&width=300",
        },
        {
          orangeText: "Visionary",
          whiteText: "DESIGNER & DEVELOPER",
          name: "Daxton Sinclair",
          designation: "Senior Developer",
          imageSrc:
            "https://framerusercontent.com/images/oc9YUUTSNV6PtWlMnM2zWxdplM.png?height=400&width=300",
        },
      ],
    },
    imageGallery: {
      leftImages: [
        "https://framerusercontent.com/images/e9ETzKwq61CblXNIwtacHxTO1M.jpg?scale-down-to=1024",
        "https://framerusercontent.com/images/y9hfOMzgE8lW3evQ50EwkL1BV3U.jpg?scale-down-to=1024",
        "https://framerusercontent.com/images/5RPam9TX4aXfoOlOaIZbdC5o7uE.jpg?scale-down-to=1024",
      ],
      rightImages: [
        "https://framerusercontent.com/images/BshQ4SFoewW5NfSG9GxguSefqc.jpg?scale-down-to=1024",
        "https://framerusercontent.com/images/BVfoTqOvtXJsTg1mzrq3227Q.jpg?scale-down-to=1024",
        "https://framerusercontent.com/images/mDQtm4RJ6h8Xt7FBnBl3AEb3LV0.jpg?scale-down-to=1024",
      ],
    },
    faqSection: {
      heading: `<span>Got Questions?</span>
            <br />
            <span>We&apos;ve Got Answers!</span>`,
      faqData: [
        {
          question: "What is SEO and why is it important?",
          answer:
            "SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It's important because it helps businesses attract organic traffic, increase their online visibility, and ultimately drive more leads and conversions.",
        },
        {
          question: "How long does it take to see results from SEO?",
          answer:
            "SEO is a long-term strategy, and the timeline for seeing results can vary depending on factors such as the competitiveness of the industry, the current state of the website, and the effectiveness of the SEO efforts. Generally, noticeable improvements can be seen within a few months, but significant results may take six months to a year or more.",
        },
        {
          question: "What are the key factors that influence SEO rankings?",
          answer:
            "Several key factors influence SEO rankings, including the relevance and quality of content, website structure and navigation, backlink profile, user experience (UX), site speed, mobile-friendliness, and technical optimizations.",
        },
        {
          question: "Do I need to hire an SEO agency, or can I do SEO myself?",
          answer:
            "While some basic SEO tasks can be done by individuals with a good understanding of SEO principles, achieving significant results often requires expertise, experience, and access to specialized tools and resources. Hiring an experienced SEO agency can help ensure that your SEO efforts are strategic, effective, and aligned with your business goals.",
        },
        {
          question: "How much does SEO cost?",
          answer:
            "The cost of SEO services can vary depending on factors such as the scope of work, the competitiveness of the industry, and the experience level of the SEO agency. Some agencies offer fixed-price packages, while others may charge on a monthly retainer basis. It's important to discuss pricing and expectations with potential SEO providers to find a solution that fits your budget and needs.",
        },
        {
          question: "Can I rank #1 on Google for any keyword?",
          answer:
            "Ranking #1 on Google for highly competitive keywords can be challenging and may require significant time, resources, and ongoing optimization efforts. However, focusing on long-tail keywords (more specific, less competitive phrases) and niche topics can still yield valuable organic traffic and visibility improvements.",
        },
        {
          question:
            "Is SEO a one-time effort, or does it require ongoing maintenance?",
          answer:
            "SEO is an ongoing process that requires continuous monitoring, optimization, and adaptation to changes in search engine algorithms, industry trends, and competitor strategies. Regular updates to content, technical improvements, and link-building efforts are essential for maintaining and improving SEO rankings over time.",
        },
      ],
    },
  },

  servicesPage: {
    heading: `<h2>Discover</h2>
               <h2>Our Services</h2>`,
    service_cards: [
      {
        title: "Web Development",
        description:
          "Build responsive, visually stunning, and scalable websites to deliver an outstanding digital presence.",
        icon: "SeoSvg",
        learn_more_link: "#",
      },
      {
        title: "Custom Software Development",
        description:
          "Develop tailored software solutions that address specific business challenges and ensure maximum efficiency.",
        icon: "ContentSvg",
        learn_more_link: "#",
      },
      {
        title: "Mobile App Development",
        description:
          "Design intuitive, feature-rich mobile applications for iOS and Android platforms, enabling businesses to connect with customers on the go.",
        icon: "WebsiteDesignSvg",
        learn_more_link: "#",
      },
      {
        title: "E-commerce Platforms",
        description:
          "Create robust and user-friendly e-commerce platforms designed for seamless shopping experiences, enhancing customer satisfaction and business growth.",
        icon: "SocialMediaSvg",
        learn_more_link: "#",
      },
    ],
    feature_cards: [
      {
        title: "Proven Track Record",
        description:
          "We have built a reputation as a trusted and reliable partner in achieving business success.",
        icon: "RocketSVG",
      },
      {
        title: "Tailored Solutions",
        description:
          "We offer personalized solutions tailored to your specific goals, audience, and industry.",
        icon: "NetworkSVG",
      },
      {
        title: "Client-Centric Focus",
        description:
          "Your success is our priority. We prioritize understanding your business goals.",
        icon: "ClientSVG",
      },
      {
        title: "Transparent Communication",
        description:
          "We believe in open and honest communication every step of the way.",
        icon: "CommunicationSVG",
      },
      {
        title: "Dedicated Support",
        description:
          "Your success is our priority, and we're here to support you every step of the way.",
        icon: "SupportSVG",
      },
      {
        title: "Expertise Across Industries",
        description:
          "Our team has extensive experience working across various industries.",
        icon: "SupportSVG",
      },
    ],
  },

  //^ PROJECTS PAGE
  projects: {
    heading: "Check Our Works With Real Results",
    case_studies: [
      {
        image:
          "https://framerusercontent.com/images/ubqFJP9oL8a6nPLXz4l9WPp2I.png",
        title: "Elite Sports Training Web & Mobile App Development",
        description:
          "Empowered trainees with personalized exercise schedules and metrics tracking.",
      },
      {
        image:
          "https://framerusercontent.com/images/s8t8FHEFLWZjLi3QAVRAhC1wnEo.png",
        title: "Antivirus Dealers Web & Mobile Portal Development",
        description:
          "Real-time data tracking and intuitive tools empowered dealers to boost efficiency.",
      },
      {
        image:
          "https://framerusercontent.com/images/ItK8dymX8GvITGk4W4bLNzTp8.png",
        title:
          "Comprehensive CRM & Inventory Management System with Feature-Rich Mobile App",
        description:
          "Unified web and mobile platforms streamline workflows, reducing manual processes.",
      },
      {
        image:
          "https://framerusercontent.com/images/kwLu1oAWhAObHZXU4wBitDsSmIQ.png",
        title:
          "Chess in Chunks: A Unified Platform for Chess Academies, Students, and Coaches",
        description:
          "Unified Web and Mobile platforms ensure learning and training are available anytime, anywhere.",
      },
    ],
  },
};

export default config;

import type { Project, SeederDataItem } from "./@types";
export default (
    [
        {
            id: "ETHREAL",
            title: "Ethereal",
            type: "COLLEGE",
            hasSubpage: false,
            folder: "ethreal",
            releventTechnologies: ["figma", "UI/UX", "javascript", "work organization"],
            technologies: [],
            shortDescription:
                "The project created during my undergraduate course at *AGH UST*. The task was to create any kind of webpage, so we decided to create one for a fictional luxury theatre. My main responsibilities were to create the entire visual layout of the project using *Figma* and organize the project's structure and workflow by setting up our all objectives in github issues. ",
            start: new Date(2023, 11, 1),
            end: new Date(2024, 0, 12),
            liveDemoURL: "https://theatre-project.vercel.app",
        },
        {
            id: "MHACK",
            title: "MObywatel 2.0 mHack",
            type: "HACKATHON",
            hasSubpage: false,
            folder: "MHACK",
            releventTechnologies: ["typescript", "sass", "react", "prisma", "figma", "next"],
            technologies: [],
            shortDescription:
                "Organized by the Polish government. The task was identical for all contestans- come up with an *idea, blueprint, and an example implementation* of new, ground-breaking feature for mObywatel mobile app. We created feature called *mMapa*, which was an accessible, and easy-to-use for everyone map, highlighting all public institutions along with a bunch of guidance for ordinary citizens.",
            start: new Date(2023, 9, 21),
            end: new Date(2023, 9, 22),
        },
        {
            id: "HACKNAROK_7",
            title: "Hacknarök VII",
            type: "HACKATHON",
            hasSubpage: false,
            folder: "HACKNAROK_VII",
            releventTechnologies: ["typescript", "sass", "react", "prisma", "figma", "next"],
            technologies: [],
            shortDescription:
                "Organized by the EESTEC AGH Science Club. The assignment was to create a *mobile app blueprint*, which tackles the topic of *gamification*. With my team we created a *Try me* app that allows users to challange their friends with various daily challanges. Our strong inspiration for this project was the *BeReal* app. ",
            start: new Date(2023, 3, 1),
            end: new Date(2023, 3, 2),
        },
        {
            id: "HACKYEAH_2022",
            title: "HackYeah 2022",
            type: "HACKATHON",
            hasSubpage: false,
            folder: "HackYeah2022",
            releventTechnologies: ["typescript", "sass", "react", "prisma", "figma"],
            technologies: [],
            shortDescription:
                'HackYeah is the biggest stationary hackathon in Europe, organized by the Polish government. I participated in the 2022 edition, where I was a part of the *"Less Waste"* track.". My team and I created a *web app that allows users to share their leftover food with others*, thereby reducing food waste.',
            start: new Date(2022, 10, 20),
            end: new Date(2022, 10, 21),
        },
        {
            id: "PORTFOLIO",
            title: "Portfolio",
            type: "PERSONAL",
            folder: "portfolio",
            start: new Date(2022, 6),
            end: new Date(2023, 9),
            githubURL: "https://github.com/Kacper-Ksiazek/portfolio",
            shortDescription: `After more than *2 years of daily coding*, I decided to compile a showcase of the most relevant projects I've created during this period. I deeply immersed myself in coding, acquiring substantial knowledge. Through this project, I aim to demonstrate my acquired competences and showcase some of my skills`,
            description: {
                introduction: `I made several attempts to create this project. The initial idea for it emerged in the *first half of 2021*. Unfortunately, at that time, I lacked the knowledge in the field of UX and UI, and thereby I couldn't come up with a visually appealing design. Subsequently, I had a flurry of different responsibilities that took precedence, causing coding to take a back seat for a while. However, during my journey to save money for university in Norway after graduating from high school *in 2022*, I gathered enough energy to create the entire visual layout of the project using Figma, and then efficiently transformed it into a Next.js app.`,
                purpose: `The clear purpose of this app was to *showcase my coding skills*, provide an introduction that highlights my previous experiences and current sources of motivation, and outline my plans for the near future. I also dedicated specific sections to list a few of my favorite leisure activities and schools I attended.`,
                conclusion: `My portfolio has far exceeded my most ambitious and optimistic expectations, and I'm immensely proud of its final outcome. This project serves as a detailed account of my evolution as a software craftsman, showcasing the decisions I've made, the problems I've solved, and the sacrifices I've made during this period. Looking back at this journey is incredibly heartwarming and fills me with hope for my future in this field, which has become my primary area of expertise and interest.`,
            },
            releventTechnologies: ["typescript", "material", "next", "prisma", "figma", "postgresql", "storybook"],
            technologies: ["Figma", "Typescript", "React", "NextJS", "Material UI", "PostgreSQL", "Prisma", "SASS", "Storybook"],
            features: [],
        },
        {
            id: "ABU_DHABI",
            title: "Abu Dhabi- Travel Agency",
            type: "PERSONAL",
            folder: "abu_dhabi",
            start: new Date(2021, 10),
            end: new Date(2022, 5),
            githubURL: "https://github.com/Kacper-Ksiazek/nextjs-travel-agency-2022",
            liveDemoURL: "https://nextjs-travel-agency-2022.vercel.app",
            shortDescription: `Undoubtedly, the *largest and most complex project* I've undertaken thus far. It's an application featuring an array of functionalities, including a user account system, JWT authentication, robust CRUD operations, review creation, user profiles with review summaries, and much more. Additionally, the project involves managing a significant amount of relational data, utilizing PostgreSQL and Prisma as the ORM.`,
            description: {
                introduction: `I began this project near the start of my *last high school class* with the initial goal of learning React, Next.js, and a serverless approach. Due to the numerous responsibilities associated with *impending final exams*, this project took significantly more time than expected. Nonetheless, I'm rather proud of its final state, but I still see room for further improvements. The project's visual design has been entirely revamped, including everything from the color palette and fonts to content placement, and I even changed the tech stack twice. I always strive to do my best and put a significant amount of effort into ensuring the quality meets my standards.`,
                purpose: `The primary concept of this application is to enable users to *add various travel destinations* and then highlight places worth visiting, such as restaurants, museums, art galleries, and more. Additionally, the application features a highly effective review system for both destinations and landmarks, allowing users to *share their experiences* with the site's content. Each review includes a score from 0-10, a description, and relevant aspects of the subject being reviewed. Other users can then *rate your review* by giving it a thumbs-up or thumbs-down.`,
                conclusion: `I take great pride in my ability to sustain my motivation and work on this project for over 6 months. It's evident that this journey has taught me a lot. After facing various challenges with Next.js (and React as well), I am now more aware of their intricacies and more efficient at problem-solving in this field than ever before.`,
            },
            releventTechnologies: ["react", "next", "prisma", "typescript", "jest", "sass", "redux", "material"],
            technologies: ["React", "Redux", "Material UI", "Typescript", "NextJS", "Cypress", "PostgreSQL", "Prisma", "SASS"],
            features: [
                {
                    title: "Single content element- landing",
                    imageURL: "4_single_content_element_landing",
                },
                { title: "User profile- landmark reviews", imageURL: "10_landmarks_reviews_on_user_profile" },
                {
                    title: "Your review is always on the top",
                    imageURL: "11_auth_user_review_is_always_on_the_top",
                },
                { title: "Pinning reviews", imageURL: "12_review_can_be_pinned" },
                { title: "Review modification", imageURL: "12_review_modification" },
                { title: "Create content- new landmark details", imageURL: "13_create_a_new_landmark" },
                {
                    title: "Create content- description",
                    imageURL: "14_rich_and_highly_customizable_description",
                },
                { title: "Create content- notification", imageURL: "15_notification_after_creating" },
                { title: "Image modals gallery", imageURL: "17_images_modal_galleries" },
                { title: "No searching results", imageURL: "18_no_expected_content" },
                { title: "Mmany landmarks", imageURL: "1_many_landmarks" },
                { title: "Many destinations", imageURL: "2_many_destinations" },
                { title: "Login", imageURL: "3_login" },
                { title: "Single content element- description", imageURL: "5_single_content_element_description" },
                {
                    title: "Single content element- recommendiations",
                    imageURL: "6_single_content_element_recommended landmakrs",
                },
                {
                    title: "Single content element- newest reviews",
                    imageURL: "7_single_content_element_newest_reviews",
                },
                { title: "Single content element- newest reviews", imageURL: "8_single_content_element_reviews_page" },
                { title: "User profile", imageURL: "9_user_profile" },
            ],
        },
        {
            id: "ELECTRON_WORDS_LEARNING_APP",
            title: "Electron words learning app",
            type: "PERSONAL",
            start: new Date(2021, 5),
            end: new Date(2021, 8),
            githubURL: "https://github.com/Kacper-Ksiazek/electron-words-learning-app-2021",
            description: {
                introduction: `The initial version of this application was constructed entirely from scratch using *pure Python*, essentially in the terminal, and the minimum viable product (MVP) was ready to use in just a few days. However, soon after, I recognized that, in the long term, this app wouldn't suffice. Consequently, I made the decision to completely rebuild it, opting for more user-friendly technologies.`,
                purpose: `The primary motivation behind creating this application was my strong *desire to enhance my English vocabulary*. At that time, I was facing significant difficulties with it. Additionally, I saw the chosen tech stack as an excellent opportunity to learn more about the Vue 3 Composition API, as well as Vuex.`,
                conclusion: `I am immensely proud of the final result to the extent that I've been using this app for over *2 years* and have observed a significant improvement in my English. The primary purpose of the application was fulfilled, so I can't complain about some of the obvious downsides resulting from my lack of experience in UX and UI at that time.`,
            },
            folder: "electron_words_learning_app",
            releventTechnologies: ["electron", "vue", "typescript", "sass"],
            technologies: ["Vue 3", "Composition API", "Typescript", "Electron", "SASS"],
            shortDescription: `A seemingly straightforward application created to assist me with my English vocabulary. I have been using it regularly for over 2 year, and I'm content with the results.`,
            features: [
                { title: "App running in window", imageURL: "0_App running in window" },
                { title: "Dataset selection", imageURL: "1_Dataset selection" },
                { title: "Dataset modification- preview mode", imageURL: "2_Dataset modification preview mode" },
                { title: "Dataset modification- edit mode", imageURL: "3_Dataset modification edition mode" },
                { title: "Image preview", imageURL: "4_Image preview" },
                { title: "Adding new word image", imageURL: "5_Adding new word- image" },
                { title: "Adding new word- irregular verb", imageURL: "6_Adding new word- irregular verb" },
                { title: "Adding new word- simple pair", imageURL: "7_Adding new word- simple pair" },
                { title: "Dataset has been edited communique", imageURL: "8_Dataset has been edited communique" },
                { title: "There are unsaved changes communique", imageURL: "9_There are unsaved changes communique" },
                { title: "Dataset statistics- answers accuration", imageURL: "10_Dataset statistics- answers accuration" },
                { title: "Dataset statistics- games duration", imageURL: "11_Dataset statistics- games duration" },
                { title: "Games history", imageURL: "11_Games history" },
                { title: "Select two datasets to compare", imageURL: "12_Select two datasets to compare" },
                { title: "Two dataset_comparision- games duration", imageURL: "13_Two dataset_comparision- games duration" },
                {
                    title: "Two dataset_comparision- games duration",
                    imageURL: "14_Two dataset_comparison- answers accuration",
                },
                { title: "15_Gameplay", imageURL: "15_Gameplay" },
                { title: "16_Successfull answer", imageURL: "16_Successfull answer" },
                { title: "17_After 3 wrong answers", imageURL: "17_After 3 wrong answers" },
                { title: "18_Single game summary", imageURL: "18_Single game summary" },
                { title: "19_Single game summary- only wrong answers", imageURL: "19_Single game summary- only wrong answers" },
                {
                    title: "20_Single game summary- only correct answers",
                    imageURL: "20_Single game summary- only correct answers",
                },
            ],
        },
        {
            id: "OLX_2",
            title: "Olx clone",
            type: "PERSONAL",
            start: new Date(2021, 2),
            end: new Date(2021, 3),
            shortDescription: `My *TypeScript learning sandbox*. The app focuses on adding sale offers for various items, along with a rich user profile that summarizes all previous user activity.`,
            folder: "olx_clone",
            githubURL: "https://github.com/Kacper-Ksiazek/fullstack-web-store-2021/tree/main",
            description: {
                introduction: `I initiated this project during my *one-month school apprenticeship in March 2021*. I promptly conceived the idea of creating something similar to the very popular in Poland online marketplace called OLX. I opted to use TypeScript because I hadn't worked with it before, and I've always believed that building something substantial is the best way to learn new technologies and techniques.`,
                purpose: `The aim of this application was straightforward: to establish a platform where people can create an account and promptly post new offers. Other users, including anonymous ones, can view these offers and respond to them if they find them suitable for their needs.`,
                conclusion: `I thoroughly enjoyed developing this app, and *I learned TypeScript* in its developing process, which I then began using extensively in various projects. I reckon I spent that month in a productive and enjoyable manner.`,
            },
            releventTechnologies: ["vue", "express", "typescript", "sass", "sequelize", "jest"],
            technologies: ["Vue 3", "Vuex", "Typescript", "Express", "Sass", "Jest", "NodeJS", "PostgreSQL", "Sequelize"],
            features: [
                { title: "Landing page", imageURL: "1_landing_page" },
                { title: "Landing page- select a category", imageURL: "2_select_a_category" },
                { title: "User profile", imageURL: "7_user_profile" },
                { title: "Single item", imageURL: "4_single_item" },
                { title: "Single item- picture zoomed", imageURL: "5_single_item_zoom" },
                { title: "Single item- recommendiations", imageURL: "6_recommendations_to_single_item" },
                { title: "Adding a new offer", imageURL: "10_users_can_add_new_offers" },
                { title: "Login", imageURL: "3_login" },
                { title: "Informing about issues", imageURL: "11_validation_after_something_went_wrong" },
                { title: "Newly created offer", imageURL: "12_newly_created_offer" },
                { title: "Followed offers", imageURL: "8_followed_offers" },
                { title: "Offers managing- by admin", imageURL: "9_admin_can_manage_other_users_offers" },
            ],
        },
        {
            id: "TRENUJ_PROSTO",
            title: "Trenuj Prosto",
            type: "COMMERCIAL",
            start: new Date(2021, 0),
            end: new Date(2021, 1),
            shortDescription: `My second commercial project, built for my high school PE teacher during remote education due to *COVID 2019* pandemic in January and February 2021.`,
            folder: "trenuj_prosto",
            githubURL: "https://github.com/Kacper-Ksiazek/trenuj_prosto-2021",
            liveDemoURL: "http://trenujprosto.pl/",
            description: {
                introduction: `I had been asked spontaneously about making this app in school during break between classes *before COVID remote education even started*. I accepted the offer almost immediately, because I had a lot of free time at that time, thus I found making something like that a good opportunity to test my actual skills.`,
                purpose: `It was originally intended to be a simple website providing information about their services, experience, current offers, and blog posts. However, we eventually decided to create *two distinct CRUD systems* for both offers and blog posts, along with a *hidden admin panel* that required authentication to facilitate management. After the initial release of the project, I continued to work on it for a bit longer because the owners had a few more ideas. Subsequently, after spending roughly one more week, additional features were added, such as the ability to change passwords and modify terms (including adding new terms, removing certain terms, or marking an offer as sold out) for each available offer.`,
                conclusion: `The customers appreciated the work so much and they have been *using this app for almost 3 years so far* and up to date I have not received any kind of feedback about some issues occurring neither about something to change.`,
            },
            releventTechnologies: ["vue", "express", "javascript", "sequelize", "sass", "vue-bootstrap"],
            technologies: ["Vue 2", "Vuex", "Javascript", "NodeJS", "Express", "SASS", "Jest", "PostgreSQL", "Sequelize"],
            features: [
                { title: "Landing page", imageURL: "1_landing_page" },
                { title: "Landing page", imageURL: "2_landing_page2" },
                { title: "Landing page", imageURL: "3_landing_page3" },
                { title: "Landing page", imageURL: "4_landing_page4" },
                { title: "Landing page", imageURL: "5_landing_page5" },
                { title: "Many offers", imageURL: "6_many_offers" },
                { title: "Sold out offer", imageURL: "7_offer_can_be_sold_out" },
                { title: "Single offer", imageURL: "8_single_offer" },
                { title: "Single offer- attractions", imageURL: "9_single_offer_attractions" },
                { title: "Single offer- photos gallery", imageURL: "10_photo_gallery" },
                { title: "Blog post", imageURL: "11_blog" },
                { title: "Blog post", imageURL: "11_blog_post_1" },
                { title: "Blog post", imageURL: "12_blog_post_2" },
                { title: "Blog post", imageURL: "13_blog_post_3" },
                { title: "Blog post", imageURL: "14_blog_post_4" },
                { title: "Modifying the single offer's terms", imageURL: "15_offers_terms_could_be_modified" },
                { title: "Admin's access to the content management", imageURL: "16_admin_have_nice_access_to_crud" },
                { title: "Add new offer", imageURL: "17_add_nev_offer" },
                { title: "Add new blog post", imageURL: "18_add_new_blog_posty" },
                { title: "Easy file download", imageURL: "19_easy_files_to_download" },
            ],
        },
        {
            id: "GAMES_APP",
            title: "Games app",
            type: "PERSONAL",
            start: new Date(2020, 10),
            end: new Date(2020, 11),
            folder: "games_app",
            githubURL: "https://github.com/Kacper-Ksiazek/game-app-FRONT",
            shortDescription: `It was quite a spontaneous and haphazard project; I hadn't prepared any plan for it. However, the primary goal was to *learn the basics of Node.js* as well as some *fundamental database concepts*.`,
            description: {
                introduction: `I managed to build this app in just a few days. The idea of using games as the primary theme for the app was inspired by the upcoming release of Cyberpunk 2077, which I was very excited about at the time. Despite the app's appearance not meeting my standards, I paid a lot of attention to making it look as good as possible. As a result, the website is *fully responsive*.`,
                purpose: `The primary purpose of this application is quite evident, with its focus on games. However, another notable feature of this app is the *review system*, which includes *likes and dislikes*. The app also includes *pagination*. In hindsight, I believe that implementing websockets would have been a valuable addition to enhance the user experience.`,
                conclusion: `After completing this app, I felt more confident than ever in concepts like *seeders*, *migrations*, and, most importantly, the significance of ORM's. I also gained insights into some limitations and efficient approaches to writing Vue.js, as well as combining it with styles.`,
            },
            releventTechnologies: ["vue", "javascript", "mysql", "sass", "node", "postgresql"],
            technologies: ["Vue 2", "SASS", "NodeJS", "Sequelize"],
            features: [
                { title: "Landing page", imageURL: "1_landing_page" },
                { title: "Single game- landing", imageURL: "2_single_game" },
                { title: "Single game- description", imageURL: "3_single_game2" },
                { title: "Single game- reviews", imageURL: "4_single_game_reviews" },
                { title: "Register", imageURL: "5_register" },
                { title: "Login", imageURL: "6_login" },
                { title: "Images preview", imageURL: "7_images_preview" },
                { title: "Searching bar", imageURL: "8_searching" },
            ],
        },
        {
            id: "DAC_SZANSE",
            title: "Dac szanse",
            type: "COMMERCIAL",
            folder: "dac_szanse",
            start: new Date(2020, 3),
            end: new Date(2020, 7),
            githubURL: "https://github.com/Kacper-Ksiazek/dac_szanse",
            shortDescription: `My very *first commercial project ever*. I worked with a pre-made application design from another company, and my responsibilities included, among other tasks, developing a custom CRUD system for managing their blog posts and current offers.`,
            description: {
                introduction: `*Important Note:* The current website was not created by me; my version replaced it after two years of use. The project was intended to be an application *for a charity organization in my hometown*, whose founder was the aunt of my best friend at the time. That's how we began working together. I was asked to create a landing page and several other subpages based on the design concept provided by their graphic team.`,
                purpose: `The purpose of the app was to provide a website where potential customers could find information about the charity, its services, and its founders.`,
                conclusion: `The project itself was a valuable lesson for me in dealing with other people and building trust. Looking back, I consider this project to have been quite challenging and somewhat disappointing. However, it was my first significant commercial project, and I am thankful for the opportunity to test myself in a real job context. Despite the difficulties, I'm ultimately satisfied with the outcome.`,
            },
            releventTechnologies: ["php", "laravel", "vue", "javascript", "mysql", "sass"],
            technologies: ["PHP", "Laravel", "Vue 2", "MySQL", "SASS", "Javascript"],
            features: [],
        },
    ] as Project[]
).map((el: Project): SeederDataItem<Project> => {
    return {
        ...el,
        _imagesDir: `/projects/${el.folder}`,
    };
});

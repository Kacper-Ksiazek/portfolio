import type { Project } from "@/@types/prisma/Project";

export default [
    {
        id: "ABU_DHABI",
        title: "Abu Dhabi- travel agency",
        shortDescription: `The best project so far. Application with features such as user accounts system, rich CRUD’s, and making reviews. On the top of that, a lot of relational data split into 8 tables and 6 custom enums. `,
        folder: "abu_dhabi_images",
        description: {
            introduction: `I started this project virtually at the beginning of the last high school class with the initial idea of learning react, next js and serverless approach. Due to the abundance of responsibilities related with looming finals exams, this project took decisively too much time. Although, at the end of the day I’m rather proud of the its eventual state, but at the same time I do still notice a room for further improvements. The project’s visual site has been completely altered and invented from scratch with new everything- starting with color palette and fonts through content placement and eventually even the tech stack was change. Ah, and I have done it even twice. I’m always trying to things the best I can so I always put great deal of effort into ensuring the quality is satisfying.`,
            purpose: `The main idea of this application is to allow users to add different travel destinations and subsequently to mark places worth to visit (landmarks) such as restaurant / museums / art galleries and many more. Furthermore, there is also exquisitely working system of reviewing both destinations and landmarks so users of the application can share each other experiences related with the content of the site. Each reviews contains score 0-10, description and relevant aspects of the reviewing subject. Other users can than rate your review by either giving you a thumb up or down.`,
            conclusion: `I am very proud that I did manage to sustain my willingness to continue working of that project for over 6 months. I am also sure that this journey had taught me a lot and in the future I will be more aware of some evitable and now obvious mistakes. `,
        },
        technologies: ["React", "Redux", "Material UI", "Typescript", "NextJS", "Cypress", "PostgreSQL", "Prisma", "SASS"],
        features: [
            {
                title: "Single content element- landing",
                imageURL: "4_single_content_element_landing",
            },
            { title: "User profile- landmark reviews", imageURL: "10_landmarks_reviews_on_user_profile.jpg" },
            {
                title: "Your reviews is always on the top",
                imageURL: "11_auth_user_review_is_always_on_the_top.jpg",
            },
            { title: "Pinning reviews", imageURL: "12_review_can_be_pinned.jpg" },
            { title: "Review modification", imageURL: "12_review_modification.jpg" },
            { title: "Create content- new landmark details", imageURL: "13_create_a_new_landmark.jpg" },
            {
                title: "Create content- description",
                imageURL: "14_rich_and_highly_customizable_description.jpg",
            },
            { title: "Create content- notification", imageURL: "15_notification_after_creating.jpg" },
            { title: "Image modals gallery", imageURL: "17_images_modal_galleries.jpg" },
            { title: "No searching results", imageURL: "18_no_expected_content.jpg" },
            { title: "Mmany landmarks", imageURL: "1_many_landmarks.jpg" },
            { title: "Many destinations", imageURL: "2_many_destinations.jpg" },
            { title: "Login", imageURL: "3_login.jpg" },
            { title: "Single content element- description", imageURL: "5_single_content_element_description.jpg" },
            {
                title: "Single content element- recommendiations",
                imageURL: "6_single_content_element_recommended landmakrs.jpg",
            },
            {
                title: "Single content element- newest reviews",
                imageURL: "7_single_content_element_newest_reviews.jpg",
            },
            { title: "Single content element- newest reviews", imageURL: "8_single_content_element_reviews_page.jpg" },
            { title: "User profile", imageURL: "9_user_profile.jpg" },
        ],
    },
    {
        id: "OLX_2",
        title: "Olx clone",
        shortDescription: `My typescript learning playground. App about adding sell offers of various items.  Other relevant feature is rich user profile, which summarizes all previous user activity.`,
        folder: "olx_clone",
        description: {
            introduction: `I started this project amid my school one month long apprenticeship in March 2021. I immediately came up with an idea of making something akin to very popular platform OLX. I chose to use typescript, because I had not write anything using it so far and I deem that writing something bigger is always the best way to learn new technologies and techniques.`,
            purpose: `The goal of this application was simply, create a place where people can create an account and straight up are able to add new offers, then other users or even anonyms can see this offer and respond to it if they found it good for their use. `,
            conclusion: `I had a lot of fun while writing this app and eventually managed to learn typescript, which then I started to use literally everywhere so I think I spend that month wisely and in good way.`,
        },
        technologies: ["Vue 3", "Vuex", "Typescript", "Express", "Sass", "Jest", "NodeJS", "PostgreSQL"],
        features: [
            { title: "", imageURL: "10_users_can_add_new_offers" },
            { title: "", imageURL: "11_validation_after_something_went_wrong" },
            { title: "", imageURL: "12_newly_created_offer" },
            { title: "", imageURL: "1_landing_page" },
            { title: "", imageURL: "2_select_a_category" },
            { title: "", imageURL: "3_login" },
            { title: "", imageURL: "4_single_item" },
            { title: "", imageURL: "5_single_item_zoom" },
            { title: "", imageURL: "6_recommendations_to_single_item" },
            { title: "", imageURL: "7_user_profile" },
            { title: "", imageURL: "8_followed_offers" },
            { title: "", imageURL: "9_admin_can_manage_other_users_offers" },
        ],
    },
] as Project[];

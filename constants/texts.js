import { MicIcon, PrayIcon, TestimonyIcon } from "./icons"

const WELCOME = {
    heading: "RECOVERY HAPPENS EVERY TIME WITH GOD",
    paragraph: "You are the salt of the earth and you are the light of the world, so let your light shine before people",
}

const MEDITATION = {
    heading: "Meditation",
    subheading: "Jesus est le Pain de vie (Jean6:35)",
    links: [
        {
            link: "messages",
            Icon: MicIcon,
            label: "Messages"
        },
        {
            link: "prayers",
            Icon: PrayIcon,
            label: "Sujets de prière"
        },
        {
            link: "testimonies",
            Icon: TestimonyIcon,
            label: "Témoignages"
        },
    ]
}

const CONTRIBUTION = [{
    heading: "The Power of Donations: A Catalyst for Change",
    body: "In a world grappling with a multitude of challenges, from poverty and hunger to disease and environmental degradation, the act of donation stands as a beacon of hope, a testament to humanity's inherent capacity for compassion and generosity. Donations, in their myriad forms, empower individuals and organizations to make a tangible difference in the lives of others, fostering positive change and propelling communities towards a brighter future."
}]


export {
    WELCOME,
    MEDITATION,
    CONTRIBUTION,
}
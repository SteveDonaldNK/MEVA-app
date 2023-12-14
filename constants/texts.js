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


export {
    WELCOME,
    MEDITATION,
}
import { EmailPreviewProps } from "../types/ComponentProps"

import profile1 from "../assets/profile1.jpeg"
import profile2 from "../assets/profile2.jpeg"
import profile3 from "../assets/profile3.jpeg"

const validColors = ["primary.main", "success.main", "info.main"]

function generateRandomValues(arr : string[]) {
    let rand = Math.floor(Math.random() * arr.length)

    return arr[rand];
}

const generateColor = () => generateRandomValues(validColors)

export const emailSummaries : EmailPreviewProps[] = [
    {
        senderName: "John Wright",
        senderEmail: "john12@gmail.com",
        subject: "Welcome to our beautiful community",
        dateReceived: new Date(2024, 6, 20),
        profilePic: profile1,
    },
    {
        senderName: "MLH Fellowship",
        senderEmail: "fellowship@mlh.io",
        subject: "MLH Fellowship welcomes you!",
        dateReceived: new Date(2024, 6, 19),
        themeColor: generateColor(),
    },
    {
        senderName: "Shishir Kumar",
        senderEmail: "shishir@gmail.com",
        subject: "Important files for you",
        dateReceived: new Date(2024, 6, 13),
        profilePic: profile2
    },
    {
        senderName: "Katy Perry",
        senderEmail: "katypery@gmail.com",
        subject: "Hackathon starts soon",
        dateReceived: new Date(2024, 6, 11),
        profilePic: profile3
    },
]
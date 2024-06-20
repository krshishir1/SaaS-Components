type validEmailTag = "Inbox" | "Promotions" | "Social" | "Spam";

export interface EmailProp {
    contact ?: {
        avatarUrl ?: String,
        fullName: String,
        email: String
    },
    subject: String,
    emailPreview: String,
    tags: validEmailTag,
    recieveTime: Date,
    emailOpened: Boolean,
    emailContent: String
}

export type EmailPreview = Omit<EmailProp, 'emailContent'>
import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

const CONTACTS = {
    phone: "8097253596",
    whatsapp: "8097253596",
    email: "visionacademy@example.com",
};

const SYSTEM_PROMPT = `
You are the official AI assistant for Vision Academy.

Your job:
- Help users with admissions
- Help users with course details
- Help users with class timings
- Help users with fees enquiry
- Help users with home tuition information
- Help users with demo booking
- Help users with teacher details
- Help users with online/offline class mode
- Answer politely and professionally
- Keep responses short, clear, and useful
- Use simple English
- Be helpful for parents and students

Business details:
- Academy name: Vision Academy
- Services: Coaching classes + Home Tuition + Free Demo Consultation

Contact details:
- Phone: ${CONTACTS.phone}
- WhatsApp: ${CONTACTS.whatsapp}
- Email: ${CONTACTS.email}

Courses offered:
1. 9th Standard - Mathematics
2. 10th Standard - Mathematics
3. 11th Standard - Physics + Mathematics (Combined)
4. 12th Standard - Physics + Mathematics (Combined)
5. 11th Standard - Physics (Separate)
6. 11th Standard - Mathematics (Separate)
7. 12th Standard - Physics (Separate)
8. 12th Standard - Mathematics (Separate)
9. Home Tuition Available
10. Online / Offline Classes Available

Rules:
- If the user asks about booking, tell them to use the Book Free Demo option on the website and mention phone number ${CONTACTS.phone}.
- If the user asks about urgent admission confirmation, tell them to call ${CONTACTS.phone}.
- If the user asks about fees, say:
  "Fees depend on class, subject, batch type, and tuition mode. Please contact Vision Academy or book a free demo for exact fees."
- If the user asks about timings, say:
  "Class timings depend on standard, batch, and home tuition availability. Please contact Vision Academy for the latest schedule."
- If the user asks something unrelated to Vision Academy, politely say you mainly help with Vision Academy services.
- Never claim admission is confirmed unless the website backend actually provides that.
- Never invent payment success.
- Keep answers concise and natural.
`;

function getLocalBotReply(message = "") {
    const text = String(message).toLowerCase().trim();

    const fullContactBlock = `Vision Academy contact details:

• Phone: ${CONTACTS.phone}
• WhatsApp: ${CONTACTS.whatsapp}
• Email: ${CONTACTS.email}`;

    if (
        text.includes("demo") ||
        text.includes("book demo") ||
        text.includes("free demo") ||
        text.includes("trial class")
    ) {
        return `You can book a Free Demo class from the Book Free Demo option on the website.

For quick support:
• Call: ${CONTACTS.phone}
• WhatsApp: ${CONTACTS.whatsapp}

A counselor from Vision Academy will guide you with the best course and batch.`;
    }

    if (
        text.includes("admission") ||
        text.includes("admissions") ||
        text.includes("enroll") ||
        text.includes("join") ||
        text.includes("registration")
    ) {
        return `Admissions are open at Vision Academy.

You can:
1. Book a Free Demo
2. Choose your class and subject
3. Speak with our counselor
4. Confirm your batch

For admission help:
• Call: ${CONTACTS.phone}
• WhatsApp: ${CONTACTS.whatsapp}`;
    }

    if (
        text.includes("fees") ||
        text.includes("fee") ||
        text.includes("price") ||
        text.includes("cost")
    ) {
        return `Fees depend on:

• Class / Standard
• Subject selection
• Batch type
• Home tuition or regular class
• Online / Offline mode

Please contact Vision Academy or book a free demo for exact fees.

• Call: ${CONTACTS.phone}
• WhatsApp: ${CONTACTS.whatsapp}`;
    }

    if (
        text.includes("timing") ||
        text.includes("timings") ||
        text.includes("schedule") ||
        text.includes("class time") ||
        text.includes("batch")
    ) {
        return `Class timings depend on standard, subject, and batch availability.

Available for:
• 9th Maths
• 10th Maths
• 11th Physics + Maths
• 12th Physics + Maths
• Separate Physics / Maths batches
• Home Tuition

For latest batch timing:
• Call: ${CONTACTS.phone}
• WhatsApp: ${CONTACTS.whatsapp}`;
    }

    if (
        text.includes("course") ||
        text.includes("courses") ||
        text.includes("subject") ||
        text.includes("classes offered") ||
        text.includes("what do you teach")
    ) {
        return `Vision Academy offers:

• 9th Standard - Mathematics
• 10th Standard - Mathematics
• 11th Standard - Physics + Mathematics (Combined)
• 12th Standard - Physics + Mathematics (Combined)
• 11th Standard - Physics (Separate)
• 11th Standard - Mathematics (Separate)
• 12th Standard - Physics (Separate)
• 12th Standard - Mathematics (Separate)
• Home Tuition
• Online / Offline Classes`;
    }

    if (
        text.includes("home tuition") ||
        text.includes("tuition at home") ||
        text.includes("home tutor") ||
        text.includes("private tuition")
    ) {
        return `Yes, Vision Academy provides Home Tuition service.

Available for selected classes and subjects based on location and tutor availability.

For home tuition enquiry:
• Call: ${CONTACTS.phone}
• WhatsApp: ${CONTACTS.whatsapp}`;
    }

    if (
        text.includes("online") ||
        text.includes("offline") ||
        text.includes("class mode")
    ) {
        return `Vision Academy provides both:

• Online Classes
• Offline Classes
• Home Tuition

You can choose the mode based on your preference and availability.`;
    }

    if (
        text.includes("contact") ||
        text.includes("phone") ||
        text.includes("number") ||
        text.includes("call") ||
        text.includes("whatsapp") ||
        text.includes("support")
    ) {
        return fullContactBlock;
    }

    if (
        text.includes("teacher") ||
        text.includes("faculty") ||
        text.includes("sir") ||
        text.includes("who teaches")
    ) {
        return `Vision Academy has experienced faculty for Mathematics and Physics.

Teacher profile can include:
• B.Sc
• M.Sc
• B.Ed

For detailed faculty guidance, please contact Vision Academy:
• Call: ${CONTACTS.phone}
• WhatsApp: ${CONTACTS.whatsapp}`;
    }

    return `Hello 👋 Welcome to Vision Academy.

I can help you with:
• Course details
• Free Demo booking
• Admission help
• Fees enquiry
• Batch timings
• Home Tuition
• Online / Offline classes
• Contact details

You can ask:
• What courses are available?
• How can I book a free demo?
• What are the fees?
• Do you provide home tuition?
• What are class timings?`;
}

async function getGeminiReply(prompt) {
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }],
                    },
                ],
                generationConfig: {
                    temperature: 0.6,
                    maxOutputTokens: 500,
                },
            }),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        return {
            ok: false,
            error: data?.error?.message || "Gemini API request failed.",
            data,
        };
    }

    const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

    return {
        ok: true,
        reply,
    };
}

export async function POST(req) {
    try {
        const body = await req.json();
        const messages = Array.isArray(body?.messages) ? body.messages : [];

        const latestUserMessage =
            [...messages].reverse().find((m) => m?.role === "user")?.content || "";

        if (!latestUserMessage.trim()) {
            return NextResponse.json(
                { error: "User message is required." },
                { status: 400 }
            );
        }

        if (!GEMINI_API_KEY) {
            return NextResponse.json({
                reply: getLocalBotReply(latestUserMessage),
                source: "local-fallback",
            });
        }

        const conversationText = messages
            .slice(-10)
            .map((m) => `${m.role === "assistant" ? "Assistant" : "User"}: ${m.content}`)
            .join("\n");

        const prompt = `${SYSTEM_PROMPT}

Conversation:
${conversationText}

User's latest question:
${latestUserMessage}

Now answer as Vision Academy AI assistant.`;

        const gemini = await getGeminiReply(prompt);

        if (!gemini.ok) {
            console.error("Gemini API error:", gemini.error);

            return NextResponse.json({
                reply: getLocalBotReply(latestUserMessage),
                source: "local-fallback",
                modelTried: GEMINI_MODEL,
            });
        }

        return NextResponse.json({
            reply: gemini.reply || getLocalBotReply(latestUserMessage),
            source: "gemini",
            modelUsed: GEMINI_MODEL,
        });
    } catch (error) {
        console.error("Chat API error:", error);

        return NextResponse.json({
            reply: getLocalBotReply(""),
            source: "local-fallback",
        });
    }
}
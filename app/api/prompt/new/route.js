import { connectToDB } from "@utils/database"

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.JSON();

    try {
        await connectToDB()
    } catch (error) {
        
    }
}
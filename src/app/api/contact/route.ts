import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Lead from '@/models/Lead';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        await dbConnect();

        // Validate if the user sent empty fields (although schema validates too)
        if (!body.name || !body.email || !body.phone || !body.service) {
            return NextResponse.json(
                { message: 'Please provide all required fields' },
                { status: 400 }
            );
        }

        const lead = await Lead.create(body);

        return NextResponse.json({ success: true, data: lead }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

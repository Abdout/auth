import { currentRole } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const role = await currentRole();

    // Dynamically import UserRole inside the function
    const { UserRole } = await import("@prisma/client");

    if (role === UserRole.ADMIN) {
      return NextResponse.json({ message: "Access granted" }, { status: 200 });
    }

    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  } catch (error) {
    console.error("Error in /api/admin:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

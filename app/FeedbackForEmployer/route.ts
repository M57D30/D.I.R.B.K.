import { NextResponse } from "next/server";
import prisma from "../utils/prisma/client";

export async function POST(request: Request) {
  const { aprasymas, tipas, fk_Naudotojasid_Naudotojas, fk_darbuotojas } =
    await request.json();

  const newComment = await prisma.atsiliepimai.create({
    data: { aprasymas, tipas, fk_Naudotojasid_Naudotojas, fk_darbuotojas },
  });

  return NextResponse.json({ atsiliepimai: newComment });
}

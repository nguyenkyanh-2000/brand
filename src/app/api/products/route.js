import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json({ products });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}

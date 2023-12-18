import { NextResponse } from "next/server";

export const handleResponse = (message, data) => {
  return NextResponse.json({ message, data });
};

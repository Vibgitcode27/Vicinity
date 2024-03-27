"use client"

import Image from "next/image";
import { useAppDispatch , useAppSelector } from "@/lib/hooks";

export default function Home() {
  
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {count}
    </main>
  );
}

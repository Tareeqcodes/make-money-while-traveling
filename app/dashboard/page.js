"use client";
import Link from "next/link"
import PackageFeed from "@/components/PackageFeed"
import UserRole from "@/components/UserRole"
import QuickNav from "@/components/QuickNav"
import Navbar from "@/components/Navbar"
import { useAuth } from "@/hooks/Authcontext"



export default function page() {
  const { user } = useAuth();

  return (
    <>
    {user ? (
      <div>
    <div className="mb-20 bg-gradient-to-br from-gray-50 to-blue-50 px-6">
      <UserRole />
      <PackageFeed />
      <QuickNav />
      <div className="h-20"></div>
      <Navbar /> 
    </div>
      </div>
    
    ) : (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Please log in to continue</h1>
        <Link href="/login" className="mt-4 text-blue-500">
          Go to Login
        </Link>
      </div>
    )}
    </>
    
  )
}

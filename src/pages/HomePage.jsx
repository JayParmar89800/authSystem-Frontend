import React from "react"
import { Link } from "react-router-dom"
import { UserPlus, Shield, Mail } from "react-feather"
import Header from "../components/Header"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col ">
     <Header/>

      <main className="min-h-[inherit] absolute w-full flex items-center justify-center">
        
        <div className="py-12 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Features</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <UserPlus className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Customer Registration</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Register as a customer to access our services. Customers get access to our platform features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <Shield className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Admin Registration</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Register as an administrator to manage the platform. Admins have special privileges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <Mail className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Email Verification</h3>
                    <p className="mt-5 text-base text-gray-500">
                      All accounts require email verification for security. Check your inbox after registration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  )
}


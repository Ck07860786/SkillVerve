import Header from "@/components/ui/shared/layout/Header";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Question from "@/components/ui/shared/Question";
import Features from "@/components/ui/shared/Features";
import Footer from "@/components/ui/shared/layout/Footer";
import BrowserMokup from "@/components/ui/BrowserMokup";
import Avataar from "@/components/ui/Avataar";

function Hero() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mt-20 md:mt-32">
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-zinc-950 text-3xl md:text-xl font-Inter font-medium mb-4 md:mb-6">
              Skill<span className="text-blue-700">Verve</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-Inter font-semibold mb-4 md:mb-6">
              Get Started. Learn and Teach{" "}
              <ins className="text-blue-700">New Skills</ins>
            </h2>
            <div className="px-4 md:px-24 py-4 md:py-6">
              <p className="text-lg md:text-xl">
                Welcome to SkillVerve, your online platform for skill exchange!
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center mt-4 md:mt-6">
              <Link to="/register">
                <Button className="w-full md:w-auto">Join as Learner</Button>
              </Link>
              <Link to='/register-admin'>
                <Button className="w-full md:w-auto bg-white" variant="outline">
                  Become a Leader
                </Button>
              </Link>
            </div>
            <div className="flex justify-center mt-8">
              <p className="text-sm text-zinc-600 mb-2">100K+ Contributers</p>
            </div>
            <div className="flex justify-center">
              <Avataar />
            </div>
          </div>
        </div>
        
        <BrowserMokup/>
        
        <div className="min-h-screen flex flex-col mt-20 md:mt-36">
          <div className="mt-10 md:mt-20 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Our Collaboratives</h3>
            <div className="flex justify-around flex-wrap mt-6 md:mt-10 gap-4">
              <img src="https://logospng.org/download/udemy/udemy-4096.png" alt="udemy" className="h-12 md:h-16 w-1/5 md:w-auto max-w-xs mb-4 md:mb-0"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1024px-Coursera-Logo_600x600.svg.png" alt="coursera" className="h-12 md:h-16 w-1/5 md:w-auto max-w-xs mb-4 md:mb-0"/>
              <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTH0LDh5OguoTpqBa20tO6eCV5oMNHANLZ5USM1VTQwl0fUtJC9" alt="edx" className="h-12 md:h-16 w-1/5 md:w-auto max-w-xs mb-4 md:mb-0"/>
              <img src="https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?rect=375%2C0%2C2256%2C1412&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548" alt="codecadmy" className="h-12 md:h-16 w-1/5 md:w-auto max-w-xs mb-4 md:mb-0"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Udacity_logo.png" alt="udacity" className="h-12 md:h-16 w-1/5 md:w-auto max-w-xs mb-4 md:mb-0"/>
            </div>
          </div>
          <div className="mt-20 md:mt-40 text-center">
            <h1 className="text-xl md:text-2xl font-semibold mb-2">Why Choose SkillVerve?</h1>
            <p className="text-zinc-400 mb-8">Discover the Benefits of Our Platform</p>
            <Features />
          </div>
        </div>
        <Question />
      </div>
      <Footer/>
    </>
  );
}

export default Hero;

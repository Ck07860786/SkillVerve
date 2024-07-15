import React from "react";
import { Users, Nfc, MonitorSmartphone, SquareMousePointer, Layers3, Zap, TicketPercent, Fingerprint } from "lucide-react";

function Features() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
     
      <div className="max-w-xs flex items-start flex-col">
        <Users strokeWidth={1} className="bg-blue-300 rounded-md p-2 size-12 mb-2" />
        <div className="text-left">
          <h3 className="font-semibold mb-2">User-Friendly Registration</h3>
          <p className="text-gray-400 mb-4">
            Easily sign up and create your profile to start sharing or learning new skills.
          </p>
          <a href="#" className="text-blue-500">
            Learn more &rarr;
          </a>
        </div>
      </div>

      
      <div className="max-w-xs flex items-start flex-col">
        <Layers3 strokeWidth={1} className="bg-blue-300 rounded-md p-2 size-12 mb-2" />
        <div className="text-left">
          <h3 className="font-semibold mb-2">Diverse Skill Categories</h3>
          <p className="text-gray-400 mb-4">
            Explore a wide range of skills across various categories like cooking, music, and programming.
          </p>
          <a href="#" className="text-blue-500">
            Learn more &rarr;
          </a>
        </div>
      </div>

     
      <div className="max-w-xs flex items-start flex-col">
        <Zap strokeWidth={1} className="bg-blue-300 rounded-md p-2 size-12 mb-2" />
        <div className="text-left">
          <h3 className="font-semibold mb-2">Expert Instructors</h3>
          <p className="text-gray-400 mb-4">
            Learn from experienced instructors with detailed profiles and reviews.
          </p>
          <a href="#" className="text-blue-500">
            Learn more &rarr;
          </a>
        </div>
      </div>

      
      <div className="max-w-xs flex items-start flex-col">
        <SquareMousePointer strokeWidth={1} className="bg-blue-300 rounded-md p-2 size-12 mb-2" />
        <div className="text-left">
          <h3 className="font-semibold mb-2">Easy Skill Listing</h3>
          <p className="text-gray-400 mb-4">
            Instructors can quickly list their skills with descriptions, pricing, and availability.
          </p>
          <a href="#" className="text-blue-500">
            Learn more &rarr;
          </a>
        </div>
      </div>

     
      <div className="max-w-xs flex items-start flex-col">
        <TicketPercent strokeWidth={1} className="bg-blue-300 rounded-md p-2 size-12 mb-2" />
        <div className="text-left">
          <h3 className="font-semibold mb-2">Seamless Booking and Scheduling</h3>
          <p className="text-gray-400 mb-4">
            Book and schedule sessions with ease and at your convenience.
          </p>
          <a href="#" className="text-blue-500">
            Learn more &rarr;
          </a>
        </div>
      </div>

     
      <div className="max-w-xs flex items-start flex-col">
        <Fingerprint strokeWidth={1} className="bg-blue-300 rounded-md p-2 size-12 mb-2" />
        <div className="text-left">
          <h3 className="font-semibold mb-2">Secure Payment Processing</h3>
          <p className="text-gray-400 mb-4">
            Handle payments securely through our integrated payment gateway.
          </p>
          <a href="#" className="text-blue-500">
            Learn more &rarr;
          </a>
        </div>
      </div>

      
      <div className="max-w-xs flex items-start flex-col">
        <Nfc strokeWidth={1} className="bg-blue-300 rounded-md p-2 size-12 mb-2" />
        <div className="text-left">
          <h3 className="font-semibold mb-2">Real-Time Communication</h3>
          <p className="text-gray-400 mb-4">
            Communicate directly with instructors or learners via our built-in messaging system.
          </p>
          <a href="#" className="text-blue-500">
            Learn more &rarr;
          </a>
        </div>
      </div>

     
      <div className="max-w-xs flex items-start flex-col">
        <MonitorSmartphone strokeWidth={1} className="bg-blue-300 rounded-md p-2 size-12 mb-2" />
        <div className="text-left">
          <h3 className="font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-400 mb-4">
            Access ShareSkill seamlessly on any device, be it desktop, tablet, or smartphone.
          </p>
          <a href="#" className="text-blue-500">
            Learn more &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Features;

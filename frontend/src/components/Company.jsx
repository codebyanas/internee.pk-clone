import React from "react";

export default function Company() {
  return (
    <div className="font-sans p-8 bg-white">
      {/* Header Section */}
      <h2 className="text-center text-2xl font-semibold mb-4">
        Are You Looking For Hands-On Candidate For Your Company?
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Our end goal is to provide the best candidate for your company for your
        exponential growth. Let’s hand shake and create a win-win situation on
        both sides.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-green-500">15k+</h3>
          <p className="text-gray-600">Internship Provided</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-green-500">48k+</h3>
          <p className="text-gray-600">LinkedIn Family</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-green-500">28</h3>
          <p className="text-gray-600">Courses on LMS</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-green-500">15</h3>
          <p className="text-gray-600">Companies Onboarded</p>
        </div>
      </div>

      {/* How It Works Section */}
      <h3 className="text-center text-xl font-semibold mb-6">How does it work?</h3>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-500 font-bold rounded-full mb-2">
            1
          </div>
          <h4 className="font-medium text-lg mb-1">Fill The Form Below</h4>
          <p className="text-sm text-gray-600">
            Begin by filling out the form below with your basic information.
            This will help us understand your needs and connect you with the
            right team.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-500 font-bold rounded-full mb-2">
            2
          </div>
          <h4 className="font-medium text-lg mb-1">
            Provide Details About Your Company or Organization
          </h4>
          <p className="text-sm text-gray-600">
            Next, provide specific details about your company or organization.
            This information helps us tailor our services to suit your
            requirements and deliver the best results.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-500 font-bold rounded-full mb-2">
            3
          </div>
          <h4 className="font-medium text-lg mb-1">
            Team Will Contact You Within 24 Hrs
          </h4>
          <p className="text-sm text-gray-600">
            Once you've submitted your details, our team will reach out to you
            within 24 hours. We’ll guide you through the next steps and discuss
            how we can help you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
}

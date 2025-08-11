import React from "react";
import SelectCountry from "@/app/_components/SelectCountry";

export default function Page(): JSX.Element {
  // Example values (you may replace them with props or fetched data)
  const countryFlag: string = "pt.jpg";
  const nationality: string = "portugal";

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
        {/* Full name */}
        <div className="space-y-2">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            disabled
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm 
                       disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        {/* Email address */}
        <div className="space-y-2">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            disabled
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm 
                       disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        {/* Nationality */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <img
              src={countryFlag}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          </div>

          <SelectCountry
            name="nationality"
            id="nationality"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultCountry={nationality}
          />
        </div>

        {/* National ID */}
        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            id="nationalID"
            name="nationalID"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end items-center gap-6">
          <button
            type="submit"
            className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all 
                       disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
          >
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}

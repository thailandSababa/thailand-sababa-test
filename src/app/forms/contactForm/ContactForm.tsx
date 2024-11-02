'use client'

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";
import contactForm from "./zodSchema";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS
import { useContext } from "react";
import { FormContext } from "@/app/context";


type signUpSchema = z.infer<typeof contactForm>;

const ContactForm = () => {
    const router = useRouter()
    const {setFormData} = useContext(FormContext) || {}

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<signUpSchema>({ resolver: zodResolver(contactForm) });

  const onSubmit = async (data: signUpSchema) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
    if (setFormData) setFormData(data);

      reset();

          router.push("/forms/mainContactForm");

      
      
  };

  return (
    <div dir="rtl" className="relative mb-10 bg-lime-200 rounded-xl" id="form">
      <div className="flex flex-col justify-center items-center mt-20 bg-lime- py-8 ">
        <div>
          <h3 className="text-2xl text-center font-semibold">
            עזרו לנו לעזור לכם ולבנות את החופשה המושלמת עבורכם
          </h3>
        </div>

        <div className="w-3/4 mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 md:gap-4 w-full"
          >
            <div className="flex justify-center items-center flex-col md:flex-row gap-4">
              <input
                {...register("name")}
                type="text"
                maxLength={40}
                placeholder={errors.name ? errors.name.message : "שם"}
                className={`px-4 py-4 rounded-xl shadow-md shadow-gray-500 bg-white placeholder:text-gray-500 lg:w-full w-[300px] ${
                  errors.name ? "border border-red-500" : ""
                }`}
                title={errors.name ? errors.name.message : ""}
              />
              <input
                {...register("email")}
                type="email"
                maxLength={40}
                placeholder={errors.email ? errors.email.message : "אימייל"}
                className={`px-4 py-4 rounded-xl shadow-md shadow-gray-500 bg-white placeholder:text-gray-500 lg:w-full w-[300px]${
                  errors.email ? "border border-red-500" : ""
                }`}
                title={errors.email ? errors.email.message : ""}
              />
            </div>

            <div className="flex justify-center items-center flex-col md:flex-row gap-4">
              <input
                {...register("phoneNumber")}
                type="text"
                inputMode="numeric"
                maxLength={20}
                placeholder="מספר טלפוון"
                className="px-4 py-4 rounded-xl shadow-md shadow-gray-500 bg-white placeholder:text-gray-500 lg:w-full w-[300px]"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                }}
                onInput={(e) => {
                  const input = e.target as HTMLInputElement; // Type assertion
                  input.value = input.value.replace(/[^0-9]/g, ""); // Allow only numbers
                }}
              />

              <input
                {...register("numberOfTravelers")}
                type="number"
                min={1}
                max={20}
                placeholder={
                  errors.numberOfTravelers
                    ? errors.numberOfTravelers.message
                    : "מספר נוסעים"
                }
                className={`px-4 py-4 rounded-xl shadow-md shadow-gray-500 bg-white placeholder:text-gray-500 lg:w-full w-[300px]${
                  errors.numberOfTravelers ? "border border-red-500" : ""
                }`}
                onKeyDown={(e) => {
                  if (["-", "+", "e", "E"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              {isSubmitting ? (
                <LoadingButton />
              ) : (
                <Button
                  variant="default"
                  type="submit"
                  size="lg"
                  className="disabled:bg-red-300 text-lg  bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={isSubmitting}
                >
                  שלח
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

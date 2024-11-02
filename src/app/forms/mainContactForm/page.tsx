"use client";

import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect } from "react";
import z from "zod";
import Select, { StylesConfig } from "react-select";
import { MainContactFormSchema } from "./zodSchemaMain";
import { submitHandler } from "./submitHandler";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FormContext } from "@/app/context";
import { useContext } from "react";

type OptionType = {
  value: string;
  label: string;
};

type signUpSchemaMain = z.infer<typeof MainContactFormSchema>;

const MainContactForm = () => {
  const { formData } = useContext(FormContext) || {};

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm<signUpSchemaMain>({
    resolver: zodResolver(MainContactFormSchema),
    defaultValues: {
      kidAge: [],
    },
  });

  const numberOfChildren = watch("numberOfChildren", 0); // Watch the number of children

  useEffect(() => {
    const childrenCount = numberOfChildren ?? 0; // Используем 0, если numberOfChildren не определено

    // Создаем массив с длиной, равной количеству детей, заполняем его значениями 0
    const updatedKidAges = Array.from({ length: childrenCount }, () => 0);

    // Обновляем поле kidAge значениями 0 для всех детей
    setValue("kidAge", updatedKidAges);
  }, [numberOfChildren, setValue]);

  const router = useRouter();
  const form = useRef<HTMLFormElement | null>(null);
  const [isBot, setIsBot] = useState(false); // Honeypot detection

  const handleHoneypot = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsBot(true); // If honeypot field is filled, mark as bot
    }
  };

  useEffect(() => {
    if (formData) {
      // Pre-fill the form fields with the values from the ContactForm
      setValue("name", formData?.name || "");
      setValue("email", formData?.email || "");
      setValue("phoneNumber", formData?.phoneNumber || undefined);
      setValue("numberOfTravelers", formData?.numberOfTravelers || 1);
    }
  }, [formData, setValue]);

  const onSubmit = (data: signUpSchemaMain) => {
    submitHandler({
      data,
      form,
      reset,
      watch,
      isBot,
      router,
    });
  };

  const isBuyTicketOptions: OptionType[] = [
    { value: "כן", label: "כן" },
    { value: "לא", label: "לא" },
  ];
  const typeOfVacationOptions: OptionType[] = [
    { value: "בטן גב", label: "בטן גב" },
    { value: "אטרקציות וטיולים", label: "אטרקציות וטיולים" },
    { value: "משולב", label: "משולב" },
  ];
  const typeOfHotelsOptions: OptionType[] = [
    { value: "3", label: "3 כוכבים" },
    { value: "4", label: "4 כוכבים" },
    { value: "5", label: "5 כוכבים" },
  ];
  const vacationPlanningOptions: OptionType[] = [
    { value: "כן", label: "כן" },
    { value: "לא", label: "לא" },
  ];

  const getCustomStyles = (error: boolean): StylesConfig<OptionType> => ({
    control: (provided) => ({
      ...provided,
      backgroundColor: "#18ca23",
      borderRadius: "0.375rem",
      border: error ? "2px solid red" : "1px solid black", // Apply red border if there's an error
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white", // Force white text color
      fontSize: "16px",
      fontWeight: "bold",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#74d173"
        : state.isFocused
        ? "#87d18b82"
        : undefined,
      color: state.isSelected ? "#fff" : "#000",
      padding: 10,
      ":active": {
        backgroundColor: "#B1D690", // Background color when pressing and holding
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white", // Custom placeholder color
      fontSize: "16px",
      fontStyle: "italic", // Optional: Italic style for the placeholder
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "white", // Change arrow color
      padding: "0 8px",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none", // Remove the separator line between the dropdown arrow and the selected value
    }),
  });

  return (
    <div>
      <form
        dir="rtl"
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-lg mt-10"
      >
        <h1 className="text-[#FFA24C] text-4xl font-serif text-center mb-10">
          עוד כמה פרטים בבקשה שנוכל לבנות את החופשה שתתאים במיוחד עבורכם
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <label htmlFor="name" className="w-32 text-gray-700 font-medium">
              שם
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className={`flex-1 border border-gray-400 p-2 rounded-lg ${
                errors.name ? "border-red-500" : "border-gray-400"
              }`}
              placeholder={errors.name ? errors.name.message : "Name"}
            />
          </div>
          {/* Email */}
          <div className="flex items-center">
            <label htmlFor="email" className="w-32 text-gray-700 font-medium">
              מייל
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className={`flex-1 border border-gray-400 p-2 rounded-lg ${
                errors.email ? "border-red-500" : "border-gray-400"
              }`}
              placeholder={errors.email ? errors.email.message : "Email"}
            />
          </div>
          {/* Phone Number */}
          <div className="flex items-center">
            <label
              htmlFor="phoneNumber"
              className="w-32 text-gray-700 font-medium"
            >
              מספר טלפון
            </label>
            <input
              {...register("phoneNumber")}
              type="number"
              id="phoneNumber"
              className={`flex-1 border border-gray-400 p-2 rounded-lg ${
                errors.phoneNumber ? "border-red-500" : "border-gray-400"
              }`}
              placeholder="Phone Number"
            />
          </div>
          {/* Number of Travelers */}
          <div className="flex items-center">
            <label
              htmlFor="numberOfTravelers"
              className="w-32 text-gray-700 font-medium"
            >
              מספר נופשים
            </label>
            <input
              {...register("numberOfTravelers")}
              type="number"
              id="numberOfTravelers"
              className={`flex-1 border border-gray-400 p-2 rounded-lg ${
                errors.numberOfTravelers ? "border-red-500" : "border-gray-400"
              }`}
              placeholder="Number of Travelers"
              min={1}
              onKeyDown={(e) => {
                if (["-", "+", "e", "E"].includes(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row sm:items-center">
            <label htmlFor="" className="w-40 text-gray-700 font-medium">
              הרכב הנוסעים
            </label>

            <div className="flex flex-col md:flex-row gap-2 w-full">
              <input
                {...register("numberOfAdults")}
                type="number"
                id="numberOfAdults"
                className={`flex-1 min-w-[120px] border border-gray-400 p-2 rounded-lg ${
                  errors.numberOfAdults ? "border-red-500" : "border-gray-400"
                }`}
                placeholder="מבוגרים"
                min={1}
                onKeyDown={(e) => {
                  if (["-", "+", "e", "E"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <input
                {...register("numberOfChildren")}
                type="number"
                id="numberOfChildren"
                className="flex-1 min-w-[120px] border border-gray-400 p-2 rounded-lg"
                placeholder="ילדים"
                min={0}
                max={8}
                onKeyDown={(e) => {
                  if (["-", "+", "e", "E"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </div>

          {Array.from({ length: numberOfChildren as number }).map(
            (_, index) => (
              <div key={index} className="flex items-center">
                <label
                  htmlFor={`kidAge-${index}`}
                  className="w-32 text-gray-700 font-medium"
                >
                  גיל ילד {index + 1}
                </label>
                <input
                  {...register(`kidAge.${index}`, {
                    valueAsNumber: true,
                    required: "Age is required", // Проверка для каждого возраста
                    // setValueAs: (value) =>
                    //   value === "" || value === undefined ? 0 : value,
                  })}
                  type="number"
                  id={`kidAge-${index}`}
                  className={`flex-1 border border-gray-300 p-2 rounded-lg ${
                    errors.kidAge?.[index]
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder={`גיל ילד ${index + 1}`}
                  min={0}
                  max={17}
                  onKeyDown={(e) => {
                    if (["-", "+", "e", "E"].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
            )
          )}

          <div className="flex items-center">
            <label
              htmlFor="isBuyTicket"
              className="w-32 text-gray-700 font-medium"
            >
              האם רכשתם כבר כרטיס?
            </label>
            <Select
              id="isBuyTicket"
              name="isBuyTicket"
              options={isBuyTicketOptions}
              styles={getCustomStyles(!!errors.isBuyTicket)}
              placeholder="בחרו אפשרות"
              onChange={(selectedOption) => {
                const option = selectedOption as OptionType;
                setValue("isBuyTicket", option.value); // Update the value in the form state
              }}
            />
          </div>

          <div className="flex items-center">
            <label
              htmlFor="dateRange"
              className="w-32 text-gray-700 font-medium"
            >
              תאריכי חופשה
            </label>
            <Controller
              control={control}
              name="dateRange"
              render={({ field }) => (
                <DatePicker
                  selected={
                    field.value?.[0] ? new Date(field.value[0]) : undefined
                  }
                  onChange={(dates) => {
                    const [start, end] = dates as [Date | null, Date | null];
                    field.onChange([start || undefined, end || undefined]); // Update the date range
                  }}
                  startDate={field.value?.[0]}
                  endDate={field.value?.[1]}
                  selectsRange
                  dateFormat="dd/MM/yyyy"
                  className={`flex-1 border p-2 rounded-lg ${
                    errors.dateRange
                      ? "border-red-500"
                      : "border-gray-400 w-52 text-center"
                  }`}
                  placeholderText="בחרו תאריכי חופשה"
                />
              )}
            />
          </div>

          {/* Hidden input for dateRange to be passed to emailjs */}
          <input
            type="hidden"
            name="dateRange"
            value={
              watch("dateRange")
                ? `${watch("dateRange")[0]?.toLocaleDateString()} - ${watch(
                    "dateRange"
                  )[1]?.toLocaleDateString()}`
                : ""
            }
          />

          <div className="flex items-center">
            <label
              htmlFor="typeOfVacation"
              className="w-32 text-gray-700 font-medium"
            >
              איזו חופשה תעדיפו?
            </label>
            <Select
              id="typeOfVacation"
              name="typeOfVacation"
              options={typeOfVacationOptions}
              styles={getCustomStyles(!!errors.typeOfVacation)}
              placeholder="בחרו אפשרות"
              onChange={(selectedOption) => {
                const option = selectedOption as OptionType;
                setValue("typeOfVacation", option.value); // Update the value in the form state
              }}
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="typeOfHotels"
              className="w-32 text-gray-700 font-medium"
            >
              רמת הבתי מלון?
            </label>
            <Select
              id="typeOfHotels"
              name="typeOfHotels"
              options={typeOfHotelsOptions}
              styles={getCustomStyles(!!errors.typeOfHotels)}
              placeholder="בחרו אפשרות"
              onChange={(selectedOption) => {
                const option = selectedOption as OptionType;
                setValue("typeOfHotels", option.value); // Update the value in the form state
              }}
            />
          </div>

          <div className="flex items-center">
            <label
              htmlFor="PlanningOptions"
              className="w-32 text-gray-700 font-medium"
            >
              האם יש מסלול מתוכנן?
            </label>
            <Select
              id="PlanningOptions"
              name="PlanningOptions"
              options={vacationPlanningOptions}
              styles={getCustomStyles(!!errors.PlanningOptions)}
              placeholder="בחרו אפשרות"
              onChange={(selectedOption) => {
                const option = selectedOption as OptionType;
                setValue("PlanningOptions", option.value); // Update the value in the form state
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="freeText" className=" text-gray-700 font-medium">
              אם תרצו להוסיף משהו לגבי החופשה נשמח לשמוע
            </label>
            <textarea
              {...register("freeText")}
              id="freeText"
              name="freeText"
              className={`flex-1 border border-black w-full p-2 rounded-lg ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder={errors.name ? errors.name.message : ""}
            />
          </div>
          <input
            {...register("website")}
            type="text"
            name="website" // Honeypot field name
            onChange={handleHoneypot}
            className="hidden"
            autoComplete="off"
          />
          {/* Submit Button */}
          <div className="flex justify-end">
            {/* <input
            type="submit"
            value="Send"
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          /> */}

            <div className="flex justify-center w-full">
              <Button
                variant={"default"}
                className="text-white font-bold bg-orange-500 hover:bg-orange-600"
              >
                שלח
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainContactForm;

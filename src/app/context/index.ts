'use client'

import { CustomFormData } from "@/types/formData";
import { createContext, Dispatch, SetStateAction } from "react"

type FormContextProps = {
  formData: CustomFormData;
  setFormData: Dispatch<SetStateAction<CustomFormData>>;
};

export const FormContext = createContext<FormContextProps | undefined>(undefined) 





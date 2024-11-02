'use client'

import { ReactNode, useState } from "react"
import { FormContext } from "../context"
import { CustomFormData } from "@/types/formData";

type FormProviderProps = {
    children: ReactNode
}

export default function FormProvider({ children }: FormProviderProps) {
    
const [formData, setFormData] = useState<CustomFormData>({
  name: "",
  email: "",
  numberOfTravelers: 1,
  phoneNumber: undefined,
});

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    )
}




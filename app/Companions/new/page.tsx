"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {subjects} from "@/constants";
import {Textarea} from "@/components/ui/textarea";
import {createCompanion} from "@/lib/actions/companion.actions";
import {redirect} from "next/navigation";
import CompanionForm from "@/components/CompanionForm"

const formSchema = z.object({
    name: z.string().min(1, { message: 'Companion is required.'}),
    subject: z.string().min(1, { message: 'Subject is required.'}),
    topic: z.string().min(1, { message: 'Topic is required.'}),
    voice: z.string().min(1, { message: 'Voice is required.'}),
    style: z.string().min(1, { message: 'Style is required.'}),
    duration: z.coerce.number().min(1, { message: 'Duration is required.'}),
})

const newCompanion =()=> {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: '',
        subject: '',
        topic: '',
        voice: '',
        style: '',
        duration: 15,
    },
})

const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const companion = await createCompanion(values);

    if(companion) {
        redirect(`/companions/${companion.id}`);
    } else {
        console.log('Failed to create a companion');
        redirect('/');
    }
}



  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article>

         <h1>companion builder</h1>

         <CompanionForm/>
      </article>
    </main>
  )
}

export default newCompanion
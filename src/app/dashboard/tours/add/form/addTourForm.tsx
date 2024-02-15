"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { addTourData, addTourSchema } from "./addTour.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { addTour } from "@/lib/tour/tour.actions";

export const AddTourForm = () => {
  const form = useForm<addTourData>({
    resolver: zodResolver(addTourSchema),
  });

  const router = useRouter();

  const onSubmit = form.handleSubmit(async (data) => {
    const result = await addTour(data);
    if (result.success) {
      toast.success("Tour added successfully");
      router.push("/dashboard/tours");
    } else {
      toast.error(result.message);
    }
  });

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="mx-10 my-6 px-4 py-6 space-y-4 bg-white"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tour Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter tour name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tour description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter tour description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tour Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter tour location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tour Duration</FormLabel>
              <FormControl>
                <Input placeholder="Enter tour duration" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="w-full"
        >
          {form.formState.isSubmitting && <LoadingSpinner />}
          Add tour
        </Button>{" "}
      </form>
    </Form>
  );
};

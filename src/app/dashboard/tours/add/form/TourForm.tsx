"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFieldArray, useForm } from "react-hook-form";
import { tourFormData, tourSchema } from "./TourForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { addTour, updateTour } from "@/lib/tour/tour.actions";
import { Tour } from "@/models/Tour";

export const TourForm = ({ tourData }: { tourData?: Tour }) => {
  const form = useForm<tourFormData>({
    resolver: zodResolver(tourSchema),
    values: tourData
      ? {
          ...tourData,
          includes: tourData?.includes?.map((value) => ({ value })),
          excludes: tourData?.excludes?.map((value) => ({ value })),
        }
      : undefined,
  });
  const router = useRouter();

  const options = useFieldArray({
    name: "options",
    control: form.control,
  });
  const includes = useFieldArray({
    name: "includes",
    control: form.control,
  });
  const excludes = useFieldArray({
    name: "excludes",
    control: form.control,
  });

  const addOption = () => {
    if (options.fields.at(-1)?.name === "") {
      form.setError("options", { message: "Option name cannot be empty" });
      form.setFocus(`options.${options.fields.length - 1}.name`);
      return;
    }
    form.clearErrors("options");
    options.append({ name: "", price: 0 });
  };
  const addInclude = () => {
    if (includes.fields.at(-1)?.value === "") {
      form.setError("includes", {
        message: "Include name cannot be empty",
      });
      form.setFocus(`includes.${includes.fields.length - 1}.value`);
      return;
    }
    form.clearErrors("includes");
    includes.append({ value: "" });
  };
  const addExclude = () => {
    if (excludes.fields.at(-1)?.value === "") {
      form.setError("excludes", {
        message: "excludes name cannot be empty",
      });
      form.setFocus(`excludes.${excludes.fields.length - 1}.value`);
      return;
    }
    form.clearErrors("excludes");
    excludes.append({ value: "" });
  };

  const onSubmit = form.handleSubmit(async (data) => {
    let result;

    if (tourData) {
      result = await updateTour(tourData.id, data);
    } else {
      result = await addTour(data);
    }

    if (result.success) {
      toast.success(`Tour ${tourData ? "updated" : "added"} successfully`);
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
        {/* includes */}
        <div className="flex flex-col ">
          <FormLabel className="">Include list</FormLabel>
          <div className="my-4 space-y-4">
            {includes.fields.map((field, index) => (
              <div key={field.id} className="flex w-full gap-2">
                <FormField
                  control={form.control}
                  name={`includes.${index}.value`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="button" onClick={() => includes.remove(index)}>
                  x
                </Button>
              </div>
            ))}
            {form.formState.errors.includes && (
              <p className="text-red-500">
                {form.formState.errors.includes.message}
              </p>
            )}
          </div>

          <Button
            onClick={addInclude}
            type="button"
            variant={"outline"}
            className="w-32"
          >
            + add item
          </Button>
        </div>
        {/* end of includes */}
        {/* excludes */}
        <div className="flex flex-col ">
          <FormLabel className="">Exclude list</FormLabel>
          <div className="my-4 space-y-4">
            {excludes.fields.map((field, index) => (
              <div key={field.id} className="flex w-full gap-2">
                <FormField
                  control={form.control}
                  name={`excludes.${index}.value`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="button" onClick={() => excludes.remove(index)}>
                  x
                </Button>
              </div>
            ))}
            {form.formState.errors.excludes && (
              <p className="text-red-500">
                {form.formState.errors.excludes.message}
              </p>
            )}
          </div>
          <Button
            onClick={addExclude}
            type="button"
            variant={"outline"}
            className="w-32"
          >
            + add item
          </Button>
        </div>
        {/* options */}
        <div className="flex flex-col ">
          <FormLabel className="">Options</FormLabel>
          <div className="my-4 space-y-4">
            {options.fields.map((field, index) => (
              <div key={field.id} className="flex w-full gap-2">
                <FormField
                  control={form.control}
                  name={`options.${index}.name`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`options.${index}.price`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="button" onClick={() => options.remove(index)}>
                  x
                </Button>
              </div>
            ))}
            {form.formState.errors.options && (
              <p className="text-red-500">
                {form.formState.errors.options.message}
              </p>
            )}
          </div>

          <Button
            onClick={addOption}
            type="button"
            variant={"outline"}
            className="w-32"
          >
            + add option
          </Button>
        </div>
        {/* end of options */}
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="w-full"
        >
          {form.formState.isSubmitting && <LoadingSpinner />}
          {tourData ? "Update" : "Add"} tour
        </Button>{" "}
      </form>
    </Form>
  );
};

"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSingleTour } from "@/lib/tour/tour.actions";
import { useEffect, useState } from "react";
import { TourOption } from "@/models/Tour";
import { Checkbox } from "@/components/ui/checkbox";
import Loading from "@/app/(home)/loading";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export default function Reserve({ params }: { params: { tourId: string } }) {
  const [loading, setLoading] = useState<boolean | null>(true);
  const [tourPrice, setTourPrice] = useState<number>(0);
  const [totalPrice, setPrice] = useState<number>(0);
  const [validOptions, setOption] = useState<TourOption[] | null>([]);

  let { tourId } = params;
  const fetchTourData = async () => {
    try {
      const tour = await getSingleTour(Number(tourId));
      const { options, price } = tour.data!;
      setTourPrice(price);
      setPrice(price);
      setOption(options);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tour data:", error);
    }
  };

  useEffect(() => {
    fetchTourData();
  }, []);

  const calculateTotalPrice = () => {
    let total: number = 0;
    const options = form.getValues().options as TourOption[] | undefined;
    options?.forEach((item) => {
      total += Number(item.price);
    });
    total += Number(tourPrice);
    setPrice(total);
  };

  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().regex(phoneRegex, "Invalid Number"),
    hotelName: z.string().min(2).max(50),
    roomNumber: z.string().optional(),
    options: z.array(z.custom<TourOption>()).optional(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      hotelName: "",
      roomNumber: "",
      options: [],
    },
  });

  const { isDirty } = form.formState;

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <section className="capitalize md:px-24 md:pt-28 pt-52 px-10 mb-10">
          <Form {...form}>
            <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2 text-2xl font-medium">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hotelName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hotel Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Hotel Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="text-2xl font-medium md:ml-20">
                <FormField
                  control={form.control}
                  name="roomNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Room Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Room Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="options"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Select the items you want</FormLabel>
                      {validOptions?.map((item, index) => (
                        <div key={index} className="flex flex-row">
                          <FormControl>
                            <Checkbox
                              className="my-3"
                              checked={(field.value as TourOption[]).some(
                                (obj) => obj.name === item.name
                              )}
                              onCheckedChange={(checked) => {
                                let result = checked
                                  ? field.onChange([...field.value, item])
                                  : field.onChange(
                                      (field.value as TourOption[]).filter(
                                        (value) => value.name !== item.name
                                      )
                                    );
                                calculateTotalPrice();
                                return result;
                              }}
                            />
                          </FormControl>
                          <div className="mx-2">
                            <FormLabel className="text-base">
                              {item.name}
                            </FormLabel>
                            <FormDescription className="font-base">
                              extra price: {item.price} ${" "}
                            </FormDescription>
                          </div>
                        </div>
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormLabel className="text-xl my-10">
                  total price : {totalPrice} $
                </FormLabel>
              </div>
              <button
                disabled={!isDirty}
                className="disabled:bg-gray-600 md:col-span-2 md:w-1/3  block text-2xl text-center font-medium mx-auto  px-5 py-2 rounded-md text-white bg-secondary-foreground hover:bg-secondary"
                type="submit"
              >
                Continue
              </button>
            </form>
          </Form>
        </section>
      )}
    </>
  );
}

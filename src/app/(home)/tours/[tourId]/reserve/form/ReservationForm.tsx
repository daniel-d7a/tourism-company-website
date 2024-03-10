"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  LoadingSpinner,
  Checkbox,
  Input,
} from "@/components/ui";
import { useReserveForm } from "./Reservation.hooks";
import { TourOption } from "@/models";
import { useState } from "react";

export function ReservationForm({
  tourOptions,
  tourPrice,
}: {
  tourOptions?: TourOption[];
  tourPrice: number;
}) {
  const { reserveForm, onSubmit, isSubmitting, isValid } = useReserveForm();

  const [totalPrice, setTotalPrice] = useState<string>(String(tourPrice));
  const calculateTotalPrice = () => {
    let total: number = Number(0);
    const options = reserveForm.getValues().options as TourOption[] | undefined;
    options?.forEach((item) => {
      total += Number(item.price);
    });
    total += Number(tourPrice);
    setTotalPrice(total.toFixed(2));
    console.log(reserveForm.formState.errors);
    console.log(isValid);
  };

  return (
    <Form {...reserveForm}>
      <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-5">
        <div className="space-y-3">
          <FormField
            control={reserveForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Name</FormLabel>
                  <span className="text-sm text-red-600 mx-1">*</span>
                </div>
                <FormControl>
                  <Input required placeholder="Enter your Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={reserveForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Email</FormLabel>
                  <span className="text-sm text-red-600 mx-1">*</span>
                </div>
                <FormControl>
                  <Input required placeholder="Enter your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={reserveForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>phone</FormLabel>
                  <span className="text-sm text-red-600 mx-1">*</span>
                </div>
                <FormControl>
                  <Input required placeholder="Enter your phone" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={reserveForm.control}
            name="hotelName"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Hotel Name</FormLabel>
                  <span className="text-sm text-red-600 mx-1">*</span>
                </div>
                <FormControl>
                  <Input
                    required
                    placeholder="Enter your Hotel Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="md:ml-20">
          <FormField
            control={reserveForm.control}
            name="roomNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Room Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={reserveForm.control}
            name="count"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel>no. of people </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter no. of people"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {tourOptions && (
            <FormField
              control={reserveForm.control}
              name="options"
              render={({ field }) => (
                <FormItem className="mb-4 my-2">
                  <FormLabel>Select the items you want</FormLabel>
                  {tourOptions?.map((item, index) => (
                    <div key={index} className="flex flex-row">
                      <FormControl>
                        <Checkbox
                          className="my-2"
                          checked={(field.value as TourOption[]).some(
                            (obj) => obj.name === item.name
                          )}
                          onCheckedChange={(checked) => {
                            let result = checked
                              ? field.onChange([
                                  ...(field.value as TourOption[]),
                                  item,
                                ])
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
                        <FormLabel className="text-base">{item.name}</FormLabel>
                        <FormDescription className="font-base">
                          extra price: {item.price} $
                        </FormDescription>
                      </div>
                    </div>
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <div className="text-xl font-semibold mt-6">
            total price : {totalPrice} $
          </div>
        </div>
        <button
          disabled={!isValid}
          className="disabled:bg-gray-600 md:col-span-2 md:w-1/3 text-2xl flex justify-center font-medium mx-auto  px-5 py-2 rounded-md text-white bg-secondary-foreground transition duration-300 ease-in-out hover:bg-secondary"
          type="submit"
        >
          {!isSubmitting ? "Continue" : <LoadingSpinner className="size-7" />}
        </button>
      </form>
    </Form>
  );
}

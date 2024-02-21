"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
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
import { zodResolver } from "@hookform/resolvers/zod"
import { getSingleTour } from "@/lib/tour/tour.actions"
import { useEffect, useState } from "react"
import { TourOption } from "@/models/Tour"
import { Checkbox } from "@radix-ui/react-checkbox"


const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export default function Reserve({ params }: {
    params: { tourId: string };
}) {
    const [totalPrice, setPrice] = useState<number | null>(0)
    const [validOptions, setOption] = useState<TourOption[] | null>([])
    let { tourId } = params;
    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const tour = await getSingleTour(Number(tourId));
                const { options, price } = tour.data!;
                setPrice(price)
                setOption(options)
            } catch (error) {
                console.error('Error fetching tour data:', error);
            }
        };

        fetchTourData();
    }, [])


    const formSchema = z.object({
        name: z.string().min(2).max(50),
        email: z.string().email(),
        phone: z.string().regex(phoneRegex, 'Invalid Number'),
        hotelName: z.string().min(2).max(50),
        roomNumber: z.string().optional(),
        // date: z.date()
        options: z.array(z.string()).refine((value) => value.some((option) => option), {
            message: "You have to select at least one item.",
        }),
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            hotelName: "",
            roomNumber: "",
            options: [""]
        },
    })

    const onSubmit = form.handleSubmit(async (data) => {
        console.log(data);
    });


    return (
        <section className="capitalize md:px-24 md:pt-32 pt-52 px-10 grid md:grid-cols-2 mb-10">
            <Form {...form} >
                <form onSubmit={onSubmit} className="space-y-8">
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
                    <FormField
                        control={form.control}
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
                        control={form.control}
                        name="options"
                        render={({ field }) => (
                            <FormItem className="mb-4">
                                <FormLabel className="text-base">Select the items you want</FormLabel>
                                {validOptions?.map((item, index) => (
                                    <div key={index} className="flex flex-row">
                                        <FormControl>
                                            <Checkbox
                                                className="w-8 border-gray-900"
                                                id={item.name}
                                                checked={form.getValues('options').includes(item.name)}
                                                onChange={(checked) => {
                                                    const options = form.getValues('options');
                                                    if (checked) {
                                                        form.setValue('options', [...options, item.name]);
                                                    } else {
                                                        form.setValue('options', options.filter(value => value !== item.name));
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal">{item.name}</FormLabel>
                                    </div>
                                ))}
                                <FormMessage />
                            </FormItem>
                        )} />

                    <button className="w-1/2 block text-2xl text-center font-medium mx-auto px-5 py-2 my-16 rounded-md text-white bg-secondary-foreground hover:bg-secondary" type="submit" >Continue</button>
                </form>
            </Form>

        </section >
    )
}

import { LoadingSpinner } from "@/components/ui/loadingSpinner";


export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-primary overflow-hidden 
    flex items-center justify-center
     text-5xl font-serif text-white">
      loading...
    </div>
  )
}

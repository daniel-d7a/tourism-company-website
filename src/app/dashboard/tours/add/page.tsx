import { AddTourForm } from "./form/addTourForm";

export default function AddPage() {
  return (
    <>
      <div className="text-2xl font-semibold pt-4 pb-4 px-4 ml-0.5 bg-white flex  items-center justify-between">
        Tours
      </div>
      <AddTourForm />
    </>
  );
}

import Button from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";

export default function Signup() {
  return (
    <main className="bg-white  flex justify-center items-center px-2 py-8">
      <div className="shadow-md p-4 border md:min-w-[40%]">
        <div className="">
          <h1 className="text-xl capitalize mb-4 text-slate-600 font-medium">
            sign up
          </h1>
        </div>
        <form className="flex flex-col gap-6">
          <TextInput label={"first name"} type={"text"} />
          <TextInput label={"last name"} type={"text"} />
          <TextInput label={"email "} type={"email"} />
          <Button text={"register"}></Button>
        </form>
      </div>
    </main>
  );
}

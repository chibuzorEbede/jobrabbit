import Button from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";

export default function Login() {
  return (
    <main className="bg-white  flex  justify-center items-center px-2 py-8">
      <div className="shadow-md p-4 border md:min-w-[40%]">
        <div className="">
          <h1 className="text-xl capitalize mb-4 text-slate-600 font-medium">
            login
          </h1>
        </div>
        <form className="flex flex-col gap-6">
          <TextInput label={"username or email"} type={"email"} />
          <TextInput label={"password"} type={"password"} />

          <Button text={"login"}></Button>
        </form>
      </div>
    </main>
  );
}

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default function Form() {
  const insert = async (formData: FormData) => {
    "use server";
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const email_id = formData.get("email_id");
    const contact_number = formData.get("contact_number");
    const hardware_number = formData.get("hardware_number");
    const micellaneous = formData.get("micellaneous");

    const { error } = await supabase
      .from("capstone")
      .insert({ email_id, contact_number, hardware_number, micellaneous });

    if (error) {
      console.error(error);
    }

    revalidatePath("/");
  };

  return (
    <form action={insert}>
      <div className="grid grid-cols-2 gap-2">
        <label>Email</label>
        <input type="text" name="email_id" className="bg-zinc-100 p-1" />

        <label>Contact Number</label>
        <input type="text" name="contact_number" className="bg-zinc-100 p-1" />

        <label>Hardware Number</label>
        <input type="text" name="hardware_number" className="bg-zinc-100 p-1" />

        <label>Micellaneous</label>
        <textarea
          name="micellaneous"
          className="bg-zinc-100 p-1"
          cols={30}
          rows={3}
        ></textarea>
      </div>

      <input
        type="submit"
        value="Submit"
        className="text-white bg-black p-2 rounded hover:cursor-pointer"
      />
    </form>
  );
}

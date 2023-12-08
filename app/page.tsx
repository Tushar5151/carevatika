import Form from "@/components/form";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Index() {
  const fetchData = async () => {
    "use server";
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.from("capstone").select();

    if (error) {
      console.error(error);
    }

    return data;
  };

  const data = await fetchData();

  return (
    <main>
      <Form />
      <div className="mt-10 grid grid-cols-4">
        <span className="text-lg font-semibold">Email</span>
        <span className="text-lg font-semibold">Contact</span>
        <span className="text-lg font-semibold">Hardware No.</span>
        <span className="text-lg font-semibold">Micellaneous</span>
        {data!.map((row) => (
          <>
            <span>{row.email_id}</span>
            <span>{row.contact_number}</span>
            <span>{row.hardware_number}</span>
            <span>{row.micellaneous}</span>
          </>
        ))}
      </div>
    </main>
  );
}

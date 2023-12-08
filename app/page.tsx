import Form from "@/components/form";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";

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
      <Link href="add" className="bg-black text-white p-2 rounded">
        Add
      </Link>
      <div className="mt-10 grid grid-cols-4">
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

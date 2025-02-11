"use server";
export const createTicket = async (formData: FormData) => {
  const data = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  console.log(data);
};

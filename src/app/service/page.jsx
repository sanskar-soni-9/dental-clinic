import { redirect } from "next/navigation";

import { services } from "@/utils/data.js";

const Service = () => {
  redirect(`/service/${services[0].id}`)
};

export default Service;

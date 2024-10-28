import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">


        <ItemLayout className={"col-span-5 !p=0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Swanand-debug-141&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE58&text_bold=false"
          loading="lazy" />
        </ItemLayout>


        <ItemLayout className={"col-span-5 !p=0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=Swanand-debug-141&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE58&text_bold=false"
          loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img className="w-full h-auto" src="https://skillicons.dev/icons?i=arduino,bootstrap,css,figma,github,git,githubactions,gmail,html,instagram,java,js,linkedin,linux,mysql,nodejs,npm,opencv,php,postman,powershell,pytorch,py,react,raspberrypi,tailwind,twitter,ubuntu,vercel,visualstudio,wasm"
          loading="lazy" />
        </ItemLayout>

        </div>
        </section>
  );
};
export default AboutDetails;



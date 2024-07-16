import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { title, subtitle } from "@/components/primitives";
import Features from "@/components/Features";
export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-12 gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <h1 className={`${title()} font-pregular`}>
            Understand Your Medical Documents with{" "}
          </h1>
          <h1
            className={title({
              color: "violet",
              className:
                "bg-gradient-to-br font-psemibold from-purple-400 to-pink-400",
            })}
          >
            Ease&nbsp;
          </h1>
          <br />
          <p className={subtitle({ class: "mt-4 font-plight" })}>
            Upload your prescriptions and medical reports, and let MediClarity
            explain them in simple terms.
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            as={Link}
            className="font-psemibold bg-gradient-to-br from-purple-400 to-pink-400 text-white hover:bg-violet-500"
            href="/upload"
            size="lg"
          >
            Try It Now
          </Button>
        </div>
      </section>
      <Features />
    </>
  );
}

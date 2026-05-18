import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { getIsFreshInstance } from "@/lib/instance/service";
import { authOptions } from "@/modules/auth/lib/authOptions";
import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";

export const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const [session, isFreshInstance, isMultiOrgEnabled] = await Promise.all([
    getServerSession(authOptions),
    getIsFreshInstance(),
    getIsMultiOrgEnabled(),
  ]);

  if (session) {
    redirect(`/`);
  }

  if (isFreshInstance && !isMultiOrgEnabled) {
    redirect("/setup/intro");
  }

  return (
    <>
      <Toaster />
      <section className="relative min-h-dvh">
        <div
          className="absolute inset-x-0 top-0 z-0 hidden h-[40vh] bg-no-repeat sm:block"
          style={{ backgroundImage: "url('/images/login-top-bg.svg')", backgroundSize: "cover" }}
        />
        <div className="relative z-10 flex min-h-screen items-center justify-center sm:pb-[20vh]">
          {children}
        </div>
        <div className="fixed bottom-24 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center">
          <Image
            src="/images/login-floating-logo.svg"
            alt="arcab logo"
            className="invert-0 dark:invert"
            width={120}
            height={120}
          />
        </div>
      </section>
    </>
  );
};
